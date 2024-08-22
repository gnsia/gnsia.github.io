import Component from "../../core/Component.js";
import Biography from "../abouts/Biography.js";
import Discography from "../abouts/Discography.js";
import Introduction from "../abouts/Introduction.js";

export default class About extends Component {
    setup() {
        this.state = {
            view: 'introduction',
        }
        this.children = {
            biography: Biography,
            discography: Discography,
            introduction: Introduction,
        }
    }
    mounted() {
        const { view } = this.state;
        const { $target, children } = this;
        const $child = $target.querySelector(`[data-component="${view}"]`);
        new children[view]($child, {});
    }
    template() {
        const { view } = this.state;
        const children = ['introduction', 'biography', 'discography'];
        return `
            <h2>About</h2>
            <span>[</span>
            ${children.map(c => `
                <a href="javascript:void(0)" data-view="${c}">${c}</a>
            `).join(`<span>/</span>`)}
            <span>]</span>
            <div data-component="${view}"></div>
        `;
    }
    setEvent() {
        const { $target } = this;
        const changeViewHandler = this.changeViewHandler.bind(this);
        $target.addEventListener('click', ({ target }) => {
            if (target.tagName === 'A') {
                const { view } = target.dataset;
                changeViewHandler(view);
            }
        });
    }
    changeViewHandler(view) {
        this.setState({ view });
    }
}