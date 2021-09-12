class pen {
    constructor(paint) {
        this.paint = paint;
        this.mouseDown = false;
    }
    draw() {
        // when click draw a dot
        this.paint.canvas.addEventListener("click", (e) => {
            this.paint.ctx.beginPath();
            this.paint.ctx.lineTo(e.offsetX, e.offsetY);
            this.paint.ctx.stroke();
        });
        // begin draw
        this.paint.canvas.addEventListener("mousedown", (e) => {
            this.mouseDown = true;
            this.paint.ctx.beginPath();
        });
        // drawing
        this.paint.canvas.addEventListener("mousemove", (e) => {
            if(!this.mouseDown) return;
            this.paint.ctx.lineTo(e.offsetX, e.offsetY);
            this.paint.ctx.stroke();
        });
        // end draw
        this.paint.canvas.addEventListener("mouseup", () => {
            this.mouseDown = false;
        });
    }
}