// pass in the canvas' context to this function 
function disableAntiAliasing(context) 
{ 
	// note: you must factor this into any other
	// context.translate calls in the future
	context.translate(0.5, 0.5); 
	context.webkitImageSmoothingEnabled = false; 
	context.mozImageSmoothingEnabled = false; 
	context.imageSmoothingEnabled = false; 
}

window.onload = function()
{
    const canvasElem = document.getElementById('can'); 
    var ctx = canvasElem.getContext('2d'); 
    ctx.fillStyle = "#FFFFFF";
    //disableAntiAliasing(ctx);

    var timer = setInterval(singleCreate, 10)

    var particles = new Array();
}

function createParticle()
{
	this.x = Math.floor(Math.random() * 200);
	this.y = Math.floor(Math.random() * 200);
	this.width = 1;
	this.height = 1;
	
	ctx.fillRect(
		this.x, 
		this.y,
		this.width, 
		this.height);
}

function singleCreate()
{
	if (particles.length < 10000)
	{
		let p = new createParticle();
		particles.push(p)
	}
	
	updatePosition()
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
		
		//particles[i].x += 1;
		particles[i].y += 1;
		
		ctx.fillRect(
			particles[i].x, 
			particles[i].y,
			particles[i].width,
			particles[i].height);
	}
}
