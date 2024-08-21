import Component from "../../core/Component.js";
import POST_LIST from "../../../assets/posts/POST_LIST.js";

export default class PostList extends Component {
    template() {
        return `
            <ol>
            ${POST_LIST.map(post => `
                <li>
                    <a href="javascript:void(0)" 
                        data-id="${post.id}"
                        data-date="${post.date}"
                        data-view="detail"
                    >
                        ${post.title}
                    </a>
                    .......<i>${post.date}</i>
                </li>
            `).join('')}
            </ol>
        `;
    }
    setEvent() {
        const { $target } = this;
        const { changePostInfoHandler } = this.props;
        $target.addEventListener('click', ({ target }) => {
            const { id, date, view } = target.dataset;
            if(view === 'detail') {
                changePostInfoHandler(id, date, view);
            }
        });
    }
}