import Component from "../core/Component.js";

export default class Header extends Component {
    template() {
        return `
            <h1> 
                Hand-Stencil Playground
            </h1>
            <nav data-component="nav">
                <a>About</a>
            </nav>
            
        `;
    }
    mounted() {

    }
}