import Component from "../../core/Component.js";

export default class Home extends Component {
    template() {
        return `
            <div id="welcome"></div>
        `;
    }
    mounted() {
        this.welcome(6);
    }
    welcome(num) {
        const { $target } = this;
        const $welcome = $target.querySelector('#welcome');
        $welcome.innerHTML = `<h${num}>Welcome To My Homepage!</h${num}>`
        if(num > 1) {
            setTimeout(() => {
                this.welcome(--num);
            }, 500)
        }
    }
}