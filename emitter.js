
class Particle 
{
    constructor() 
    {
        var top_position = Math.random() * 200;
        top_position = (screen.height / 2) + Math.floor(top_position);
        var left_position = Math.random() * 200;
        left_position = (screen.width / 2) + Math.floor(left_position);

        this.top = top_position + "px";
        this.left = left_position + "px";
        this.color = "green";
    }
}

window.onload = function()
{
    var pos = 0;
    var con = document.getElementById('container')

    var timer = setInterval(createParticle, 50)

    function createParticle()
    {
        var cr_box = document.createElement('div');
            
        var particle = new Particle;

        cr_box.style.height = "5px";
        cr_box.style.width = "5px";
        cr_box.style.color = particle.color;
        cr_box.setAttribute("id","box")
        cr_box.style.top = particle.top;
        cr_box.style.left = particle.left;
        document.getElementById('container').appendChild(cr_box);
    }
};