class paint {
    constructor() {
        this.init();
        this.draw();
    }
    init() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = p_width;
        this.canvas.height = p_height;
        document.querySelector("body").appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = "5";
        this.ctx.lineCap = "round";
        this.pen = new pen(this);
    }
    draw() {
        this.pen.draw();
    }
}

let p = new paint();