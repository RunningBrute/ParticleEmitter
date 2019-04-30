window.onload = function()
{
	const MAX_PARTICLE_SIZE = 3;
	const START_X = 200;
	const START_Y = 200;
	const DELTA_X = 5;
	const DELTA_Y = 5;

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
		this.x = Math.floor(Math.random() * START_X);
		this.y = Math.floor(Math.random() * START_Y);
		this.width = Math.ceil(Math.random() * MAX_PARTICLE_SIZE);
		this.height = this.width;
		this.deltaX = Math.ceil(Math.random() * DELTA_X);
		this.deltaY = Math.ceil(Math.random() * DELTA_Y);
	
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
			let xBeforeUpdate = particles[i].x - particles[i].deltaX;
			let yBeforeUpdate = particles[i].y - particles[i].deltaY;

			ctx.clearRect(xBeforeUpdate, yBeforeUpdate,
						  particles[i].width, particles[i].height);
						  
			ctx.fillRect(particles[i].x, particles[i].y,
						 particles[i].width, particles[i].height);
		}
	}
}