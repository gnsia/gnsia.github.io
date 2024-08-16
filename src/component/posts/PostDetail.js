import Component from "../../core/Component.js";

export default class PostDetail extends Component {
    setup() {
        this.state = { 
            post: null,
            loadingInterval: null,
        };
        this.getPost();
    }
    template() {
        const { post } = this.state;
        if(post) {
            const { date, title, img, description } = post;
            return `
            <h3 data-post="date">${date}</h3>
            <h3 data-post="title">${title}</h3>
            <h3 data-post="img">${img}</h3>
            <h3 data-post="description">${description}</h3>
        `;
        } else {
            return `<h3>${this.showLoading()}</h3>`
        }
    }
    showLoading(idx) {
        this.state.loadingInterval = setInterval(() => {
            const text = 'please wait!';
            const random = this.getRandom(0, 10);
            const char = text[random];
            text.replace(char, char.toLocaleUpperCase());
            return text;
        }, 100);
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async getPost() {
        const { date } = this.props;
        const path = `../../../assets/posts/${date}/POST.js`;
        const post = await import(path);
        clearInterval(this.state.loadingInterval);
        this.changePostHandler(post.default);
    }
    changePostHandler(post) {
        this.setState({ post })
    }
}