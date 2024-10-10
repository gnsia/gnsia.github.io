import Component from "../../core/Component.js";

export default class Canvas extends Component {
    setEvent() {
        alert('hello I am Canvas');
    }
    template() {
        return `
            <h3>Canvas</h3>
        `;
    }
}