import Component from "../../core/Component.js";

export default class Canvas extends Component {
    setup() {
        alert('hello I am Canvas');
    }
    template() {
        return `
            <h3>Canvas</h3>
        `;
    }
}