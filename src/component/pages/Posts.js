import Component from "../../core/Component.js";

export default class Posts extends Component {
    template() {
        return `
            <h2>Posts</h2>
            <ol>
                <li><a href="javascript:void(0)">[20240816] 오늘의 일기~ 뻥입니다.</li>
            </ol>
        `;
    }
}