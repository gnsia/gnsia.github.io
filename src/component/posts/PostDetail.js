import Component from "../../core/Component.js";

export default class PostDetail extends Component {
    template() {
        const post = this.getPost();
        return `
            <h3>PostDetail</h3>
            <h3>${post.date}</h3>
            <h3>${post.title}</h3>
            <h3>${post.img}</h3>
            <h3>${post.description}</h3>
        `;
    }
    async getPost() {
        const { date } = this.props;
        const path = `../../../assets/posts/${date}/POST.js`;
        const post = await import(path);
        return post.default;
    }
}