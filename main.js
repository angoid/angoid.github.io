let dom = (window.location.hostname=="bythunder.co.uk") ? "bythunder" : "monosonic";
var text;
var css;
var title;
var style = document.createElement('style');

if(dom == "monosonic"){
    title = "monosonic";
    css = " :root {";
    css+= "--color-1: #000000;";
    css+= "--color-2: #14213D;";
    css+= "--color-3: #FCA311;";
    css+= "--color-4: #e5e5e5;";
    css+= "--color-5: #ffffff;";
    css+= "}";
    text = "<h1>monosonic</h1>";
    text+= "<h2>Adventures in music technology</h2>";
    css+= "h1{";
    css+= "text-align: left;";
    css+= "}";    
}else{
    title = "By Thunder";
    css = " :root {";
    css+= "--color-1: #323031;";
    css+= "--color-2: #FFC857;";
    css+= "--color-3: #DB3A34;";
    css+= " --color-4: #084c61;";
    css+= " --color-5: #177E89;";
    css+= "}";

    text = "<h1>By Thunder</h1>";
    var colors = ['#323031', '#DB3A34', '#084c61', '#177E89'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = random_color;     
}

document.title = title;
style.innerHTML = css;
document.getElementsByTagName('head')[0].appendChild(style);
document.getElementById("inner").innerHTML = text;
