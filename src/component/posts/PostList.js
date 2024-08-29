import Component from "../../core/Component.js";
import POST_LIST from "../../../assets/posts/POST_LIST.js";
import { postStore } from "../../core/store.js";

export default class PostList extends Component {
    template() {
        return `
            <ol>
            ${POST_LIST.map(post => `
                <li class="margin">
                    <a href="javascript:void(0)" 
                        data-post-id="${post.id}"
                        data-post-date="${post.date}"
                        data-post-mode="detail"
                    >
                        ${post.title}
                    </a>
                    <i>.......${post.date}</i>
                </li>
            `).join('')}
            </ol>
        `;
    }
    setEvent() {
        const { $el } = this;
        $el.addEventListener('click', ({ target }) => {
            const { postId, postDate, postMode } = target.dataset;
            if (postMode === 'detail') {
                postStore.setState({ postDate, postMode, postId: parseInt(postId) });
            }
        });
    }
}