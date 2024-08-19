import Component from "../../core/Component.js";

export default class Home extends Component {
    template() {
        const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        const messages = [
            'Welcome To My Homepage!', 
            'Thanks For Visiting~!'
        ];
        const randomInt = Math.floor(Math.random() * messages.length);
        const message = messages[randomInt];
        return `
            ${tags.map(tag => `<${tag}>${message}</${tag}>`).join('')}
        `;
    }
}