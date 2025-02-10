export class DomStyleWrapper {
    #domStyle;
    constructor(domStyle) {
        this.#domStyle = domStyle;
        return new Proxy(this, {
            set(target, prop, value) {
                target.setProperty(prop, value);
                return true;
            },
            get(target, prop) {
                return target[prop];
            }
        });
    }
    setProperty(name, value) {
        this.#domStyle.SetProperty(name, value);
    }
}
