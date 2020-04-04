import Square from "./Squares.js";

/**
 * Engine.
 */
export default class Engine {
    context: CanvasRenderingContext2D | null = null;
    frame: number = 0;
    squareList: Square[] = new Array<Square>(100);

    /**
     * Constructor.
     */
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

    /**
     * Loop.
     */
    public loop(): void {
        this.manage();
        this.render();
        this.frame++;
    }

    /**
     * Compute the frame.
     */
    public manage(): void {
        for (let square of this.squareList)
            square.manage();
    }

    /**
     * Display the frame.
     */
    public render(): void {
        if (this.context === null) return;
        
        this.clear(this.context, 0, 0, 0x33, 1);

        for (let square of this.squareList)
            square.render(this.context);
    }

    /**
     * Clear the screen.
     * @param context Rendering context.
     * @param r Red value.
     * @param g Green value.
     * @param b Blue value.
     * @param a Alpha value.
     */
    public clear(context: CanvasRenderingContext2D, r: number, g:number, b:number, a:number): void {
        context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", "+ a + ")";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}
