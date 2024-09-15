declare namespace CS.UnityEngine {
  interface GameObject {
    GetComp<T>(type: { new (): T }): T;
    AddComp<T>(type: { new (): T }): T;
  }

  interface Component {
    GetComp<T>(type: { new (): T }): T;
    AddComp<T>(type: { new (): T }): T;
  }
}

declare namespace Preactor {
  class Event<F extends Function> {
    // Must have at least an unique member, because an empty class behaves like `any`
    #Invoke(...args: any): any;
  }

  type EventKeys<T> = { [k in keyof T]-?: T[k] extends Event<any> ? k : never }[keyof T];
  type EventGenericType<T> = T extends Event<infer F> ? F : never;
}

declare const interop: {
  add_OnReload(handler: () => void): void;
  remove_OnReload(handler: () => void): void;
  add_OnDestroy(handler: () => void): void;
  remove_OnDestroy(handler: () => void): void;

  Subscribe<T, K extends Preactor.EventKeys<T>>(
    eventSource: T,
    eventName: K,
    handler: Preactor.EventGenericType<T[K]>
  ): () => void;

  Subscribe(eventName: string, handler: () => void): () => void;
};

declare global {
  interface HTMLElement {
    style: CS.Preactor.DomStyle;
  }

  const document: Document;
  const setTimeout: (callback: () => void, delay?: number) => number;
  const clearTimeout: (id: number) => void;
  const setInterval: (callback: () => void, delay?: number) => number;
  const clearInterval: (id: number) => void;
  const requestAnimationFrame: (callback: (time: number) => void) => number;
  const cancelAnimationFrame: (id: number) => void;

  const console: {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    info: (...args: any[]) => void;
    debug: (...args: any[]) => void;
  };

  interface Event {
    type: string;
  }

  interface Text {
    data: string;
    nodeType: number;
  }
}

export {};
