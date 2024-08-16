import Component from "../../core/Component.js";
import POST_LIST from "../../../assets/posts/POST_LIST.js";

export default class PostList extends Component {
    template() {
        return `
            <h3>PostList</h3>
            <ol>
            ${POST_LIST.map(post => `
                <li>
                    <a href="javascript:void(0)" data-date="${post.date}">
                        [${post.date}]-${post.title}
                    </a>
                </li>
            `)}
            </ol>
        `;
    }
    setEvent() {
        const { $target } = this;
        const { changeModeHandler, changeDateHandler } = this.props;
        $target.addEventListener('click', ({ target }) => {
            if(target.tagName === 'A') {
                const { date } = target.dataset;
                changeDateHandler(date);
                changeModeHandler('detail');
            }
        });
    }
}