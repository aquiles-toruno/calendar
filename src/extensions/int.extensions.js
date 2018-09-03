Number.prototype.toArray = function () {
    var array = [];
    for (let index = 1; index <= this; index++) {
        array.push(index);
    }

    return array;
}

Number.prototype.getIndex = function () {
    return this - 1;
}