import Component from "../../core/Component.js";
import CanvasTutorial from "../playground/CanvasTutorial.js";


export default class Playground extends Component {
    template() {
        return `
            <canvas></canvas>
        `;
    }
}