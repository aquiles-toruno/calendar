Number.prototype.toArray = function (initialElement = 1, lastElement = this) {
    var array = [];
    for (let index = initialElement; index <= lastElement; index++) {
        array.push(index);
    }

    return array;
}

Number.prototype.getIndex = function () {
    return this - 1;
}