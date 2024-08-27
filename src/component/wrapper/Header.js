import Component from "../../core/Component.js";
import Nav from "../Header/Nav.js";
import Title from "../Header/Title.js";

export default class Header extends Component {
    template() {
        return `
            <div data-component="title"></div>
            <nav data-component="nav"></nav>
        `;
    }
    mounted() {
        const { $el } = this;
        new Title($el.querySelector('[data-component="title"]'));
        new Nav($el.querySelector('[data-component="nav"]'));
    }
}