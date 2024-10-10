import Component from "../../core/Component.js";
import Canvas from "../playground/Canvas.js";


export default class Playground extends Component {
    template() {
        return `
            <canvas id="canvas"></canvas>
        `;
    }
    mounted() {
        const { $target } = this;
        var canvas = document.getElementById("canvas");

        // canvas.height = $target.clientHeight;
        // canvas.width = $target.clientWidth;

        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
    }
}