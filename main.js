let dom = (window.location.hostname == "bythunder.co.uk") ? "bythunder" : "monosonic";
var text;
var css;
var title;
var style = document.createElement('style');

if (dom == "monosonic") {
    title = "monosonic";
    css = " :root {";
    css += "--color-1: #FAB300;";
    css += "--color-2: #14213D;";
    css += "--color-3: #FCA311;";
    css += "--color-4: #e5e5e5;";
    css += "--color-5: #ffffff;";
    css += "--color-6: #000000;";
    css += "}";
    text = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800\" height=\"900\" viewBox=\"0 0 400 450\" fill=\"none\">\n  <!-- Background -->\n  <rect width=\"400\" height=\"450\" fill=\"#FAB300\"/>\n\n  <!-- Grid pattern definition -->\n\n  <!-- Outer ring/arc (~3/4 circle, gap at bottom) -->\n  <circle cx=\"200\" cy=\"200\" r=\"120\" fill=\"none\" stroke=\"#0C0D0C\" stroke-opacity=\"0.2\" stroke-width=\"3\" stroke-linecap=\"butt\" stroke-dasharray=\"515 239\" transform=\"rotate(147 200 200)\"/>\n\n  <!-- Main dark circle with grid -->\n  <circle cx=\"200\" cy=\"200\" r=\"96\" fill=\"#2F322F\" stroke=\"none\"/>\n  <circle cx=\"200\" cy=\"200\" r=\"96\" fill=\"url(#grid)\"/>\n\n  <!-- White indicator dot - starts at 7:30, animates clockwise to 4:30 -->\n  <circle cx=\"146\" cy=\"254\" r=\"6\" fill=\"white\">\n    <animateTransform\n      attributeName=\"transform\"\n      type=\"rotate\"\n      from=\"0 200 200\"\n      to=\"270 200 200\"\n      dur=\"1.5s\"\n      calcMode=\"spline\"\n      keyTimes=\"0; 1\"\n      keySplines=\"0.16 1 0.3 1\"\n      fill=\"freeze\"\n    />\n  </circle>\n\n  <!-- Minus symbol (left edge, bottom aligned, smaller) -->\n  <rect x=\"96\" y=\"294\" width=\"28\" height=\"3\" fill=\"#0C0D0C\" fill-opacity=\"0.2\"/>\n\n  <!-- Plus symbol (right edge, bottom aligned, combined to avoid double opacity) -->\n  <rect x=\"276\" y=\"294\" width=\"28\" height=\"3\" fill=\"#0C0D0C\" fill-opacity=\"0.2\"/> <rect x=\"288.5\" y=\"281.5\" width=\"3\" height=\"28\" fill=\"#0C0D0C\" fill-opacity=\"0.2\"/>\n\n  <!-- Label text -->\n  <text x=\"200\" y=\"400\" font-family=\"'Erica One', cursive\" font-size=\"80\" font-weight=\"500\" fill=\"#2F322F\" text-anchor=\"middle\">MONO</text>\n</svg>";
    css += "h1{";
    css += "text-align: left;";
    css += "}";
} else {
    title = "By Thunder";
    css = " :root {";
    css += "--color-1: #323031;";
    css += "--color-2: #FFC857;";
    css += "--color-3: #DB3A34;";
    css += " --color-4: #084c61;";
    css += " --color-5: #177E89;";
    css += " --color-6: #000000;";
    css += "}";

    text = "<h1>By Thunder</h1>";
    var colors = ['#323031', '#DB3A34', '#084c61', '#177E89'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = random_color;
}

document.title = title;
style.innerHTML = css;
document.getElementsByTagName('head')[0].appendChild(style);
document.getElementById("inner").innerHTML = text;