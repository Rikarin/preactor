import { DomStyleWrapper } from './dom-style';
export class DomWrapper {
    #dom;
    #domStyleWrapper;
    #cachedChildren = null;
    #boundListeners = new WeakMap();
    get _dom() {
        return this.#dom;
    }
    get ve() {
        return this.#dom.VisualElement;
    }
    get childNodes() {
        if (!this.#cachedChildren) {
            this.#cachedChildren = new Array(this.#dom.ChildNodes.Length);
            for (let i = 0; i < this.#dom.ChildNodes.Length; i++) {
                this.#cachedChildren[i] = new DomWrapper(this.#dom.ChildNodes.get_Item(i));
            }
        }
        return this.#cachedChildren;
    }
    get firstChild() {
        return this.#dom.FirstChild ? new DomWrapper(this.#dom.FirstChild) : null;
    }
    get parentNode() {
        return this.#dom.ParentNode ? new DomWrapper(this.#dom.ParentNode) : null;
    }
    get nextSibling() {
        return this.#dom.NextSibling ? new DomWrapper(this.#dom.NextSibling) : null;
    }
    get nodeType() {
        return this.#dom.NodeType;
    }
    get Id() {
        return this.#dom.Id;
    }
    set Id(value) {
        this.#dom.Id = value;
    }
    get key() {
        return this.#dom.Key;
    }
    set key(value) {
        this.#dom.Key = value;
    }
    get style() {
        return this.#domStyleWrapper;
    }
    get value() {
        return this.#dom.Value;
    }
    get checked() {
        return this.#dom.Checked;
    }
    get data() {
        return this.#dom.Data;
    }
    set data(value) {
        this.#dom.Data = value;
    }
    get classname() {
        return this.#dom.ClassName;
    }
    set classname(value) {
        this.#dom.ClassName = value;
    }
    constructor(dom) {
        this.#dom = dom;
        this.#domStyleWrapper = new DomStyleWrapper(dom.Style);
    }
    appendChild(child) {
        if (child) {
            this.#dom.AppendChild(child.#dom);
            this.#cachedChildren = null;
        }
    }
    removeChild(child) {
        if (child) {
            this.#dom.RemoveChild(child.#dom);
            this.#cachedChildren = null;
        }
    }
    insertBefore(a, b) {
        this.#dom.InsertBefore(a?._dom, b?._dom);
        this.#cachedChildren = null;
    }
    clearChildren() {
        this.#dom.ClearChildren();
        this.#cachedChildren = null;
    }
    focus() {
        this.#dom.Focus();
    }
    contains(element) {
        if (!element) {
            return false;
        }
        return this.#dom.Contains(element.#dom);
    }
    addEventListener(type, listener, useCapture) {
        let boundListener = this.#boundListeners.get(listener);
        if (!boundListener) {
            boundListener = listener.bind(this);
            this.#boundListeners.set(listener, boundListener);
        }
        this.#dom.AddEventListener(type, listener.bind(this), useCapture);
    }
    removeEventListener(type, listener, useCapture) {
        const boundListener = this.#boundListeners.get(listener);
        if (boundListener) {
            this.#dom.RemoveEventListener(type, listener.bind(this), useCapture);
            this.#boundListeners.delete(listener);
        }
    }
    setAttribute(name, value) {
        this.#dom.SetAttribute(name, value);
    }
    removeAttribute(name) {
        this.#dom.RemoveAttribute(name);
    }
}
