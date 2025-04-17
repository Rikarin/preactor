import { hashAndAddRuntimeUss } from '../styling';
import { h } from './';
import { forwardRef } from './forwardRef';
// https://medium.com/styled-components/how-styled-components-works-618a69970421
function processTemplate(props, strings, values) {
  return values.reduce((result, expr, index) => {
    let value = typeof expr === 'function' ? expr(props) : expr;
    value = typeof value === 'function' ? value(props) : value;
    return result + (value || '') + strings[index + 1];
  }, strings[0]);
}
function styled(Tag) {
  const AnyTag = Tag;
  const tag = function (strings, ...values) {
    return forwardRef((props, ref) => {
      const style = processTemplate(props, strings, values);
      const className = hashAndAddRuntimeUss(style);
      return h(AnyTag, { ref: ref, class: className, ...props });
    });
  };
  tag.attrs = func => {
    return function (strings, ...values) {
      return props => {
        const defaultProps = func(props);
        const condensedProps = Object.assign({}, defaultProps, props);
        const style = processTemplate(condensedProps, strings, values);
        const className = hashAndAddRuntimeUss(style);
        return h(AnyTag, { class: className, ...condensedProps });
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
export const uss = function (strings, ...values) {
  return props => {
    return processTemplate(props, strings, values);
  };
};
