import { options } from './';
let oldDiffHook = options._diff;
options._diff = (vnode) => {
    if (vnode.type && vnode.type._forwarded && vnode.ref) {
        vnode.props.ref = vnode.ref;
        vnode.ref = null;
    }
    oldDiffHook?.(vnode);
};
export const REACT_FORWARD_SYMBOL = (typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.forward_ref')) || 0xf47;
export function forwardRef(fn) {
    function Forwarded(props) {
        const clone = { ...props };
        delete clone.ref;
        return fn(clone, props.ref || null);
    }
    Forwarded.$$typeof = REACT_FORWARD_SYMBOL;
    Forwarded.render = Forwarded;
    Forwarded.prototype.isReactComponent = Forwarded._forwarded = true;
    Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';
    return Forwarded;
}
