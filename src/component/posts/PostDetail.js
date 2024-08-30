import Component from "../../core/Component.js";
import POST_LIST from "../../../assets/posts/POST_LIST.js";
import { postStore } from "../../core/store.js";

export default class PostDetail extends Component {
    template() {
        const { content } = postStore.state;
        const { prev, list, next } = this;
        if (content) {
            return `
            <div class="content">
                ${content}
            </div>
            <span class="flex justify-between">[ ${prev} / ${list} / ${next} ]</span>           
        `;
        } else {
            return `<h3 class="loading">post is coming...</h3>`
        }
    }
    get list() {
        return `<a href="javascript:void(0)" data-post-mode="list">list</a>`;
    }
    get prev() {
        const postId = parseInt(postStore.state.postId);
        if (postId < POST_LIST.length - 1) {
            const post = POST_LIST.find(p => p.id === postId + 1);
            return `<a href="javascript:void(0)" 
                        data-post-id="${post.id}"
                        data-post-date="${post.date}"
                        data-post-mode="detail">prev</a>`;
        } else {
            return `<span>prev</span>`;
        }
    }
    get next() {
        const postId = parseInt(postStore.state.postId);
        if (postId > 0) {
            const post = POST_LIST.find(p => p.id === postId - 1);
            return `<a href="javascript:void(0)" 
                        data-post-id="${post.id}"
                        data-post-date="${post.date}"
                        data-post-mode="detail">next</a>`;
        } else {
            return `<span>next</span>`;
        }
    }
    setEvent() {
        this.$el.addEventListener('click', ({ target }) => {
            if (target.tagName !== 'A') return;
            const { postId, postDate, postMode } = target.dataset;
            if (postMode === 'list') {
                postStore.setState({ postId: 0, postDate: '', postMode, content: null });
            } else {
                postStore.setState({ postId, postDate, postMode, content: null });
            }
        });
    }
    dynamicImport() {
        const { content, postDate, postMode } = postStore.state;
        if (!content && postMode === 'detail') { this.getPost(postDate) }
    }
    async getPost(postDate) {
        const path = `../../../assets/posts/${postDate}/POST.js`;
        const impoted = await import(path);
        postStore.setState({ content: impoted.default });
    }
}