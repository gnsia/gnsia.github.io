import Component from "../../core/Component.js";
import POST_LIST from "../../../assets/posts/POST_LIST.js";

export default class PostList extends Component {
    template() {
        return `
            <h3>PostList</h3>
            <ol>
            ${POST_LIST.map(post => `
                <li>
                    <a href="javascript:void(0)">
                        [${post.date}]-${post.title}
                    </a>
                </li>
            `)}
            </ol>
        `;
    }
}