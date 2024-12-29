import { ComponentChild, FunctionalComponent, Ref, options } from './';

let oldDiffHook = (options as any)._diff;

(options as any)._diff = (vnode: any) => {
  if (vnode.type && vnode.type._forwarded && vnode.ref) {
    vnode.props.ref = vnode.ref;
    vnode.ref = null;
  }

  oldDiffHook?.(vnode);
};

export const REACT_FORWARD_SYMBOL =
  (typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.forward_ref')) || 0xf47;

interface ForwardFn<P = {}, T = any> {
  (props: P, ref: Ref<T>): ComponentChild;
  displayName?: string;
}

export function forwardRef<R, P = {}>(fn: ForwardFn<P, R>): FunctionalComponent<Omit<P, 'ref'> & { ref?: Ref<R> }> {
  function Forwarded(props: any) {
    const clone = { ...props };
    delete clone.ref;
    return fn(clone, props.ref || null);
  }

  Forwarded.$$typeof = REACT_FORWARD_SYMBOL;
  Forwarded.render = Forwarded;
  Forwarded.prototype.isReactComponent = Forwarded._forwarded = true;
  Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';

  return Forwarded as any;
}
