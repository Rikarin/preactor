import { hashAndAddRuntimeUss } from '../styling';
import { h } from './';

import { forwardRef } from './forwardRef';

// https://medium.com/styled-components/how-styled-components-works-618a69970421

function processTemplate(props: any, strings: TemplateStringsArray, values: any[]): string {
  return values.reduce((result, expr, index) => {
    let value = typeof expr === 'function' ? expr(props) : expr;
    value = typeof value === 'function' ? value(props) : value;

    return result + (value || '') + strings[index + 1];
  }, strings[0]);
}

function styled<T extends keyof JSX.IntrinsicElements>(Tag: T | ((props?: any) => Element)) {
  const AnyTag = Tag as any;

  const tag = function (strings: TemplateStringsArray, ...values: any[]) {
    return forwardRef((props, ref) => {
      const style = processTemplate(props, strings, values);
      const className = hashAndAddRuntimeUss(style);

      return <AnyTag ref={ref} class={className} {...props}></AnyTag>;
    }) as any as (props: JSX.IntrinsicElements[T], ref: any) => Element;
  };

  tag.attrs = (func: (props: any) => {}) => {
    return function (strings: TemplateStringsArray, ...values: any[]) {
      return (props: any) => {
        const defaultProps = func(props);
        const condensedProps = Object.assign({}, defaultProps, props);
        const style = processTemplate(condensedProps, strings, values);
        const className = hashAndAddRuntimeUss(style);

        return <AnyTag class={className} {...condensedProps}></AnyTag>;
      };
    };
  };

  return tag;
}

styled.div = styled('div');
styled.button = styled('button');
styled.textfield = styled('textfield');
styled.integerfield = styled('integerfield');

export { styled as default };

export const uss = function (strings: TemplateStringsArray, ...values: any[]) {
  return (props: any) => {
    return processTemplate(props, strings, values);
  };
};

export type CompType<T, K> = (props: K | T, ref: any) => Element;
