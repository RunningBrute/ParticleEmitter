const canvasElem = document.getElementById('can'); 
const ctx = canvasElem.getContext('2d'); 

var timer = setInterval(singleCreate, 100)

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
	if (particles.length < 10)
	{
		let p = new createParticle();
		particles.push(p)
	}
	else
	{
		updatePosition()
	}
}
	
function updatePosition()
{
	for (let i = 0; i < particles.length; i++)
	{
		ctx.clearRect(
			particles[i].x, 
			particles[i].y,
			particles[i].width,
			particles[i].height);
		
		particles[i].x += 1;
		particles[i].y += 1;
		
		ctx.fillRect(
			particles[i].x, 
			particles[i].y,
			particles[i].width,
			particles[i].height);
	}
}
    
