import Component from "../../core/Component.js";
import POST_LIST from "../../../assets/posts/POST_LIST.js";

export default class PostDetail extends Component {
    setup() {
        this.state = { 
            post: null,
            isImported: false,
        };
    }
    template() {
        const { post } = this.state;
        const { prev, next } = this;
        if(post) {
            return `
            ${post}
            <span>
                [
                ${prev} /
                <a href="javascript:void(0)" data-view="list">list</a> /
                ${next}
                ]
            </span>           
        `;
        } else {
            return `<h3>post is coming...</h3>`
        }
    }
    get next() {
        const { id } = this.props;
        if(id < POST_LIST.length - 1) {
            const post = POST_LIST.find(p => p.id === id+1);
            return `<a href="javascript:void(0)" 
                        data-id="${post.id}"
                        data-date="${post.date}"
                        data-view="detail">next</a>`;
        } else {
            return `<span>next</span>`;
        }
    }
    get prev() {
        const { id } = this.props;
        if(id > 0) {
            const post = POST_LIST.find(p => p.id === id-1);
            return `<a href="javascript:void(0)" 
                        data-id="${post.id}"
                        data-date="${post.date}"
                        data-view="detail">prev</a>`;
        } else {
            return `<span>prev</span>`;
        }
    }
    setEvent() {
        const { $target } = this;
        const { changePostInfoHandler } = this.props;
        $target.addEventListener('click', ({ target }) => {
            const { id, date, view } = target.dataset;
            if(view === 'list') {
                changePostInfoHandler(0, '', view);
            } else {
                changePostInfoHandler(id, date, view);
            }
        });
        this.getPost();
    }
    async getPost() {
        const { date } = this.props;
        const path = `../../../assets/posts/${date}/POST.js`;
        const post = await import(path);
        this.changePostHandler(post.default);
    }
    changePostHandler(post) {
        this.setState({ post })
    }
}