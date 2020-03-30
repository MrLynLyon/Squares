var engine = null;
window.onload = function () {
    engine = new Engine();
    window.requestAnimationFrame(loop);
};
var loop = function () {
    engine.loop();
    window.requestAnimationFrame(this.loop);
};
var Engine = /** @class */ (function () {
    function Engine() {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var content = document.getElementById("content");
        content.appendChild(canvas);
        this.context = canvas.getContext("2d");
        this.frame = 0;
        this.squareList = new Array(100);
        for (var index = 0; index < this.squareList.length; index++) {
            this.squareList[index] = new Square();
        }
    }
    Engine.prototype.loop = function () {
        this.manage();
        this.render();
        this.frame++;
    };
    Engine.prototype.manage = function () {
        for (var _i = 0, _a = this.squareList; _i < _a.length; _i++) {
            var square = _a[_i];
            square.manage();
        }
    };
    Engine.prototype.render = function () {
        this.clear(this.context, 0, 0, 0x33, 1);
        for (var _i = 0, _a = this.squareList; _i < _a.length; _i++) {
            var square = _a[_i];
            square.render(this.context);
        }
    };
    Engine.prototype.clear = function (context, r, g, b, a) {
        context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };
    return Engine;
}());
var Square = /** @class */ (function () {
    function Square() {
        this.x = Math.round(Math.random() * (window.innerWidth - 50 - 1));
        this.y = Math.round(Math.random() * (window.innerHeight - 50 - 1));
        this.width = 50;
        this.height = 50;
        this.incX = (Math.random() * 6) - 3;
        this.incY = (Math.random() * 6) - 3;
        this.colorR = Math.round(Math.random() * 0xff);
        this.colorG = Math.round(Math.random() * 0xff);
        this.colorB = Math.round(Math.random() * 0xff);
        this.colorA = Math.random();
    }
    Square.prototype.manage = function () {
        if (this.x < 0 || this.x > window.innerWidth - this.width - 1)
            this.incX *= -1;
        if (this.y < 0 || this.y > window.innerHeight - this.height - 1)
            this.incY *= -1;
        this.x += this.incX;
        this.y += this.incY;
    };
    Square.prototype.render = function (context) {
        context.fillStyle = "rgba(" + this.colorR + ", " + this.colorG + ", " + this.colorB + ", " + this.colorA + ")";
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    return Square;
}());
//# sourceMappingURL=Squares.js.map