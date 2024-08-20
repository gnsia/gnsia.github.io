import Component from "../core/Component.js"
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import Page from "./layout/Page.js";

export default class App extends Component{
  setup() {
    this.state = {
      view: 'home', // posts, playground, about
      isImported: false,
      children: [
        {
          view: 'header',
          path: "./layout/Header.js",
          component: null
        },
        {
          view: 'page',
          path: "./layout/Page.js",
          component: null
        },
        {
          view: 'footer',
          path: "./layout/Footer.js",
          component: null
        },
      ]
    }
    this.importChildren();
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
        <h1>Loading...</h1>
      `
    }
  }
  mounted() {
    const { view, isImported } = this.state;
    const { $target, changeViewHandler } = this;

    if(isImported) {
      const $header = $target.querySelector('[data-component="header"]');
      new Header($header, { 
        view, 
        changeViewHandler: changeViewHandler.bind(this),
      });
  
      const $page = $target.querySelector('[data-component="page"');
      new Page($page, { view });
  
      const $footer = $target.querySelector('[data-component="footer"]');
      new Footer($footer, {});
    }
  }
  changeViewHandler(view) {
    this.setState({ view });
  }
  async importChildren() {
    const { children } = this.state;
    children.map( async c => {
      const component = await import(c.path);
      return { ...c, component };
    });
    this.changeChildrenHandler(children, isImported);
  }
  changeChildrenHandler(children, isImported) {
    this.setState({ children, isImported });
  }
}