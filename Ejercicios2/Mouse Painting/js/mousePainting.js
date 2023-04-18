let screen = document.querySelector("canvas")
let paintbrush = screen.getContext("2d")
paintbrush.fillStyle = "lightgray"
paintbrush.fillRect(0,0,600,400)

let canPaint = false
let color = ["red", "green", "blue"]
let i = 2


function paintColorPalette(x, color) {
        paintbrush.fillStyle = color
        paintbrush.fillRect(x, 0, 50, 50)
}

function paintCircunference(event) {
    let x = event.pageX - screen.offsetLeft
    let y = event.pageY - screen.offsetTop

    setColorIndex(x, y)

    if (canPaint) {

        paintbrush.fillStyle = color[i]
        paintbrush.beginPath()
        paintbrush.arc(x, y, 5, 0, 2 * Math.PI)
        paintbrush.fill()
    }
}
 
function setColorIndex(x, y) {
    if ((x <= 150) && (y <= 50)) {
        canPaint = false
        if (x <= 50) {
            i = 0
        } else if (x <= 100) {
            i = 1
        } else {
            i = 2
        }
    }
}

function enablePaint() {
    canPaint = true
}

function disablePaint() {
    canPaint = false
}


screen.onmousemove = paintCircunference
screen.onmousedown = enablePaint
screen.onmouseup = disablePaint

paintColorPalette(0, "red")
paintColorPalette(50, "green")
paintColorPalette(100, "blue")
