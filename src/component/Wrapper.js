import Component from "../core/Component.js";
import Header from "./wrapper/Header.js";
import Footer from "./wrapper/Footer.js";
import Page from "./wrapper/Page.js";

export default class wrapper extends Component {
    setup() {
        this.state = {
            view: 'posts', // posts, playground, about
        }
    }
    template() {
        return `
            <header data-component="header" class="header"></header>
            <main data-component="page" class="page"></main>
            <footer data-component="footer" class="footer"></footer>
          `;
    }
    mounted() {
        const { view } = this.state;
        const { $target, changeViewHandler } = this;
        
        const $header = $target.querySelector(`[data-component="header"]`);
        new Header($header, {
            view,
            changeViewHandler: changeViewHandler.bind(this),
        });

        const $page = $target.querySelector(`[data-component="page"]`);
        new Page($page, { view });

        const $footer = $target.querySelector(`[data-component="footer"]`);
        new Footer($footer, {});
    }
    changeViewHandler(view) {
        this.setState({ view });
    }
}