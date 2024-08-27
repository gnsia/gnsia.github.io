import Component from "../../core/Component.js";
import Biography from "../abouts/Biography.js";
import Discography from "../abouts/Discography.js";
import Introduction from "../abouts/Introduction.js";
import { store } from "../../core/store.js";
import { observe } from "../../core/observer.js";

export default class About extends Component {
    setup() {
        this.children = {
            biography: Biography,
            discography: Discography,
            introduction: Introduction,
        }
        observe(() => {
            this.render();
            this.setEvent();
        })
    }
    mounted() {
        const { about } = store.state;
        const { $target, children } = this;
        const $child = $target.querySelector(`[data-component="${about}"]`);
        new children[about]($child, {});
    }
    template() {
        const { about } = store.state;
        const children = ['introduction', 'biography', 'discography'];
        return `
            <h2>About</h2>
            <span>[</span>
            ${children.map(child => `
                <a href="javascript:void(0)" data-about-view="${child}">${child}</a>
            `).join(`<span>/</span>`)}
            <span>]</span>
            <div data-component="${about}"></div>
        `;
    }
    setEvent() {
        const { $target } = this;
        $target.addEventListener('click', ({ target }) => {
            if (target.tagName === 'A') {
                console.log(target.dataset);
                const { aboutView } = target.dataset;
                store.setState({ aboutView });
            }
        });
    }
}