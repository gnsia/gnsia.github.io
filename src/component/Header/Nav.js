import Component from "../../core/Component.js";
import { pageStore, postStore } from "../../core/store.js";

export default class Nav extends Component {
    template() {
        const { view } = pageStore.state;
        const pages = ['posts', 'playground', 'about'];
        return `
            <span>[</span>
            ${pages.map(page => `
                <a 
                    href="javascript:void(0)" 
                    data-view="${page}"
                    ${view === page ? 'class="current-view"' : ''}
                >
                ${page}
                </a>
            `).join(`<span>/</span>`)}
            <span>]</span>
        `;
    }
    setEvent() {
        const { $el } = this;
        $el.addEventListener('click', ({ target }) => {
            if (target.tagName === 'A') {
                const { view } = target.dataset;
                pageStore.setState({ view });
                postStore.setState({ postId: 0, postDate: '', postMode: 'list', content: null });
            }
        })
    }
}