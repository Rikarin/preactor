import { DomWrapper } from './dom';
export class DocumentWrapper {
    #doc;
    #body;
    get body() {
        return this.#body;
    }
    constructor(doc) {
        this.#doc = doc;
        this.#body = new DomWrapper(doc.Body);
    }
    addRuntimeUss(uss) {
        this.#doc.AddRuntimeUss(uss);
    }
    clearRuntimeStyleSheets() {
        this.#doc.ClearRuntimeStyleSheets();
    }
    createElement(tagName, _options) {
        return new DomWrapper(this.#doc.CreateElement(tagName));
    }
    createElementNS(_ns, tagName, _options) {
        return new DomWrapper(this.#doc.CreateElement(tagName));
    }
    createTextNode(text) {
        return new DomWrapper(this.#doc.CreateTextNode(text));
    }
    getElementById(id) {
        return new DomWrapper(this.#doc.GetElementById(id));
    }
    querySelectorAll(selector) {
        let doms = this.#doc.QuerySelectorAll(selector);
        let res = [];
        for (let i = 0; i < doms.Length; i++) {
            res.push(new DomWrapper(doms.get_Item(i)));
        }
        return res;
    }
    loadImage(path) {
        return this.#doc.LoadImage(path);
    }
    loadFont(path) {
        return this.#doc.LoadFont(path);
    }
    loadFontDefinition(path) {
        return this.#doc.LoadFontDefinition(path);
    }
}
