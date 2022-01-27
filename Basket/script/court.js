const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width =  900;
canvas.height =  450;


// full court

ctx.fillStyle = "orange"
ctx.fillRect (0, 0, 900, 450)

// Side Rectangles

ctx.fillRect (0,180, 150, 100)
ctx.stroke() 


// central Lines

ctx.beginPath();
ctx.moveTo (canvas.width / 2 , 0)
ctx.lineTo(450,900)
ctx.strokeStyle = "white"
ctx.stroke() 
ctx.stroke() 
ctx.stroke() 

// central circle

ctx.beginPath()
ctx.arc(450, canvas.height / 2, 50, 0, Math.PI * 2, false)
ctx.stroke()
ctx.stroke()
ctx.stroke()
