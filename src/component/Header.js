import Component from "../core/Component.js";

export default class Header extends Component {
    template() {
        return `
            <h1> 
                Hand-Stencil
            </h1>
            <nav data-component="nav">
                <a href="#" data-view="playground">Playground</a>
                <a href="#" data-view="about">About</a>
            </nav>  
        `;
    }
    setEvent() {
        const { changeViewHandler } = this.props;
        this.$target.addEventListener('click', e => {
            e.preventDefault();
            if(e.target.tagName === 'A') {
                const { view } = e.target.dataset;
                changeViewHandler(view);
            }
        })
    }
}