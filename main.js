function update()
{
    var R_border = document.getElementById("R_border").value;
    var G_border = document.getElementById("G_border").value;
    var B_border = document.getElementById("B_border").value;
    var R_background = document.getElementById("R_background").value;
    var G_background = document.getElementById("G_background").value
    var B_background = document.getElementById("B_background").value;
    var W = document.getElementById("W").value;

    var p = document.getElementById("paragraph");
    p.style.borderWidth = W;

    var RGB_border = 'rgb(' + R_border+ ', '+ G_border +', '+ B_border +')';
    p.style.borderColor = RGB_border;

    var RGB_Background = 'rgb(' + R_background + ', '+ G_background +', '+ B_background +')';
    p.style.backgroundColor = RGB_Background;
}

function validate()
{
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;


    if(p1 == p2 && p1.length > 7 && p2.length > 7)
    {
        document.getElementById("output").innerHTML = "Passwords match";
    }
    else if(p1 != p2)
    {
        document.getElementById("output").innerHTML = alert("Passwords are different");
        document.getElementById("output").innerHTML = "passwords are different";
    }else
    {
        document.getElementById("output").innerHTML = "Password is not long enough"
    };

    document.getElementById("p1").value = "html is stupif";

};
