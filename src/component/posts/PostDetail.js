import Component from "../../core/Component.js";

export default class PostDetail extends Component {
    setup() {
        this.state = { 
            post: null,
        };
        this.getPost();
    }
    template() {
        const { post } = this.state;
        if(post) {
            const { date, title, img, description } = post;
            return `
            <h3>
                <a href="javascript:void(0)">[${date}] ${title}</a>
            </h3>
            <img src="${img}" alt="${title}" width="300px"/>
            <p>${description}</p>
            <a href="javascript:void(0)">back to list</a>
        `;
        } else {
            return `<h3>post is coming...</h3>`
        }
    }
    setEvent() {
        const { $target } = this;
        const { changeModeHandler } = this.props;
        $target.addEventListner('click', ({ target }) => {
            if(target.tagName === 'A') {
                changeModeHandler('list');
            }
        });
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