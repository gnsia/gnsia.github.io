import Component from "../../core/Component.js";
import POST_LIST from "../../../assets/posts/POST_LIST.js";
import { postStore, store } from "../../core/store.js";

export default class PostDetail extends Component {
    template() {
        const { content } = this.props;
        const { prev, list, next } = this;
        if (content) {
            return `
            ${content}
            <span>[ ${prev} / ${list} / ${next} ]</span>           
        `;
        } else {
            return `<h3 class="loading">post is coming...</h3>`
        }
    }
    get list() {
        return `<a href="javascript:void(0)" data-post-mode="list">list</a>`;
    }
    get next() {
        const { postId } = this.props;
        if (postId < POST_LIST.length - 1) {
            const post = POST_LIST.find(p => p.id === postId + 1);
            return `<a href="javascript:void(0)" 
                        data-post-id="${post.id}"
                        data-post-date="${post.date}"
                        data-post-mode="detail">next</a>`;
        } else {
            return `<span>next</span>`;
        }
    }
    get prev() {
        const { postId } = this.props;
        if (postId > 0) {
            const post = POST_LIST.find(p => p.id === postId - 1);
            return `<a href="javascript:void(0)" 
                        data-post-id="${post.id}"
                        data-post-date="${post.date}"
                        data-post-mode="detail">prev</a>`;
        } else {
            return `<span>prev</span>`;
        }
    }
    setEvent() {
        const { $el } = this;
        $el.addEventListener('load', ({ target }) => {
            console.log('postDetailTest', target);
        })
        $el.addEventListener('click', ({ target }) => {
            const { postId, postDate, postMode } = target.dataset;
            if (view === 'list') {
                postStore.setState({ postId: 0, postDate: '', postMode: 'list', content: null });
            } else {
                postStore.setState({ postId, postDate, postMode, content: null });
            }
        });
    }
    async getPost() {
        const { postDate, content } = this.props;
        if (!content) {
            const path = `../../../assets/posts/${postDate}/POST.js`;
            const impoted = await import(path);
            store.setState({ content: impoted.default });
        }
    }
}