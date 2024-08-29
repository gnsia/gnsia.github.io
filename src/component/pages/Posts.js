import Component from "../../core/Component.js";
import { postStore } from "../../core/store.js";
import PostDetail from "../posts/PostDetail.js";
import PostList from "../posts/PostList.js";

export default class Posts extends Component {
    mounted() {
        const { $el } = this;
        const { postMode } = postStore.state;
        const $child = $el.querySelector(`[data-component="${postMode}"]`);
        switch (postMode) {
            case 'list':
                new PostList($child, {});
                break;
            case 'detail':
                new PostDetail($child, {});
                break;
            default:
                //alert(`${postMode} is not available keyword reload please!`);
                break;
        }
    }
    template() {
        const { postMode } = postStore.state;
        return `
            <h2>Posts</h2>
            <div data-component="${postMode}" class="fit-parent"></div>
        `;
    }
}