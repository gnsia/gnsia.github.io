import Component from "../../core/Component.js";

export default class About extends Component {
    setup() {
        this.state = {
            view: 'introduction', // 'biography, discography
        }
    }
    template() {
        const { view } = this.state;
        return `
            <h2>
                About
                <span>[</span>
                <a href="javasciprt:void(0)" data-view="introduction">Introduction</a>
                <span>/</span>
                <a href="javasciprt:void(0)" data-view="biography">Biography</a>
                <span>/</span>
                <a href="javasciprt:void(0)" data-view="discography">Discography</a>
                <span>]</span>
            </h2>
            <div data-component="${view}"></div>
        `;
    }
}