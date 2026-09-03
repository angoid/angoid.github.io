let dom = (window.location.hostname == "bythunder.co.uk") ? "bythunder" : "monosonic";
const hostname = window.location.hostname.toLowerCase();
const isMonosonicLegacyDomain = hostname === "monosonic.co.uk" || hostname === "www.monosonic.co.uk";
const shouldShowMonosSignup = dom === "monosonic" && !isMonosonicLegacyDomain;
const monosLogoText = isMonosonicLegacyDomain ? "MONOSONIC" : "MONOS";
const monosLogoFontSize = isMonosonicLegacyDomain ? "44" : "80";
const squidbrainLinkHtml = "<div id=\"container\" class=\"squidbrain-cta\"><span class=\"squidbrain-logo\">Squidbrain<span>.</span></span><span id=\"item2\" class=\"squidbrain-copy\">Coming soon... A cross-platform audio capture and preparation system that makes sampling frictionless.</span><a id=\"item1\" class=\"squidbrain-button\" href=\"https://squidbrain.io\" target=\"_blank\" rel=\"noopener\">Visit Squidbrain</a></div>";
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
    text = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"675\" viewBox=\"0 0 400 450\" fill=\"none\">\n  <!-- Background -->\n  <rect width=\"400\" height=\"450\" fill=\"#FAB300\"/>\n\n  <!-- Grid pattern definition -->\n\n  <!-- Outer ring/arc (~3/4 circle, gap at bottom) -->\n  <circle cx=\"200\" cy=\"200\" r=\"120\" fill=\"none\" stroke=\"#0C0D0C\" stroke-opacity=\"0.2\" stroke-width=\"3\" stroke-linecap=\"butt\" stroke-dasharray=\"515 239\" transform=\"rotate(147 200 200)\"/>\n\n  <!-- Main dark circle with grid -->\n  <circle cx=\"200\" cy=\"200\" r=\"96\" fill=\"#2F322F\" stroke=\"none\"/>\n  <circle cx=\"200\" cy=\"200\" r=\"96\" fill=\"url(#grid)\"/>\n\n  <!-- White indicator dot - starts at 7:30, animates clockwise to 4:30 -->\n  <circle cx=\"146\" cy=\"254\" r=\"6\" fill=\"white\">\n    <animateTransform\n      attributeName=\"transform\"\n      type=\"rotate\"\n      from=\"0 200 200\"\n      to=\"270 200 200\"\n      dur=\"1.5s\"\n      calcMode=\"spline\"\n      keyTimes=\"0; 1\"\n      keySplines=\"0.16 1 0.3 1\"\n      fill=\"freeze\"\n    />\n  </circle>\n\n  <!-- Minus symbol (left edge, bottom aligned, smaller) -->\n  <rect x=\"96\" y=\"294\" width=\"28\" height=\"3\" fill=\"#0C0D0C\" fill-opacity=\"0.2\"/>\n\n  <!-- Plus symbol (right edge, bottom aligned, combined to avoid double opacity) -->\n  <rect x=\"276\" y=\"294\" width=\"28\" height=\"3\" fill=\"#0C0D0C\" fill-opacity=\"0.2\"/> <rect x=\"288.5\" y=\"281.5\" width=\"3\" height=\"28\" fill=\"#0C0D0C\" fill-opacity=\"0.2\"/>\n\n  <!-- Label text -->\n  <text x=\"200\" y=\"400\" font-family=\"Erica One, cursive\" font-size=\"" + monosLogoFontSize + "\" font-weight=\"400\" fill=\"#2F322F\" text-anchor=\"middle\">" + monosLogoText + "</text>\n</svg>    <div id=\"main\">" + (shouldShowMonosSignup ? "<div id=\"container\"><form id=\"item1\" style=\"margin-bottom:20px;\"><input type=\"email\" id=\"email\" placeholder=\"Enter your email\" required style=\"padding:12px 16px;border-radius:6px;border:none;width:240px;max-width:80%;\"/><button type=\"submit\" style=\"padding:12px 18px;margin-left:8px;border:none;border-radius:6px;background:#2F322F;color:white;cursor:pointer;\">Join</button></form><span id=\"item2\">Sign-up to join the MONOS beta waitlist!</span></div>" : (isMonosonicLegacyDomain ? squidbrainLinkHtml : "")) + "<div>";
    css += "h1{";
    css += "text-align: left;";
    css += "}";
    css += "@keyframes fadeSlideIn {";
    css += "  from { opacity: 0; transform: translateY(-10px); }";
    css += "  to { opacity: 1; transform: translateY(0); }";
    css += "}";
    css += ".status-animate {";
    css += "  animation: fadeSlideIn 0.4s ease-out forwards;";
    css += "}";
    css += ".squidbrain-cta {";
    css += "  align-items: flex-start;";
    css += "  max-width: 380px;";
    css += "  padding: 18px 20px;";
    css += "  text-align: left;";
    css += "  color: #1A1A17;";
    css += "  background: #F6F4EE;";
    css += "  border: 1px solid #1A1A17;";
    css += "  box-shadow: 4px 4px 0 0 #1A1A17;";
    css += "  font-family: 'Space Grotesk', system-ui, sans-serif;";
    css += "}";
    css += ".squidbrain-logo {";
    css += "  display: block;";
    css += "  width: 100%;";
    css += "  margin-bottom: 12px;";
    css += "  font-size: 22px;";
    css += "  line-height: 1;";
    css += "  font-weight: 700;";
    css += "  letter-spacing: -0.5px;";
    css += "  text-align: left;";
    css += "}";
    css += ".squidbrain-logo span {";
    css += "  color: #FAB300;";
    css += "}";
    css += ".squidbrain-copy {";
    css += "  display: block;";
    css += "  margin-bottom: 18px;";
    css += "  font-size: 14px;";
    css += "  line-height: 1.35;";
    css += "  font-weight: 600;";
    css += "  color: #1A1A17;";
    css += "}";
    css += ".squidbrain-button {";
    css += "  display: inline-flex;";
    css += "  min-height: 46px;";
    css += "  align-items: center;";
    css += "  justify-content: center;";
    css += "  padding: 0 18px;";
    css += "  color: #1A1A17;";
    css += "  background: #FAB300;";
    css += "  border: 1px solid #1A1A17;";
    css += "  border-radius: 0;";
    css += "  box-shadow: 4px 4px 0 0 #1A1A17;";
    css += "  font-family: 'Space Grotesk', system-ui, sans-serif;";
    css += "  font-size: 16px;";
    css += "  font-weight: 700;";
    css += "  text-decoration: none;";
    css += "  transition: transform 80ms ease, box-shadow 80ms ease, background-color 80ms ease;";
    css += "}";
    css += ".squidbrain-button:hover {";
    css += "  background: #EFAE1A;";
    css += "}";
    css += ".squidbrain-button:active {";
    css += "  transform: translate(4px, 4px);";
    css += "  box-shadow: none;";
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

if (shouldShowMonosSignup) {
    const signupForm = document.getElementById("item1");
    const statusMsg = document.getElementById("item2");

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const submitBtn = signupForm.querySelector("button");

        // Disable button and show loading state
        submitBtn.disabled = true;
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = "Joining...";

        try {
            const response = await fetch("https://new-music-radio-server-new.vercel.app/v1/beta-signups", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-shared-secret": "MONO_BETA_SECRET_992834"
                },
                body: JSON.stringify({
                    email: email,
                    source: "monosonic.co.uk"
                })
            });

            const result = await response.json();

            if (response.ok) {
                signupForm.style.display = "none";
                statusMsg.innerText = "Thanks for joining the MONOS beta waitlist! We'll be in touch soon.";
                statusMsg.style.color = "var(--color-6)";
                statusMsg.style.fontWeight = "600";
                statusMsg.classList.remove("status-animate");
                void statusMsg.offsetWidth; // Trigger reflow to restart animation
                statusMsg.classList.add("status-animate");
            } else {
                throw new Error(result.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Signup error:", error);
            statusMsg.innerText = error.message;
            statusMsg.style.color = "#2F322F";
            statusMsg.style.fontWeight = "500";
            statusMsg.classList.remove("status-animate");
            void statusMsg.offsetWidth; // Trigger reflow to restart animation
            statusMsg.classList.add("status-animate");
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        }
    });
}
