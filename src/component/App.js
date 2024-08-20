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
        <div id="loading">
          <h1>L</h1>
          <h1>O</h1>
          <h1>A</h1>
          <h1>D</h1>
          <h1>I</h1>
          <h1>N</h1>
          <h1>G</h1>
        </div>
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
      this.loading(1);
    }
  }
  loading(count) {
    const { isImported } = this.state;
    if(!isImported) {
      const { $target } = this;
      const $loading = $target.querySelector('#loading');
      const $h1Array = $loading.querySelectorAll('h1');
      $h1Array.forEach(h1 => {
        h1.innerHTML += h1.innerHTML.repeat(count);
      });
      setTimeout(() => {
        this.loading(++count);
      }, 100);
    }
  }
  changeViewHandler(view) {
    this.setState({ view });
  }
  changeChildrenHandler(children, isImported) {
    this.setState({ children, isImported });
  }
}