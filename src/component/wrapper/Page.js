import Component from "../../core/Component.js";
import About from "../pages/About.js";
import Playground from "../pages/Playground.js";
import Posts from "../pages/Posts.js";
import { store } from "../../core/store.js";
import { observe } from "../../core/observer.js";

export default class Page extends Component {
    setup() {
        this.children = {
            about: About,
            playground: Playground,
            posts: Posts,
        }
        observe(() => {
            this.render();
            this.setEvent();
        });
    }
    mounted() {
        const { pageView } = store.state;
        const { $target, children } = this;
        const $child = $target.querySelector(`[data-component="${pageView}"]`);
        new children[pageView]($child, {});
    }
    template() {
        const { view } = store.state;
        return `
                <div data-component="${view}"></div>
            `;

    }
}