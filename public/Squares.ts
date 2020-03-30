var engine: Engine = null;

window.onload = function () {
    engine = new Engine();
    window.requestAnimationFrame(loop);
};

var loop = function() {
    engine.loop();
    window.requestAnimationFrame(this.loop);
};

class Engine {
    context: CanvasRenderingContext2D;
    frame: number;
    squareList: Square[];

    public constructor() {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var content = document.getElementById("content");
        content.appendChild(canvas);

        this.context = canvas.getContext("2d");
        this.frame = 0;

        this.squareList = new Array<Square>(100);

        for (let index = 0; index < this.squareList.length; index++) {
            this.squareList[index] = new Square();
        }
    }

    public loop(): void {
        this.manage();
        this.render();
        this.frame++;
    }

    public manage(): void {
        for (let square of this.squareList)
            square.manage();
    }

    public render(): void {
        this.clear(this.context, 0, 0, 0x33, 1);

        for (let square of this.squareList)
            square.render(this.context);
    }

    public clear(context: CanvasRenderingContext2D, r: number, g:number, b:number, a:number): void {
        context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", "+ a + ")";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}

class Square {
    x: number;
    y: number;
    width: number;
    height: number;
    incX: number;
    incY: number;
    colorR: number;
    colorG: number;
    colorB: number;
    colorA: number;

    public constructor() {
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

    public manage() {
        if (this.x < 0 || this.x > window.innerWidth - this.width - 1)
            this.incX *= -1;

        if (this.y < 0 || this.y > window.innerHeight - this.height - 1)
            this.incY *= -1;

        this.x += this.incX;
        this.y += this.incY;
    }

    public render(context: CanvasRenderingContext2D): void {
        context.fillStyle = "rgba(" + this.colorR + ", " + this.colorG + ", " + this.colorB + ", "+ this.colorA + ")";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}