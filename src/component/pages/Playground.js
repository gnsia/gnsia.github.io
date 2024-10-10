import Component from "../../core/Component.js";
import Canvas from "../playground/Canvas.js";


export default class Playground extends Component {
    template() {
        return `
            <canvas id="canvas" width="300" height="300"></canvas>
        `;
    }
    mounted() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        new Canvas(ctx);
    }
}