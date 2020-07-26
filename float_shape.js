const main = document.querySelector('main')
const canvas = document.createElement('canvas')
const CTX = canvas.getContext('2d')
canvas.style.zIndex = "-1"
canvas.style.position = "absolute"


function resizeCanvas(canvas) {
    canvas.width = main.clientWidth;
    canvas.height = main.clientHeight;
}


const MOUSE = {
    x: 0,
    y: 0,
    // clicked: false
}
const COLORS = [
    "#092140",
    "#024959",
    "#F2C777",
    "#F24738",
    "#BF2A2A"
]

class Shape {
    constructor() {
        this.dx = (Math.random() - 0.5)
        this.dy = (Math.random() - 0.5)
        this.radius = Math.random() * 5
        this.minRadius = this.radius
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.x = Math.random() * (canvas.width - 2 * this.radius) + this.radius
        this.y = Math.random() * (canvas.height - 2* this.radius) + this.radius
    }

    display() {
        CTX.beginPath()
        CTX.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        
        CTX.strokeStyle = this.color
        CTX.stroke()
    }

    update() {
        if ((this.x + this.radius) >= canvas.width || (this.x - this.radius) <= 0) {
            this.dx *= -1
        }
        if ((this.y + this.radius) >= canvas.height || (this.y - this.radius) <= 0)  {
            this.dy *= -1
        }

        this.x += this.dx
        this.y += this.dy

        let {x, y, radius, minRadius} = this

        if (MOUSE.x - x < 50 && MOUSE.x - x > -50
            && MOUSE.y - y < 50 && MOUSE.y - y > -50 
            && radius < 100) {
            radius += 1
        } else if (radius > minRadius) {
            radius -= 1
            if (radius < minRadius) {
                radius = minRadius
            }
        }
        this.radius = radius

    }
}


// starts and continuees the animation per frame
function animate() {
    requestAnimationFrame(animate)
    CTX.clearRect(0, 0, canvas.width, canvas.height)
    shapes.forEach(c => {
        c.update()
        c.display()
    })
}



main.addEventListener("mousemove", function(event) {
    MOUSE.x = event.x
    MOUSE.y = event.y
})


// canvas.addEventListener("click", function(event) {
//     MOUSE.clicked = true
// })
function init() {
    resizeCanvas(canvas)
    fillShapes()
}


function fillShapes() {
    shapes = []
    for (let i = 0; i < 50; i ++) {
        
        let c = new Shape() 
        c.display()
        shapes.push(c)
    
    }
}
let shapes = []
fillShapes()

if (window.matchMedia("(min-width: 769px)").matches) {

    window.addEventListener("resize", init)
    window.addEventListener("load", () => main.appendChild(canvas))
    init()
    animate()
} else {
    console.log("For mobile")
}