import Component from "../../core/Component.js";

export default class Header extends Component {
    template() {
        const pages = ['home', 'posts', 'playground', 'about'];
        return `
            <h1>Hand-Stencil</h1>
            <span>[</span>
            ${pages.map(page => `
                <a href="javascript:void(0)" data-view="${page}">${page}</a>
            `).join(`<span>/</span>`)}
            <span>]</span>
        `;
    }
    setEvent() {
        const { $target } = this;
        const { changeViewHandler } = this.props;
        $target.addEventListener('click', ({ target }) => {
            if(target.tagName === 'A') {
                const { view } = target.dataset;
                changeViewHandler(view);
            }
        })
    }
}