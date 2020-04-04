/**
 * Represent a square.
 */
export default class Square {
    // X coordinate.
    x: number;

    // Y coordinate.
    y: number;

    // Width.
    width: number;

    // Height.
    height: number;

    // Increment use for the x coordinate move.
    incX: number;

    // Increment use for the y coordinate move.
    incY: number;

    // Red value.
    colorR: number;

    // Green value.
    colorG: number;

    // Blue value.
    colorB: number;

    // Alpha value.
    colorA: number;

    /**
     * Constructor.
     */
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

    /**
     * Compute the square's position.
     */
    public manage() {
        if (this.x < 0 || this.x > window.innerWidth - this.width - 1)
            this.incX *= -1;

        if (this.y < 0 || this.y > window.innerHeight - this.height - 1)
            this.incY *= -1;

        this.x += this.incX;
        this.y += this.incY;
    }

    /**
     * Render the square.
     * @param context Rendering context.
     */
    public render(context: CanvasRenderingContext2D): void {
        context.fillStyle = "rgba(" + this.colorR + ", " + this.colorG + ", " + this.colorB + ", "+ this.colorA + ")";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
