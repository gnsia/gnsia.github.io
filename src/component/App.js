import Component from "../core/Component.js"
import Wrapper from "./Wrapper.js";
import Outer from "./Outer.js";

export default class App extends Component {
  template() {
      return `
        <div data-component="outer" class="outer"></div>
        <div data-component="wrapper" class="wrapper"></div>
      `;
  }
  mounted() {
    const { $target } = this;
    new Outer($target.querySelector('[data-component="outer"]'), { });
    new Wrapper($target.querySelector('[data-component="wrapper"]'), { });
  }
}