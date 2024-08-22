const $root = document.querySelector('#root');

const importApp = async () => {
    const app = await import("./component/App.js");
    new app.default($root);
}

$root.innerHTML = `
    <h3>L</h3>
    <h3>O</h3>
    <h3>A</h3>
    <h3>D</h3>
    <h3>I</h3>
    <h3>N</h3>
    <h3>G</h3>
`;

importApp();