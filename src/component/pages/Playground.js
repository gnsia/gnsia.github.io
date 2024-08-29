import Component from "../../core/Component.js";
import CanvasTutorial from "../playground/CanvasTutorial.js";


export default class Playground extends Component {
    template() {
        const children = [
            {
                view: 'canvas-tutorial',
                title: 'HTML Canvas를 활용하여 인터랙티브 콘텐츠 만들기',
                author: 'Yechanny',
                source: 'https://medium.com/uniquegood/html-canvas%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9D%B8%ED%84%B0%EB%9E%99%ED%8B%B0%EB%B8%8C-%EC%BD%98%ED%85%90%EC%B8%A0-%EB%A7%8C%EB%93%A4%EA%B8%B0-3ef51c33323e',
                component: CanvasTutorial
            }
        ]
        return `
            <ol>
            ${children.map(c => `
                <li>
                    <a href="javascript:void(0)" data-view="${c.view}">${c.title}</a>
                    <span> by ${c.author}</span> <br/>
                    <span>[<a href="${c.source}" target="_blank">출처</a>]</span>
                </li>
            `).join('')}
            </ol>
        `;
    }
}