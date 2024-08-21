import Component from "../../core/Component.js";

export default class About extends Component {
    setup() {
        this.state = {
            view: 'introduction',
            Child: null,
            isImported: false,
        }
        this.importChild();
    }
    async importChild() {
        const { view } = this.state;
        const paths = {
            biography: "../abouts/Biography.js",
            discography: "../abouts/Discography.js",
            introduction: "../abouts/Introduction.js",
        }
        const child = await import(paths[view]);
        this.changeChildHandler(child.default, true);
    }
    changeChildHandler(Child, isImported) {
        this.setState({ Child, isImported });
    }
    mounted() {
        const { view, Child, isImported } = this.state;
        if(isImported) {
            const { $target } = this;
            const $child = $target.querySelector(`[data-component="${view}"]`);
            new Child($child, {});
        } else {
            this.loading(0);
        }
    }
    loading(count) {
        const { isImported } = this.state;
        if(!isImported) {
          const { $target } = this;
          const $loading = $target.querySelector('#loading');
          const idx = count % 7;
          let message = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];
          message[idx] = message[idx].toLocaleLowerCase();
          $loading.innerHTML = message.map(v => `<h3>${v}</h3>`).join('');
          setTimeout(() => {
            this.loading(++count);
          }, 100);
        }
    }
    template() {
        const { view, isImported } = this.state;
        const children = ['introduction', 'biography', 'discography'];
        return `
            <h2>About</h2>
            <span>[</span>
            ${children.map(c => `
                <a href="javascript:void(0)" data-view="${c}">${c}</a>
            `).join(`<span>/</span>`)}
            <span>]</span>
            ${isImported ? `
                <div data-component="${view}"></div>    
            ` : `
                <div id="loading"></div>    
            `}
        `;
    }
    setEvent() {
        const { $target } = this;
        const changeViewHandler = this.changeViewHandler.bind(this);
        $target.addEventListener('click', ({ target }) => {
            if(target.tagName === 'A') {
                const { view } = target.dataset;
                changeViewHandler(view);               
            }
        });
    }
    changeViewHandler(view) {
        this.setState({ view });
    }
}