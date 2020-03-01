
// Variables
let isPencil = false
let start = false
let isWrite = false
let text = ""
let x_i
let y_i
let size = 5
let isSize = false
let color1 = '#000'
let color2 = '#FFF'


// HTML Objects
const canvas = document.getElementById('io')
const lienzo = canvas.getContext('2d')
const colorsRandom = document.getElementsByClassName('bg-color')

document.getElementById('bg-color-1').style.backgroundColor = color1
document.getElementById('bg-color-2').style.backgroundColor = color2



// Listener
canvas.addEventListener('mousedown', startEvent)
canvas.addEventListener('mouseup', endDraw)
canvas.addEventListener('mousemove', moving)
canvas.addEventListener('wheel', changeSize)
canvas.addEventListener('click', function () {
    if (isWrite) {
        x_i = event.layerX
        y_i = event.layerY
        text = ""
        start = true
    }
})

document.addEventListener('keyup', pressKey)

for (color in colorsRandom) {
    colorsRandom[color].onclick = function(e){
        color1 = this.style.backgroundColor
        document.getElementById('bg-color-1').style.backgroundColor = color1
    }
    colorsRandom[color].oncontextmenu = function(e){
        color2 = this.style.backgroundColor
        document.getElementById('bg-color-2').style.backgroundColor = color2
    }
    if (colorsRandom[color].style != undefined) {
        colorsRandom[color].style.backgroundColor = getRandomColor()
    }
}

// Functions

function changeColor(){
    const sizeImage = document.getElementById('size')
    if (isSize){
        sizeImage.classList.add("size-color")
    }else{
        sizeImage.classList.remove("size-color")
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function changeSize(event) {

    if (isSize){
        size += event.deltaY < 0 ? 5 : -5
        size = size < 0 ? 1 : size
    }
}

function startEvent(event) {
    start = true
    x_i = event.layerX
    y_i = event.layerY
}

function pressKey(event) {
    text += event.key
    if (start && isWrite) {
        write()
    }
}

function write() {
    lienzo.fillStyle = color1;
    lienzo.font = "bold Arial " + size;
    lienzo.fillText(text, x_i, y_i);

}

function endDraw() {
    start = false
    x_i = 0
    y_i = 0
}

function moving(event) {
    if (isPencil && start) {
        x_f = event.layerX
        y_f = event.layerY
        drawRectangle(x_f, y_f, size, size)
        x_i = event.layerX
        y_i = event.layerY
    }
}

function draw(x_i, y_i, x_f, y_f) {
    lienzo.beginPath()
    lienzo.strokeStyle = color1
    lienzo.lineWidth = size
    lienzo.moveTo(x_i, y_i)
    lienzo.lineTo(x_f, y_f)
    lienzo.stroke()
    lienzo.closePath()
}

function drawRectangle(x, y, width, height){
    lienzo.fillStyle = color1;
    lienzo.fillRect(x, y, width, height);
}



