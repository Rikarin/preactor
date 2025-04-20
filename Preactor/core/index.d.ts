import { DocumentWrapper } from './dom/document';
import { DomWrapper } from './dom/dom';
export { emo } from './styling/index';
declare global {
  interface Document extends DocumentWrapper {}
  interface Element extends DomWrapper {}
}
