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
        const { view } = this.state;
        const $child = $target.querySelector(`[data-component="${view}"]`);
        switch(view) {
            case 'biography':
                new Biography($child, {});
                break;
            case 'discography':
                new Discography($child, {});
                break;
            case 'introduction':
                new Introduction($child, {});
                break;
            default:
                alert(`${view} is not available keyword re-load please~!`);
                break;
        }
    }
    template() {
        const { view } = this.state;
        const abouts = ['introduction', 'biography', 'discography'];
        return `
            <h2>About</h2>
            <span>[</span>
            ${abouts.map(about => `
                <a href="javascript:void(0)" data-view="${about}">${about}</a>
            `).join(`<span>/</span>`)}
            <span>]</span>
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