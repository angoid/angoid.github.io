let dom = (window.location.hostname=="bythunder.co.uk") ? "bythunder" : "monosonic";
var text;
var css;
var title;
var style = document.createElement('style');

if(dom == "monosonic"){
    title = "monosonic";
    css = " :root {";
    css+= "--color-1: #041316;";
    css+= "--color-2: #14213D;";
    css+= "--color-3: #FCA311;";
    css+= "--color-4: #e5e5e5;";
    css+= "--color-5: #ffffff;";
    css+= "}";
    text = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\" viewBox=\"0 0 150 150\" fill=\"none\">\n<rect width=\"150\" height=\"150\" fill=\"#041316\"/>\n<circle cx=\"73.5\" cy=\"72.5\" r=\"62.5\" fill=\"white\"/>\n<path d=\"M76 63H86V129H76V63Z\" fill=\"#041316\"/>\n<rect x=\"63\" y=\"77\" width=\"10\" height=\"52\" fill=\"#041316\"/>\n<rect x=\"89\" y=\"49\" width=\"10\" height=\"74\" fill=\"#041316\"/>\n<rect x=\"115\" y=\"47\" width=\"10\" height=\"61\" fill=\"#041316\"/>\n<rect x=\"102\" y=\"32\" width=\"10\" height=\"89\" fill=\"#041316\"/>\n<rect x=\"50\" y=\"91\" width=\"10\" height=\"37\" fill=\"#041316\"/>\n<rect x=\"37\" y=\"105\" width=\"10\" height=\"18\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 102 53)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 115 71)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 115 47)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 115 53)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 115 59)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 115 65)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 102 47)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 102 41)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"4\" transform=\"matrix(1 0 0 -1 50 22)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"2\" transform=\"matrix(1 0 0 -1 63 15)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"2\" transform=\"matrix(1 0 0 -1 63 19)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"2\" transform=\"matrix(1 0 0 -1 63 23)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"2\" transform=\"matrix(1 0 0 -1 76 18)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"2\" transform=\"matrix(1 0 0 -1 76 22)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"2\" transform=\"matrix(1 0 0 -1 102 34)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"2\" transform=\"matrix(1 0 0 -1 89 21)\" fill=\"#041316\"/>\n<rect width=\"10\" height=\"2\" transform=\"matrix(1 0 0 -1 50 24)\" fill=\"#041316\"/>\n<path d=\"M137 72.5C137 107.018 109.018 135 74.5 135C39.9822 135 12 107.018 12 72.5C12 37.9822 39.9822 10 74.5 10C109.018 10 137 37.9822 137 72.5ZM25.8172 72.5C25.8172 99.3868 47.6132 121.183 74.5 121.183C101.387 121.183 123.183 99.3868 123.183 72.5C123.183 45.6132 101.387 23.8172 74.5 23.8172C47.6132 23.8172 25.8172 45.6132 25.8172 72.5Z\" fill=\"white\"/>\n</svg>";
    text += "<h1>monosonic</h1>";
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