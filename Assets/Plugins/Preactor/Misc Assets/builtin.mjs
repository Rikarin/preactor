﻿const __addToGlobal = function(name, obj) {
    const parts = name.split('.');
    let current = globalThis;

    for (let i = 0; i < parts.length - 1; i++) {
        current[parts[i]] = current[parts[i]] || {};
        current = current[parts[i]];
    }

    current[parts[parts.length - 1]] = obj;
};

const performance = {
    now: function () {
        return CS.UnityEngine.Time.realtimeSinceStartupAsDouble * 1000
    }
}

const requestAnimationFrame = function (callback) {
    return setTimeout(() => callback(CS.UnityEngine.Time.realtimeSinceStartupAsDouble * 1000))
}

const cancelAnimationFrame = function (id) {
    clearTimeout(id)
}

CS.UnityEngine.GameObject.prototype.GetComp = function (type) {
    return this.GetComponent(puer.$typeof(type))
}

CS.UnityEngine.GameObject.prototype.AddComp = function (type) {
    return this.AddComponent(puer.$typeof(type))
}

CS.UnityEngine.Component.prototype.GetComp = function (type) {
    return this.GetComponent(puer.$typeof(type))
}

CS.UnityEngine.Component.prototype.AddComp = function (type) {
    return this.AddComponent(puer.$typeof(type))
}
