import Square from "./Squares.js";
export default class Engine {
    constructor() {
        this.context = null;
        this.frame = 0;
        this.squareList = new Array(100);
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var content = document.getElementById("content");
        if (content !== null) {
            content.appendChild(canvas);
            this.context = canvas.getContext("2d");
            for (let index = 0; index < this.squareList.length; index++) {
                this.squareList[index] = new Square();
            }
        }
    }
    loop() {
        this.manage();
        this.render();
        this.frame++;
    }
    manage() {
        for (let square of this.squareList)
            square.manage();
    }
    render() {
        if (this.context === null)
            return;
        this.clear(this.context, 0, 0, 0x33, 1);
        for (let square of this.squareList)
            square.render(this.context);
    }
    clear(context, r, g, b, a) {
        context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}
