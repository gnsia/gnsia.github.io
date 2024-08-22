export default class Title {
    template() {
        const { importing } = this.props;
        if(importing) {
            return `<h1 id="importing">Loading...</h1>`;
        } else {
            return `<h1>Hand-Stencil</h1>`
        }
    }
}