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
        const { $target, changeModeHandler, changeDateHandler } = this;
        const { mode, date } = this.state;
        const $child = $target.querySelector(`[data-component="${mode}"]`);

        switch(mode) {
            case 'list':
                new PostList($child, { 
                    changeModeHandler: changeModeHandler.bind(this),
                    changeDateHandler: changeDateHandler.bind(this)
                });
                break;
            case 'detail':
                new PostDetail($child, {
                    date,
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