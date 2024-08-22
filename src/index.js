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
            <h1>L</h1>
            <h1>O</h1>
            <h1>A</h1>
            <h1>D</h1>
            <h1>I</h1>
            <h1>N</h1>
            <h1>G</h1>
        `;
    }
    async importApp() {
        const { $root } = this;
        const app = await import("./component/App.js");
        new app.default($root);
    }
}

new Index(document.querySelector('#root'));