import Component from "../core/Component.js"

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
    const { view, isImported, children } = this.state;
    const { $target, changeViewHandler } = this;

    if(isImported) {
      const header = children.find(c => c.view === 'header');
      const $header = $target.querySelector(`[data-component="${header.view}"]`);
      new header.component($header, { 
        view, 
        changeViewHandler: changeViewHandler.bind(this),
      });

      const page = children.find(v => v.view === 'page');
      const $page = $target.querySelector(`[data-component="${page.view}"]`);
      new page.component($page, { view });
  
      const footer = children.find(v => v.view === 'footer');
      const $footer = $target.querySelector(`[data-component="${footer.view}"]`);
      new footer.component($footer, {});
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
    this.changeChildrenHandler(children, true);
  }
  changeChildrenHandler(children, isImported) {
    this.setState({ children, isImported });
  }
}