let screen = document.querySelector("canvas")
let paintbrush = screen.getContext("2d")
paintbrush.fillStyle = "lightgray"
paintbrush.fillRect(0,0,600,400)

let canPaint = false

function paintCircunference(event) {
    
    if (canPaint) {
        let x = event.pageX - screen.offsetLeft
        let y = event.pageY - screen.offsetTop
        paintbrush.fillStyle = "blue"
        paintbrush.beginPath()
        paintbrush.arc(x, y, 5, 0, 2 * Math.PI)
        paintbrush.fill()
    }
}

screen.onmousemove = paintCircunference

function enablePaint() {
    canPaint = true
}

function disablePaint() {
    canPaint = false
}

screen.onmousedown = enablePaint
screen.onmouseup = disablePaint
