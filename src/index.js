class Index {
    $root;
    constructor($root) {
        this.$root = $root;
        this.render();
        this.importApp();
    }
    render() {
        const { $root } = this;
        $root.innerHTML = `
            <h1>Hand-Stencil</h1>
        `;
    }
    async importApp() {
        const { $root } = this;
        const app = await import("./component/App.js");
        new app.default($root);
    }
}

new Index(document.querySelector('#root'));