import Component from "../core/Component.js"
import About from "./About.js";
import Playground from "./Playground.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

export default class App extends Component{
  setup() {
    this.state = {
      view: 'about', // about, Playground
    }
  }
  
  template() {
    const { view } = this.state;

    return `
      <header data-component="header"></header>       
      <main data-component="${view}"></main>
      <footer data-component="footer"></footer>
    `
  }

  mounted() {
    const { view } = this.state;
    const { changeViewHandler } = this;

    const $header = this.$target.querySelector('[data-component="header"]');
    new Header($header, { 
      view, 
      changeViewHandler: changeViewHandler.bind(this),
    });

    const $footer = this.$target.querySelector('[data-component="footer"]');
    new Footer($footer, {});
    switch(view) {
      case 'about':
        const $about = this.$target.querySelector(`[data-component="${view}"]`);
        new About($about, {});
        break;
      case 'playground':
        const $Playground = this.$target.querySelector(`[data-component="${view}"]`);
        new Playground($Playground, {});
        break;
      default:
        break;
    }
  }
  changeViewHandler(view) {
    this.setState({ view });
  }
}