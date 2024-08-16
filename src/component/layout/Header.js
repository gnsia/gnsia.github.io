import Component from "../../core/Component.js";

export default class Header extends Component {
    template() {
        return `
            <span><h1>Hand-Stencil</h1></span>
            <span>[</span>
            <a href="javascript:void(0)" data-view="home">Home</a>
            <span>/</span>
            <a href="javascript:void(0)" data-view="posts">Posts</a>
            <span>/</span>
            <a href="javascript:void(0)" data-view="playground">Playground</a>
            <span>/</span>
            <a href="javascript:void(0)" data-view="about">About</a>
            <span>]</span>
        `;
    }
    setEvent() {
        const { $target } = this;
        const { changeViewHandler } = this.props;
        $target.addEventListener('click', ({ target }) => {
            if(target.tagName === 'A') {
                const { view } = target.dataset;
                changeViewHandler(view);
            }
        })
    }
}