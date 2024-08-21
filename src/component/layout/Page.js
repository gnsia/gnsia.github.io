import Component from "../../core/Component.js";


export default class Page extends Component {
    setup() {
        this.state = {
            isImported: false,
            Child: null,
        }
        this.importChild();
    }
    async importChild() {
        const { view } = this.props;
        const paths = {
            about: "../pages/About.js",
            home: "../pages/Home.js",
            playground: "../pages/Playground.js",
            posts: "../pages/Posts.js",
        }
        const child = await import(paths[view]);
        this.changeChildHandler(child.default, true);
    }
    changeChildHandler(Child, isImported) {
        this.setState({ Child, isImported });
    }
    mounted() {
        const { Child, isImported } = this.state;
        if(isImported) {
            const { view } = this.props;
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
        const { isImported } = this.state;
        if(isImported) {
            const { view } = this.props;
            return `
                <div data-component="${view}"></div>
            `;
        } else {
            return `
                <div id="loading"></div>
            `;
        }
    }
}