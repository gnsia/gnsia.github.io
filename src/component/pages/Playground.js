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
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x coordinate
        var y = 25 + i * 50; // y coordinate
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
  mounted() {
    this.resizeCanvas();
  }
}