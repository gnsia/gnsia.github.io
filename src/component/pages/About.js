import Component from "../../core/Component.js";
import Biography from "../abouts/Biography.js";
import Discography from "../abouts/Discography.js";
import Introduction from "../abouts/Introduction.js";
import { store } from "../../core/store.js";
import { observe } from "../../core/observer.js";

export default class About extends Component {
    mounted() {
        const children = {
            biography: Biography,
            discography: Discography,
            introduction: Introduction,
        }
        const { aboutView } = store.state;
        const { $el } = this;
        const $child = $el.querySelector(`[data-component="${aboutView}"]`);
        new children[aboutView]($child, {});
    }
    template() {
        const { aboutView } = store.state;
        const children = ['introduction', 'biography', 'discography'];
        return `
            <h2>About</h2>
            <span>[</span>
            ${children.map(child => `
                <a href="javascript:void(0)" data-about-view="${child}">${child}</a>
            `).join(`<span>/</span>`)}
            <span>]</span>
            <div data-component="${aboutView}"></div>
        `;
    }
    setEvent() {
        const { $el } = this;
        $el.addEventListener('click', ({ target }) => {
            if (target.tagName === 'A') {
                console.log(target.dataset);
                const { aboutView } = target.dataset;
                store.setState({ aboutView });
            }
        });
    }
}