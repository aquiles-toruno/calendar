Array.prototype.findElementByProp = function (prop, value) {
    return this.filter(element => {
        return element[prop] == value;
    });
}