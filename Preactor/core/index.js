import { DocumentWrapper } from './dom/document';
export { emo } from './styling/index';
// @ts-ignore
globalThis.document = new DocumentWrapper(__document);
