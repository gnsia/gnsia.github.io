import Component from "../../core/Component.js";
import PostDetail from "../posts/PostDetail.js";
import PostList from "../posts/PostList.js";

export default class Posts extends Component {
    setup() {
        this.state = {
            mode: 'list', // list, detail
            date: '',
        }
    }
    mounted() {
        const { $target, changeDateAndModeHandler } = this;
        const { mode, date } = this.state;
        const $child = $target.querySelector(`[data-component="${mode}"]`);

        switch(mode) {
            case 'list':
                new PostList($child, { 
                    changeDateAndModeHandler: changeDateAndModeHandler.bind(this),
                });
                break;
            case 'detail':
                new PostDetail($child, {
                    date,
                    changeDateAndModeHandler: changeDateAndModeHandler.bind(this),
                });
                break;
            default:
                alert(`${mode} is not available keyword reload please!`);
                break;
        }
    }
    template() {
        const { mode } = this.state;
        return `
            <h2>Posts</h2>
            <div data-component="${mode}"></div>
        `;
    }
    changeDateAndModeHandler(date, mode) {
        this.setState({ date, mode });
    }
}