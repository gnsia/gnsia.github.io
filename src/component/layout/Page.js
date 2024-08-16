import Component from "../../core/Component.js";
import About from "../pages/About.js";
import Home from "../pages/Home.js";
import Playground from "../pages/Playground.js";
import Posts from "../pages/Posts.js";

export default class Page extends Component {
    mounted() {
        const { $target } = this;
        const { view } = this.props;
        const $child = $target.querySelector(`[data-component="${view}"]`);
        switch(view) {
            case 'home':
                new Home($child, {});
                break;
            case 'about':
                new About($child, {});
                break;
            case 'playground':
                new Playground($child, {});
                break;
            case 'posts':
                new Posts($child, {});
                break;
            default:
                alert(`${view} is not available keyword re-load please~!`);
                break;
        }
    }
    template() {
        const { view } = this.props;
        return `
            <div data-component="${view}"></div>
        `;
    }
}