import Component from "../../core/Component.js";

export default class Introduction extends Component {
    template() {
        return `
            <h3 class="loading">Introduction</h3>
            <img src="./assets/img/logo/logo.png" alt="logo" width="300px"/>
            <h4 class="hide">Hello! I'm Kidohu</h4>
        `;
    }
    setEvent() {
        const { $el } = this;
        const img = $el.querySelector('img');
        img.addEventListener('load', ({ target }) => {
            img.previousElementSibling.classList.toggle('loading');
            img.nextElementSibling.classList.toggle('hide');
        })
    }
}