import { DomWrapper } from './dom';
interface ElementCreationOptions {
    is?: string;
}
export declare class DocumentWrapper {
    #private;
    get body(): DomWrapper;
    constructor(doc: CS.Preactor.Document);
    addRuntimeUss(uss: string): void;
    clearRuntimeStyleSheets(): void;
    createElement(tagName: string, _options?: ElementCreationOptions): DomWrapper;
    createElementNS(_ns: string, tagName: string, _options?: ElementCreationOptions): DomWrapper;
    createTextNode(text: string): DomWrapper;
    getElementById(id: string): DomWrapper;
    querySelectorAll(selector: string): DomWrapper[];
    loadImage(path: string): Sprite;
    loadFont(path: string): Font;
    loadFontDefinition(path: string): FontDefinition;
}
export {};
