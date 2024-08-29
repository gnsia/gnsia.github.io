import Component from "../../core/Component.js";
import { postStore } from "../../core/store.js";
import PostDetail from "../posts/PostDetail.js";
import PostList from "../posts/PostList.js";

export default class Posts extends Component {
    mounted() {
        const children = {
            list: PostList,
            detail: PostDetail
        }
        const { $el } = this;
        const { postMode } = postStore.state;
        new children[postMode]($el.querySelector(`[data-component="${postMode}"]`));
    }
    template() {
        const { postMode } = postStore.state;
        return `
            <div data-component="${postMode}" class="fit-parent"></div>
        `;
    }
}