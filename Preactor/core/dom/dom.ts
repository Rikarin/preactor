import { EventBase } from 'UnityEngine/UIElements';
import { DomStyleWrapper } from './dom-style';

export class DomWrapper {
  #dom: CS.Preactor.Dom;
  #domStyleWrapper: DomStyleWrapper;

  #cachedChildren: DomWrapper[] | null = null;
  #boundListeners = new WeakMap();

  public get _dom(): CS.Preactor.Dom {
    return this.#dom;
  }

  public get ve(): CS.UnityEngine.UIElements.VisualElement {
    return this.#dom.VisualElement;
  }

  public get childNodes(): DomWrapper[] {
    if (!this.#cachedChildren) {
      this.#cachedChildren = new Array(this.#dom.ChildNodes.Length) as DomWrapper[];

      for (let i = 0; i < this.#dom.ChildNodes.Length; i++) {
        this.#cachedChildren[i] = new DomWrapper(this.#dom.ChildNodes.get_Item(i));
      }
    }

    return this.#cachedChildren;
  }

  public get firstChild(): DomWrapper | null {
    return this.#dom.FirstChild ? new DomWrapper(this.#dom.FirstChild) : null;
  }

  public get parentNode(): DomWrapper | null {
    return this.#dom.ParentNode ? new DomWrapper(this.#dom.ParentNode) : null;
  }

  public get nextSibling(): DomWrapper | null {
    return this.#dom.NextSibling ? new DomWrapper(this.#dom.NextSibling) : null;
  }

  public get nodeType(): number {
    return this.#dom.NodeType;
  }
  public get Id(): string {
    return this.#dom.Id;
  }
  public set Id(value: string) {
    this.#dom.Id = value;
  }
  public get key(): string {
    return this.#dom.Key;
  }
  public set key(value: string) {
    this.#dom.Key = value;
  }
  public get style(): DomStyleWrapper {
    return this.#domStyleWrapper;
  }
  public get value(): any {
    return this.#dom.Value;
  }
  public get checked(): boolean {
    return this.#dom.Checked;
  }
  public get data(): any {
    return this.#dom.Data;
  }
  public set data(value: any) {
    this.#dom.Data = value;
  }

  public get classname(): string {
    return this.#dom.ClassName;
  }
  public set classname(value: string) {
    this.#dom.ClassName = value;
  }

  constructor(dom: CS.Preactor.Dom) {
    this.#dom = dom;
    this.#domStyleWrapper = new DomStyleWrapper(dom.Style);
  }

  appendChild(child: DomWrapper) {
    if (child) {
      this.#dom.AppendChild(child.#dom);
      this.#cachedChildren = null;
    }
  }

  removeChild(child: DomWrapper) {
    if (child) {
      this.#dom.RemoveChild(child.#dom);
      this.#cachedChildren = null;
    }
  }

  insertBefore(a: DomWrapper, b: DomWrapper) {
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

  contains(element: DomWrapper) {
    if (!element) {
      return false;
    }

    return this.#dom.Contains(element.#dom);
  }

  addEventListener(type: string, listener: (event: EventBase) => void, useCapture?: boolean) {
    let boundListener = this.#boundListeners.get(listener);

    if (!boundListener) {
      boundListener = listener.bind(this);
      this.#boundListeners.set(listener, boundListener);
    }

    this.#dom.AddEventListener(type, listener.bind(this), useCapture);
  }

  removeEventListener(type: string, listener: (event: EventBase) => void, useCapture?: boolean) {
    const boundListener = this.#boundListeners.get(listener);

    if (boundListener) {
      this.#dom.RemoveEventListener(type, listener.bind(this), useCapture);
      this.#boundListeners.delete(listener);
    }
  }

  setAttribute(name: string, value: any) {
    this.#dom.SetAttribute(name, value);
  }

  removeAttribute(name: string) {
    this.#dom.RemoveAttribute(name);
  }
}
