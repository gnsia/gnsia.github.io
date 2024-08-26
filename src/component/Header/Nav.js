import Component from "../../core/Component.js";
import { store } from "../../core/store.js";

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
        const { $target } = this;
        $target.addEventListener('click', ({ target }) => {
            if (target.tagName === 'A') {
                const { view } = target.dataset;
                store.setState({ view });
            }
        })
    }
}