import Component from "../../core/Component.js";
import About from "../pages/About.js";
import Home from "../pages/Home.js";
import Playground from "../pages/Playground.js";
import Posts from "../pages/Posts.js";


export default class Page extends Component {
    setup() {
        this.children = {
            about: About,
            home: Home,
            playground: Playground,
            posts: Posts,
        }
    }
    mounted() {
        const { view } = this.props;
        const { $target, children } = this;
        const $child = $target.querySelector(`[data-component="${view}"]`);
        new children[view]($child, {});
    }
    template() {
        const { view } = this.props;
        return `
                <div data-component="${view}"></div>
            `;

    }
}