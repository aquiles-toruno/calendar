"use strict";

Array.prototype.findElementByProp = function (prop, value) {
    return this.filter(function (element) {
        return element[prop] == value;
    });
};