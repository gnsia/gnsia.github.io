import Component from "../core/Component.js";
import Header from "./wrapper/Header.js";
import Footer from "./wrapper/Footer.js";
import Page from "./wrapper/Page.js";

export default class wrapper extends Component {
    template() {
        return `
            <header data-component="header"></header>
            <hr />
            <main data-component="page"></main>
            <hr />
            <footer data-component="footer"></footer>
          `;
    }
    mounted() {
        const { $el } = this;
        new Header($el.querySelector(`[data-component="header"]`));
        new Page($el.querySelector(`[data-component="page"]`));
        new Footer($el.querySelector(`[data-component="footer"]`));
    }
}