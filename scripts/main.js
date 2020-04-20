
// Variables
let size = 5
let color1 = "#000000"
let color2 = "#FFFFFF"
let events = {pencil: true, eraser: false}


// HTML Objects
const inputColor1 = document.getElementById("color-1")
const inputColor2 = document.getElementById("color-2")
const rangeBar = document.getElementById("size")
const rangeVal = document.getElementById("sizeVal")


// Listener
inputColor1.addEventListener("change", (e)=>{color1 = e.target.value})
inputColor2.addEventListener("change", (e)=>{color2 = e.target.value})
rangeVal.addEventListener("change", (e) => {size = e.target.value; })
rangeBar.addEventListener("input", setSizeVal)
inputColor1.addEventListener("click", (e) => {console.log(e)})



// Functions

function changeEvent(select){
    for(event in events){
        events[event] = false
    }
    events[select] = true
    console.log(events)
}

function setSizeVal(){
    rangeVal.value = this.value
    size = this.value
}





