
const canvasElem = document.getElementById('can'); 
const ctx = canvasElem.getContext('2d'); 

var timer = setInterval(singleCreate, 90)

var particles = new Array();

function createParticle()
{
	this.x = Math.random() * 200;
	this.y = Math.random() * 150;
	this.width = 5;
	this.height = 5;
	
	ctx.fillRect(this.x, this.y,
				  this.width, this.height);
}

function singleCreate()
{
	let p = new createParticle();
	particles.push(p)
}
