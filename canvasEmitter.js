const canvasElem = document.getElementById('can'); 
const ctx = canvasElem.getContext('2d'); 

var timer = setInterval(createParticle, 90)

function createParticle()
{
	let x = Math.random() * 200;
	let y = Math.random() * 150;
	let width = 5;
	let height = 5;
	
	ctx.fillRect(x, y, width, height);
}
