import Component from "../../core/Component.js";

export default class Header extends Component {
    template() {
        return `
            <h1> 
                Hand-Stencil
                <span>[</span>
                <a href="javasciprt:void(0)" data-view="about">About</a>
                <span>/</span>
                <a href="javascript:void(0)" data-view="posts">Posts</a>
                <span>/</span>
                <a href="javascript:void(0)" data-view="playground">Playground</a>
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