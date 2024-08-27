import Component from "../core/Component.js";
import Header from "./wrapper/Header.js";
import Footer from "./wrapper/Footer.js";
import Page from "./wrapper/Page.js";
import { observe } from "../core/observer.js";

export default class wrapper extends Component {
    template() {
        return `
            <header data-component="header" class="header"></header>
            <main data-component="page" class="page"></main>
            <footer data-component="footer" class="footer"></footer>
          `;
    }
    mounted() {
        const { $el } = this;

        const $header = $el.querySelector(`[data-component="header"]`);
        new Header($header, {});

        const $page = $el.querySelector(`[data-component="page"]`);
        new Page($page, {});

        const $footer = $el.querySelector(`[data-component="footer"]`);
        new Footer($footer, {});
    }
}