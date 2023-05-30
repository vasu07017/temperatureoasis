function dfc(temp)
{
var cel=((temp-32)*5)/9;
return cel;
}

function dcf(temp)
{
var far=(temp*(9/5))+32;
return far;
}

document.querySelector("button").addEventListener("click",function()
{
    var seltemp=document.querySelector("select").value;
    if(seltemp=='f')
    {
        var t=Number(document.querySelector("input").value);
        var fa=dcf(t);
        document.querySelector(".first").innerHTML= t+' °C';
        document.querySelector(".second").innerHTML='°F is '+fa;
         
    
    }
    
    if(seltemp=='c')
    {
        var t=Number(document.querySelector("input").value);
        var ce=dfc(t);
        document.querySelector(".first").innerHTML= t+' °F';
        document.querySelector(".second").innerHTML='°C is '+ce;
        

    }
}
);