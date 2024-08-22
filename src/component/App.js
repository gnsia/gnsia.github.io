import Component from "../core/Component.js"

export default class App extends Component{
  setup() {
    this.state = {
      view: 'home', // posts, playground, about
      isImported: false,
      children: {
        Header: null,
        Page: null,
        Footer: null,
      },
    }
    this.importChildren();
  }
  async importChildren() {
    const header = await import("./layout/Header.js");
    const page = await import("./layout/Page.js");
    const footer = await import("./layout/Footer.js");
    const children = {
      Header: header.default,
      Page: page.default,
      Footer: footer.default,
    }
    this.changeChildrenHandler(children, true);
  }
  changeChildrenHandler(children, isImported) {
    this.setState({ children, isImported });
  }  
  template() {
    const { isImported } = this.state;
    
    if(isImported) {
      return `
        <header data-component="header"></header>
        <hr/>
        <main data-component="page"></main>
        <hr/>
        <footer data-component="footer"></footer>
      `;
    } else {
      return `
        <div id="loading"></div>
      `
    }
  }
  mounted() {
    const { view, isImported, children } = this.state;
    const { $target, changeViewHandler } = this;
    const { Header, Page, Footer } = children;
    
    if(isImported) {
      const $header = $target.querySelector(`[data-component="header"]`);
      new Header($header, { 
        view, 
        changeViewHandler: changeViewHandler.bind(this),
      });

      const $page = $target.querySelector(`[data-component="page"]`);
      new Page($page, { view });
  
      const $footer = $target.querySelector(`[data-component="footer"]`);
      new Footer($footer, {});
    } else {
      this.loading(0);
    }
  }
  loading(count) {
    const { isImported } = this.state;
    if(!isImported) {
      const { $target } = this;
      const $loading = $target.querySelector('#loading');
      let message = [...'HAND-STENCIL'];
      const idx = count % message.length;
      message[idx] = message[idx].toUpperCase();
      $loading.innerHTML = `<h1>${message.join('')}</h1>`;
      setTimeout(() => {
        this.loading(++count);
      }, 100);
    }
  }
  changeViewHandler(view) {
    this.setState({ view });
  }
}