import Component from "../../core/Component.js";
import { aboutStore } from "../../core/store.js";

export default class About extends Component {
    dynamicImport() {
        const { view } = aboutStore.state;
        if (view) { this.getContent(view) }
    }
    async getContent(view) {
        const path = `../../../assets/about/${view}.js`;
        const impoted = await import(path);
        aboutStore.setState({ content: impoted.default });
    }
    template() {
        const aboutList = ['Introduction', 'Portpolio', 'Discography'];
        const { content, view } = aboutStore.state;
        if (content) {
            return `
            <div class="fit-parent">
                <span>[</span>
                ${aboutList.map(v => `
                <a href="javascript:void(0)" 
                    data-view="${v}"
                    ${view === v ? 'class="current-view"' : ''}
                    >${v}</a>
                `).join(`<span>/</span>`)}
                <span>]</span>
            </div>
            <div class="fit-parent">
                ${content}
            </div>           
        `;
        } else {
            return `<h3 class="loading">It's coming...</h3>`
        }
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