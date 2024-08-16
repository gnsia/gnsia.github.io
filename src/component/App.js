import Component from "../core/Component.js"
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import Page from "./layout/Page.js";

export default class App extends Component{
  setup() {
    this.state = {
      view: 'home', // posts, playground, about
    }
  }
  
  template() {
    const { view } = this.state;

    return `
      <header data-component="header"></header>
      <hr/>
      <main data-component="page"></main>
      <hr/>
      <footer data-component="footer"></footer>
    `;
  }

  mounted() {
    const { view } = this.state;
    const { $target, changeViewHandler } = this;

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
  changeViewHandler(view) {
    this.setState({ view });
  }
}