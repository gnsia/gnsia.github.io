import Component from "../../core/Component.js";

export default class Introduction extends Component {
    template() {
        return `
            <h3>Introduction</h3>
            <img src="./assets/img/logo/logo.png" alt="logo" width="300px"/>
            <h4>Hello! I'm Kidohu</h4>
        `;
    }
}