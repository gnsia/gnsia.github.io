import Component from "../../core/Component.js";
import Canvas from "../playground/Canvas.js";


export default class Playground extends Component {
    template() {
        return `
            <canvas data-component="canvas" width="300" height="300"></canvas>
        `;
    }
    mounted() {
        const $canvas = $target.querySelector('[data-component="canvas"]');
        new Canvas($canvas, {});
    }
}