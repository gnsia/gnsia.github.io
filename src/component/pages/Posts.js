import Component from "../../core/Component.js";
import PostDetail from "../posts/PostDetail.js";
import PostList from "../posts/PostList.js";

export default class Posts extends Component {
    setup() {
        this.state = {
            id: 0,
            date: '',
            view: 'list', // list, detail
        }

    }
    mounted() {
        const { $target, changePostInfoHandler } = this;
        const { id, date, view } = this.state;
        const $child = $target.querySelector(`[data-component="${view}"]`);

        switch (view) {
            case 'list':
                new PostList($child, {
                    changePostInfoHandler: changePostInfoHandler.bind(this),
                });
                break;
            case 'detail':
                new PostDetail($child, {
                    id, date, view,
                    changePostInfoHandler: changePostInfoHandler.bind(this),
                });
                break;
            default:
                alert(`${view} is not available keyword reload please!`);
                break;
        }
    }
    template() {
        const { view } = this.state;
        return `
            <h2>Posts</h2>
            <div data-component="${view}"></div>
        `;
    }
    changePostInfoHandler(stringId, date, view) {
        const id = parseInt(stringId);
        this.setState({ id, date, view });
    }
}