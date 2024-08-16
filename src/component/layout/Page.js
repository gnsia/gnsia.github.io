import Component from "../../core/Component.js";
import About from "../pages/About.js";
import Home from "../pages/Home.js";
import Playground from "../pages/Playground.js";
import Posts from "../pages/Posts.js";

export default class Page extends Component {
    mounted() {
        const { $target } = this;
        const { view } = this.props;
        switch(view) {
            case 'home':
                const $home = $target.querySelector(`[data-component="home"]`);
                new Home($home, {});
                break;
            case 'about':
                const $about = $target.querySelector(`[data-component="about"]`);
                new About($about, {});
                break;
            case 'playground':
                const $Playground = $target.querySelector(`[data-component="playground"]`);
                new Playground($Playground, {});
                break;
            case 'posts':
                const $posts = $target.querySelector(`[data-component="posts"]`);
                new Posts($posts, {});
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