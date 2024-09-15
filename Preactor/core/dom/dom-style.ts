export class DomStyleWrapper {
  #domStyle: CS.Preactor.DomStyle;

  constructor(domStyle: CS.Preactor.DomStyle) {
    this.#domStyle = domStyle;

    return new Proxy(this, {
      set(target, prop, value) {
        target.setProperty(prop as string, value);
        return true;
      },
      get(target, prop) {
        return (target as any)[prop];
      }
    });
  }

  setProperty(name: string, value: any) {
    this.#domStyle.SetProperty(name, value);
  }
}
