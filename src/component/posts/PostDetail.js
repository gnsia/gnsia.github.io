import Component from "../../core/Component.js";

export default class PostDetail extends Component {
    setup() {
        const post = this.getPost();
        this.state = { post };
    }
    mounted() {
        const { $target } = this;
        const { date, title, img, description } = this.state.post;

        const $date = $target.querySelector('[data-post="date"]');
        const $title = $target.querySelector('[data-post="title"]');
        const $img = $target.querySelector('[data-post="img"]');
        const $description = $target.querySelector('[data-post="description"]');

        $date.innerHTML = date
        $title.innerHTML = title;
        $img.innerHTML = img;
        $description.innerHTML = description;
    }
    template() {
        return `
            <h3>PostDetail</h3>
            <h3 data-post="date"></h3>
            <h3 data-post="title"></h3>
            <h3 data-post="img"></h3>
            <h3 data-post="description"></h3>
        `;
    }
    async getPost() {
        const { date } = this.props;
        const path = `../../../assets/posts/${date}/POST.js`;
        const post = await import(path);
        return post.default;
    }
}