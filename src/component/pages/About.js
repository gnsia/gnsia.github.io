import Component from "../../core/Component.js";
import { aboutStore } from "../../core/store.js";
import INTRODUCTION from "../../../assets/about/INTRODUCTION.js"
import PORTPOLIO from "../../../assets/about/PORTPOLIO.js";
import DISCOGRAPHY from "../../../assets/about/DISCOGRAPHY.js";

export default class About extends Component {
    setup() {
        this.content = {
            portpolio: PORTPOLIO.default,
            discography: DISCOGRAPHY.default,
            introduction: INTRODUCTION.default,
        }
        alert(INTRODUCTION);
    }
    template() {
        const { content } = this;
        const { view } = aboutStore.state;
        return `
            <div class="fit-parent">
                <span>[</span>
                ${Object.keys(content).map(child => `
                <a href="javascript:void(0)" data-view="${child}">${child}</a>
                `).join(`<span>/</span>`)}
                <span>]</span>
            </div>
            <div class="fit-parent">
                ${content[view]}
            </div>
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