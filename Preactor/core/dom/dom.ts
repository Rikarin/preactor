import { EventBase } from 'UnityEngine/UIElements';
import { DomStyleWrapper } from './dom-style';

export class DomWrapper {
  #dom: CS.Preactor.Dom;
  #domStyleWrapper: DomStyleWrapper;

  public get _dom(): CS.Preactor.Dom {
    return this.#dom;
  }

  public get ve(): CS.UnityEngine.UIElements.VisualElement {
    return this.#dom.VisualElement;
  }

  public get childNodes(): DomWrapper[] {
    return (this.#dom.ChildNodes as unknown as CS.Preactor.Dom[]).map(x => new DomWrapper(x));
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
    this.#dom.AppendChild(child.#dom);
  }

  removeChild(child: DomWrapper) {
    this.#dom.RemoveChild(child.#dom);
  }

  insertBefore(a: DomWrapper, b: DomWrapper) {
    this.#dom.InsertBefore(a?._dom, b?._dom);
  }

  clearChildren() {
    this.#dom.ClearChildren();
  }

  focus() {
    this.#dom.Focus();
  }

  contains(element: DomWrapper) {
    return this.#dom.Contains(element.#dom);
  }

  addEventListener(type: string, listener: (event: EventBase) => void, useCapture?: boolean) {
    // @ts-ignore
    this.#dom.AddEventListener(type, listener.bind(this), useCapture);
  }

  removeEventListener(type: string, listener: (event: EventBase) => void, useCapture?: boolean) {
    // @ts-ignore
    this.#dom.RemoveEventListener(type, listener.bind(this), useCapture);
  }

  setAttribute(name: string, value: any) {
    this.#dom.SetAttribute(name, value);
  }

  removeAttribute(name: string) {
    this.#dom.RemoveAttribute(name);
  }
}
