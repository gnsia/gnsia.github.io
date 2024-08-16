import Component from "../../core/Component.js";
import About from "../Pages/About.js";
import Playground from "../Pages/Playground.js";
import Posts from "../Pages/Posts.js";

export default class Page extends Component {
    mounted() {
        const { $target } = this;
        const { view } = this.props;
        switch(view) {
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