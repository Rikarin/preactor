import { DomWrapper } from './dom/dom';
import { DocumentWrapper } from './dom/document';
export { emo } from './styling/index';
declare global {
  interface Document extends DocumentWrapper {}
  interface Element extends DomWrapper {}
}
