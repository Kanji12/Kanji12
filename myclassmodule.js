module.exports = function (l, w) {
    this.length = l;
    this.width = w;
    this.getArea = function () {
        var temp = parseInt(this.length) * parseInt(this.width);
        return temp
    }
}