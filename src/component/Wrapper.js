import Component from "../core/Component.js";
import Header from "./wrapper/Header.js";
import Footer from "./wrapper/Footer.js";
import Page from "./wrapper/Page.js";
import { observe } from "../core/observer.js";

export default class wrapper extends Component {
    setup() {
        observe(() => {
            this.render();
            this.setEvent();
        });
    }
    template() {
        return `
            <header data-component="header" class="header"></header>
            <main data-component="page" class="page"></main>
            <footer data-component="footer" class="footer"></footer>
          `;
    }
    mounted() {
        const { $target } = this;

        const $header = $target.querySelector(`[data-component="header"]`);
        new Header($header, {});

        const $page = $target.querySelector(`[data-component="page"]`);
        new Page($page, {});

        const $footer = $target.querySelector(`[data-component="footer"]`);
        new Footer($footer, {});
    }
}