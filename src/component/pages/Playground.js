import Component from "../../core/Component.js";
import Canvas from "../playground/Canvas.js";


export default class Playground extends Component {
    template() {
        return `
            <div id="canvas-wrap" style="width: 100vw; height: 100vh;">
                <canvas id="canvas"></canvas>
            </div>
        `;
    }
    mounted() {
        const canvas = document.getElementById('myCanvas');
        const parent = document.getElementById('canvas-wrap');
        const context = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            
            // 여기에서 그림을 다시 그리면 돼
            context.clearRect(0, 0, canvas.width, canvas.height);  // 기존 그림 지우기
            drawSomething();  // 원하는 그림 그리기 함수
        }

        function drawSomething() {
            // 예시로 원 그리기
            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
            context.fillStyle = 'blue';
            context.fill();
        }

        // 초기 canvas 사이즈 설정
        resizeCanvas();

        // 브라우저 크기가 변경될 때마다 canvas 크기 조정
        window.addEventListener('resize', resizeCanvas);
    }
}