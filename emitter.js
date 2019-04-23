
window.onload = function()
{
    var pos = 0;
    var con = document.getElementById('container')

    var timer = setInterval(createParticle, 50)

    function createParticle()
    {
        var cr_box = document.createElement('div');
            
        var top_position = Math.random() * 200;
        top_position = (screen.height / 2)+ Math.floor(top_position);
        var left_position = Math.random() * 200;
        left_position = (screen.width / 2) + Math.floor(left_position);

        cr_box.style.height = "5px";
        cr_box.style.width = "5px";
        cr_box.style.color = "blue";
        cr_box.setAttribute("id","box")
        cr_box.style.top = top_position + "px";
        cr_box.style.left = left_position + "px";
        document.getElementById('container').appendChild(cr_box);
    }
};