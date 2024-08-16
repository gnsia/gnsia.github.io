import Component from "../../core/Component.js";

export default class PostDetail extends Component {
    template() {
        const post = this.getPost();
        return `
            <h3>PostDetail</h3>
            <h3>${post.default.date}</h3>
            <h3>${post.default.title}</h3>
            <h3>${post.default.img}</h3>
            <h3>${post.default.description}</h3>
        `;
    }
    async getPost() {
        const { date } = this.props;
        const path = `../../../assets/posts/${date}/POST.js`;
        return await import(path);
    }
}