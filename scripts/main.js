
// Variables
let lapiz = false
let start = false
let x_i
let y_i
let color = 'black'
let size = 1


// HTML Objects
const pallet = document.getElementById('pallet')
const slider = document.querySelector('#slider')
const canvas = document.getElementById('io')
const lienzo = canvas.getContext('2d')
const colorsRandom = document.getElementsByClassName('bg-color')

// Listener
pallet.addEventListener('change', changeColor)
slider.addEventListener('change', changeSize)
canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mouseup',endDraw)
canvas.addEventListener('mousemove', moving)

for(color in colorsRandom){
   if(colorsRandom[color].style != undefined){
        colorsRandom[color].style.backgroundColor = getRandomColor()
   }
}


// Functions

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeColor(event){
        color = event.target.value
}

function changeSize(event){
    size = event.target.value
}

function startDraw(event) {
    start = true
    x_i = event.layerX
    y_i = event.layerY  
}

function endDraw(){
    start = false
}

function moving(event){
    if (lapiz && start){
        x_f = event.layerX
        y_f = event.layerY
        draw(x_i, y_i, x_f, y_f )
        x_i = event.layerX
        y_i = event.layerY
    }
}

function draw(x_i, y_i, x_f, y_f){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.lineWidth = size
    lienzo.moveTo(x_i, y_i)  
    lienzo.lineTo(x_f, y_f)
    lienzo.stroke()
    lienzo.closePath()
}



