const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Circle {
    constructor(radius, x, y, dx = 1, dy = 1, directionX, directionY, color = "yellow") {
        this.radius = radius
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
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

const makeCircle = (radius, dx, dy) => {
    return new Circle(
        radius,
        canvas.width - Math.random() * canvas.width,
        canvas.height - Math.random() * canvas.height,
        dx,
        dy,
        1,
        1,
        randomHexColorCode()
    )
}

const circlesQty = 100
const circles = [makeCircle(1)]

const step = async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((_, i) => {
        circles[i] = new Circle(circles[i].radius, circles[i].x, circles[i].y, circles[i].dx, circles[i].dy, circles[i].directionX, circles[i].directionY, circles[i].color)
        circles[i].make()
        circles[i].move()
    })

    requestAnimationFrame(step);
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    let radius = 2

    for (let i = 0; circles.length <= circlesQty; i++) {
        circles.push(makeCircle(radius, (1 / radius) * 2, (1 / radius) * 2))

        if (radius <= 32 && i % 10 === 0) {
            ++radius;
        }

        await delay(500)
    }
})()

window.requestAnimationFrame(step);