import { DomWrapper } from './dom';

interface ElementCreationOptions {
  is?: string;
}

export class DocumentWrapper {
  #doc: CS.Preactor.Document;
  #body: DomWrapper;

  public get body(): DomWrapper {
    return this.#body;
  }

  constructor(doc: CS.Preactor.Document) {
    this.#doc = doc;
    this.#body = new DomWrapper(doc.Body);
  }

  addRuntimeUss(uss: string): void {
    this.#doc.AddRuntimeUss(uss);
  }

  clearRuntimeStyleSheets(): void {
    this.#doc.ClearRuntimeStyleSheets();
  }

  createElement(tagName: string, _options?: ElementCreationOptions): DomWrapper {
    return new DomWrapper(this.#doc.CreateElement(tagName));
  }

  createElementNS(_ns: string, tagName: string, _options?: ElementCreationOptions): DomWrapper {
    return new DomWrapper(this.#doc.CreateElement(tagName));
  }

  createTextNode(text: string): DomWrapper {
    return new DomWrapper(this.#doc.CreateTextNode(text));
  }

  getElementById(id: string): DomWrapper {
    return new DomWrapper(this.#doc.GetElementById(id));
  }

  querySelectorAll(selector: string): DomWrapper[] {
    let doms = this.#doc.QuerySelectorAll(selector);
    let res = [];

    for (let i = 0; i < doms.Length; i++) {
      res.push(new DomWrapper(doms.get_Item(i)));
    }

    return res;
  }

  loadImage(path: string): Sprite {
    return this.#doc.LoadImage(path);
  }

  loadFont(path: string): Font {
    return this.#doc.LoadFont(path);
  }

  loadFontDefinition(path: string): FontDefinition {
    return this.#doc.LoadFontDefinition(path);
  }
}
