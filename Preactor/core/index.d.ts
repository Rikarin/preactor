import { DocumentWrapper } from './dom/document';
import { DomWrapper } from './dom/dom';
export declare function h(type: any, props: any, ...children: any[]): any;
export { emo } from './styling/index';
declare global {
    interface Document extends DocumentWrapper {
    }
    interface Element extends DomWrapper {
        classname: string;
        nodeType: number;
        ve: CS.UnityEngine.UIElements.VisualElement;
    }
}
