"use strict";

Number.prototype.toArray = function () {
    var initialElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var lastElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

    var array = [];
    for (var index = initialElement; index <= lastElement; index++) {
        array.push(index);
    }

    return array;
};

Number.prototype.getIndex = function () {
    return this - 1;
};