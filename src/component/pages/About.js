import Component from "../../core/Component.js";
import Biography from "../abouts/Biography.js";
import Discography from "../abouts/Discography.js";
import Introduction from "../abouts/Introduction.js";
import { aboutStore } from "../../core/store.js";

export default class About extends Component {
    mounted() {
        const children = {
            biography: Biography,
            discography: Discography,
            introduction: Introduction,
        }
        const { view } = aboutStore.state;
        const { $el } = this;
        const $child = $el.querySelector(`[data-component="${view}"]`);
        new children[view]($child);
    }
    template() {
        const { view } = aboutStore.state;
        const children = ['introduction', 'biography', 'discography'];
        return `
            <div class="fit-parent">
                <span>[</span>
                ${children.map(child => `
                <a href="javascript:void(0)" data-view="${child}">${child}</a>
                `).join(`<span>/</span>`)}
                <span>]</span>
            </div>
            <div data-component="${view}" class="fit-parent"></div>
        `;
    }
    setEvent() {
        const { $el } = this;
        $el.addEventListener('click', ({ target }) => {
            if (target.tagName === 'A') {
                const { view } = target.dataset;
                aboutStore.setState({ view });
            }
        });
    }
}