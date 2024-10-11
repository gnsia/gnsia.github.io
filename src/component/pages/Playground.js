import Component from "../../core/Component.js";
import Canvas from "../playground/Canvas.js";


export default class Playground extends Component {
  template() {
    return `
            <canvas id="myCanvas"></canvas>
        `;
  }
  setEvent() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
    });
  }
  mounted() {
    this.resizeCanvas();
  }
  resizeCanvas() {
    const canvas = document.getElementById('myCanvas');
    const parent = document.querySelector('main');

    canvas.width = parent.clientWidth > 720 ? 720 : parent.clientWidth;
    canvas.height = parent.clientHeight;
    this.draw();
  }
  draw() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    for (var i = 0; i < 255; i++) {
      for (var j = 0; j < 255; j++) {
        ctx.fillStyle =
          "rgb(" +
          Math.floor(255 - 1 * i) +
          ", " +
          Math.floor(255 - 1 * j) +
          ", 0)";
        ctx.fillRect(j * 1, i * 1, 100, 25);
      }
    }
  }
}