window.onload = function()
{
    const canvasElem = document.getElementById('can'); 
    var ctx = canvasElem.getContext('2d'); 
    ctx.fillStyle = "#FFFFFF";
    //disableAntiAliasing(ctx);

	var emittTimer = setInterval(emmitt, 10);

	var particles = new Array();

	function emmitt()
	{
		singleCreate();
		updatePosition();
		drawParticles();
	}
	
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

	function createParticle()
	{
		this.x = Math.floor(Math.random() * 200);
		this.y = Math.floor(Math.random() * 200);
		this.width = Math.ceil(Math.random() * 3);
		this.height = this.width;
		this.deltaX = Math.ceil(Math.random() * 5);
		this.deltaY = Math.ceil(Math.random() * 5);
	
		ctx.fillRect(this.x, this.y, this.width, this.height, this.deltaX, this.deltaY);
	}

	function singleCreate()
	{
		if (particles.length < 10000)
		{
			let p = new createParticle();
			particles.push(p)
		}
	}
	
	function updatePosition()
	{
		for (let i = 0; i < particles.length; i++)
		{
		    particles[i].x += particles[i].deltaX;
			particles[i].y += particles[i].deltaY;
	    }
	}

	function drawParticles()
	{
		for (let i = 0; i < particles.length; i++)
		{
			ctx.clearRect(particles[i].x - particles[i].deltaX,
				          particles[i].y - particles[i].deltaY,
						  particles[i].width, particles[i].height);
						  
			ctx.fillRect(particles[i].x, particles[i].y,
						 particles[i].width, particles[i].height);
		}
	}
}