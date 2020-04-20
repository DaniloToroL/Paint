
let sketch = function (p) {
    let color = color1;
    p.setup = function () {
        p.createCanvas(p.windowWidth, 1000);
        p.clear()
        p.background(256)
    }
    p.draw = function () {
        
        if (events.eraser) {
            color = color2
        } else {
            color = color1
        }
        if (p.mouseIsPressed) {
            p.stroke(color)
            p.strokeWeight(size)
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
        }

    }
};

let myp5 = new p5(sketch, 'container');