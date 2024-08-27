import Component from "../../core/Component.js";
import { pageStore } from "../../core/store.js";

export default class Nav extends Component {
    template() {
        const pages = ['posts', 'playground', 'about'];
        return `
            <span>[</span>
            ${pages.map(page => `
                <a href="javascript:void(0)" data-view="${page}">${page}</a>
            `).join(`<span>/</span>`)}
            <span>]</span>
            <hr/>
        `;
    }
    setEvent() {
        const { $el } = this;
        $el.addEventListener('click', ({ target }) => {
            if (target.tagName === 'A') {
                const { view } = target.dataset;
                pageStore.setState({ view });
            }
        })
    }
}