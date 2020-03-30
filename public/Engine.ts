import Square from "./Squares.js";

export default class Engine {
    context: CanvasRenderingContext2D | null = null;
    frame: number = 0;
    squareList: Square[] = new Array<Square>(100);

    public constructor() {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var content = document.getElementById("content");

        if (content !== null ){
            content.appendChild(canvas);
            
            this.context = canvas.getContext("2d");
            
            for (let index = 0; index < this.squareList.length; index++) {
                this.squareList[index] = new Square();
            }
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
        if (this.context === null) return;
        
        this.clear(this.context, 0, 0, 0x33, 1);

        for (let square of this.squareList)
            square.render(this.context);
    }

    public clear(context: CanvasRenderingContext2D, r: number, g:number, b:number, a:number): void {
        context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", "+ a + ")";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}
