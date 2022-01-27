const canvas = document.querySelector("canvas")

console.log(document.querySelector("canvas"))

const ctx = canvas.getContext("2d")
canvas.width =  1000;
canvas.height =  1000;

// Squares

ctx.fillStyle = "blue"
ctx.fillRect (20, 110, 50, 50)
ctx.fillStyle = "green"
ctx.fillRect (70, 160, 50, 50)
ctx.fillStyle = "red"
ctx.fillRect (120, 110, 50, 50)
ctx.fillStyle = "blue"
ctx.fillRect (170, 160, 50, 50)
ctx.fillStyle = "green"
ctx.fillRect (220, 110, 50, 50)
ctx.fillStyle = "red"
ctx.fillRect (120, 110, 50, 50)
ctx.fillStyle = "blue"



// LINES

ctx.beginPath();
ctx.moveTo (500,750)
ctx.lineTo(500, 100)
ctx.strokeStyle = "purple"
ctx.stroke()

ctx.beginPath();
ctx.moveTo (550,750)
ctx.lineTo(500, 100)
ctx.strokeStyle = "purple"
ctx.stroke()

ctx.beginPath();
ctx.moveTo (580,750)
ctx.lineTo(500, 100)
ctx.strokeStyle = "purple"
ctx.stroke()


// CIRCLE

ctx.beginPath()
ctx.arc(300, 300, 150, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 140, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 130, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 120, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 110, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 100, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 90, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 80, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 70, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 60, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 50, 0, Math.PI * 2, false)
ctx.stroke()
ctx.beginPath()
ctx.arc(300, 300, 40, 0, Math.PI * 2, false)
ctx.stroke()



for(let i = 0; i <10; i++){

let x = Math.random() * canvas.width
let y = Math.random() * canvas.height

ctx.beginPath()
ctx.arc(x, y, 40, 0, Math.PI * 2, false)
ctx.stroke()


}

function circlePop(){
    setTimeout(() =>{
        

    },1 * 1000)
}





