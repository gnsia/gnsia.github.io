import Component from "../../core/Component.js";
import Biography from "../abouts/Biography.js";
import Discography from "../abouts/Discography.js";
import Introduction from "../abouts/Introduction.js";

export default class About extends Component {
    setup() {
        this.state = {
            view: 'introduction', // 'biography, discography
        }
    }
    mounted() {
        const { $target } = this;
        const { view } = this.props;
        const $child = $target.querySelector(`[data-component="${view}"]`);
        switch(view) {
            case 'home':
                new Biography($child, {});
                break;
            case 'about':
                new Discography($child, {});
                break;
            case 'playground':
                new Introduction($child, {});
                break;
            default:
                alert(`${view} is not available keyword re-load please~!`);
                break;
        }
    }
    template() {
        const { view } = this.state;
        return `
            <h2>
                About
                <span>[</span>
                <a href="javascript:void(0)" data-view="introduction">Introduction</a>
                <span>/</span>
                <a href="javascript:void(0)" data-view="biography">Biography</a>
                <span>/</span>
                <a href="javascript:void(0)" data-view="discography">Discography</a>
                <span>]</span>
            </h2>
            <div data-component="${view}"></div>
        `;
    }
    setEvent() {
        const { $target, changeViewHandler } = this;
        $target.addEventListener('click', ({ target }) => {
            if(target.tagName === 'A') {
                const { view } = target.dataset;
                changeViewHandler(view);               
            }
        });
    }
    changeViewHandler(view) {
        this.setState({ view });
    }
}