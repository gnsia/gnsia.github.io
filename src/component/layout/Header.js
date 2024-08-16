import Component from "../../core/Component.js";

export default class Header extends Component {
    template() {
        return `
            <h1> 
                Hand-Stencil
                <span>[</span>
                <a href="#" data-view="about">About</a>
                <span>/</span>
                <a href="#" data-view="playground">Playground</a>
                <span>]</span>  
            </h1>
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