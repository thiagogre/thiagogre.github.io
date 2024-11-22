const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Circle {
    constructor(radius, x, y, directionX, directionY, color = "yellow") {
        this.radius = radius
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.color = color;
        this.dx = 1;
        this.dy = 1;
    }

    make() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.stroke
        ctx.stroke();
        ctx.fill();
    }

    move() {
        this.directionX > 0 ?
            this.x += this.dx : this.x -= this.dx

        this.directionY > 0 ?
            this.y += this.dy : this.y -= this.dy

        // console.log(this.x, this.y, this.directionX, this.directionY, canvas.width, canvas.height)
        if (this.y > canvas.height - this.radius) {
            this.directionY = -1;
        }
        if (this.y <= 0) this.directionY = 1
        if (this.x > canvas.width - this.radius) {
            this.directionX = -1;
        }
        if (this.x <= 0) this.directionX = 1
    }
}

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

const circlesQty = 200
const radius = 2
const circles = []
for (let i = 0; i < circlesQty; i++) {
    const circle = new Circle(radius, canvas.width - Math.random() * canvas.width, canvas.height - Math.random() * canvas.height, 1, 1, randomHexColorCode())
    circles.push(circle)
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let isRendering = true
const step = async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circlesQty; i++) {
        if (isRendering) {
            await delay(10);
        }
        circles[i] = new Circle(circles[i].radius, circles[i].x, circles[i].y, circles[i].directionX, circles[i].directionY, circles[i].color)
        circles[i].make()
        circles[i].move()
    }

    isRendering = false
    requestAnimationFrame(step);
};

window.requestAnimationFrame(step);