const $root = document.querySelector('#root');

const importApp = async () => {
    const app = await import("./component/App.js");
    new app.default($root);
}

$root.innerHTML = `
    <h1>HAND-STENCIL</h1>
`;

importApp();