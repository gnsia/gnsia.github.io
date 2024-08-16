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
        const { $target, changeModeHandler } = this;
        const { mode } = this.state;
        const $child = $target.querySelector(`[data-component="${mode}"]`);

        switch(mode) {
            case 'list':
                new PostList($child, { 
                    changeModeHandler: changeModeHandler.bind(this),
                });
                break;
            case 'detail':
                new PostDetail($child, {
                    changeModeHandler: changeModeHandler.bind(this),
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
    changeModeHandler(mode) {
        this.setState({ mode });
    }
    changeDateHandler(date) {
        this.setState({ date });
    }
}