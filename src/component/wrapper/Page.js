import Component from "../../core/Component.js";
import About from "../pages/About.js";
import Playground from "../pages/Playground.js";
import Posts from "../pages/Posts.js";
import { pageStore } from "../../core/store.js";

export default class Page extends Component {
    mounted() {
        const children = {
            about: About,
            playground: Playground,
            posts: Posts,
        }
        const { view } = pageStore.state;
        const $child = this.$el.querySelector(`[data-component="${view}"]`);
        new children[view]($child);
    }
    template() {
        const { view } = pageStore.state;
        return `
                <div data-component="${view}" class="max-width"></div>
            `;

    }
}