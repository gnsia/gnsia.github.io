export default class Canvas {
    ctx;
    constructor(ctx) {
        this.ctx = ctx;
        draw();
    }
    draw() {
        const { ctx } = this;
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
    }
}