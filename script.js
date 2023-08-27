
var base = document.getElementById("base");
var block1 = document.getElementById("color1");
var block2 = document.getElementById("color2");
var block3 = document.getElementById("color3");
var block4 = document.getElementById("color4");
var block5 = document.getElementById("color5");
var block6 = document.getElementById("color6");
var block7 = document.getElementById("color7");
var codeSnippet = document.getElementById("codeSnippet");
base.addEventListener("change", function () {
    var color = base.value;
    var hexCode = color.replace('#', '');
    var r = parseInt(hexCode.substring(0, 2), 16);
    var g = parseInt(hexCode.substring(2, 4), 16);
    var b = parseInt(hexCode.substring(4, 6), 16);

   // ComputeComplimentary(r, g, b);
    // ComputeTertiary(r, g, b);
    ComputeMonotone(r, g, b);

});

var randomColorBtn = document.getElementById("randomBtn");
randomColorBtn.addEventListener("click", function () {
    var r = Math.floor(Math.random() * 225);
    var g = Math.floor(Math.random() * 225);
    var b = Math.floor(Math.random() * 225);
    //ComputeComplimentary(r, g, b);
    ComputeMonotone(r, g, b);

});

// HSLA hue saturation lightness appearance
// Complimentary colors are 180 degrees
// tertiary colors are 120 degrees apart

const RGBToHSL = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;
    return [
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
    ];
  };

function RGBtoHSLA(r, g, b) {

}

function ComputeComplimentary(r, g, b) {
    var rComp = 255 - r;
    var gComp = 255 - g;
    var bComp = 255 - b;
    var ncolor1 = `rgb(${Math.round(r * .5)}, ${Math.round(g * .5)}, ${Math.round(b * .5)})`;
    var ncolor4 = `rgb(${Math.round(r * 1.2)}, ${Math.round(g * 1.2)}, ${Math.round(b * 1.2)})`;
    var ncolor3 = `rgb(${Math.round(r * 1.8)}, ${Math.round(g * 1.8)}, ${Math.round(b * 1.8)})`;
    var ncolor2 = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    var ncolor5 = `rgb(${Math.round(rComp)}, ${Math.round(gComp)}, ${Math.round(bComp)})`;
    var ncolor6 = `rgb(${Math.round(rComp * 1.5)}, ${Math.round(gComp * 1.5)}, ${Math.round(bComp * 1.5)})`;
    var ncolor7 = `rgb(${Math.round(rComp * 1.8)}, ${Math.round(gComp * 1.8)}, ${Math.round(bComp * 1.8)})`;
    UpdateBlocks(ncolor1, ncolor2, ncolor3, ncolor4, ncolor5, ncolor6, ncolor7);
}

function ComputeMonotone(r, g, b) {
    var ncolor1 = `rgb(${Math.round(r * .3)}, ${Math.round(g * .3)}, ${Math.round(b * .3)})`;
    var ncolor2 = `rgb(${Math.round(r * .5)}, ${Math.round(g * .5)}, ${Math.round(b * .5)})`;
    var ncolor3 = `rgb(${Math.round(r * .75)}, ${Math.round(g * .75)}, ${Math.round(b * .75)})`;
    var ncolor4 = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    var ncolor5 = `rgb(${Math.round(r * 1.3)}, ${Math.round(g * 1.3)}, ${Math.round(b * 1.3)})`;
    var ncolor6 = `rgb(${Math.round(r * 1.5)}, ${Math.round(g * 1.5)}, ${Math.round(b * 1.5)})`;
    var ncolor7 = `rgb(${Math.round(r * 1.9)}, ${Math.round(g * 1.9)}, ${Math.round(b * 1.9)})`;
    UpdateBlocks(ncolor1, ncolor2, ncolor3, ncolor4, ncolor5, ncolor6, ncolor7);
}

function UpdateBlocks(ncolor1, ncolor2, ncolor3, ncolor4, ncolor5, ncolor6, ncolor7) {
    block1.style.backgroundColor = ncolor1;
    block2.style.backgroundColor = ncolor2;
    block3.style.backgroundColor = ncolor3;
    block4.style.backgroundColor = ncolor4;
    block5.style.backgroundColor = ncolor5;
    block6.style.backgroundColor = ncolor6;
    block7.style.backgroundColor = ncolor7;


    //UpdatePage(ncolor1, ncolor2, ncolor3, ncolor4, ncolor5);
    block1.innerText = ncolor1;
    block2.innerText = ncolor2;
    block3.innerText = ncolor3;
    block4.innerText = ncolor4;
    block5.innerText = ncolor5;
    block6.innerText = ncolor6;
    block7.innerText = ncolor7;

    codeSnippet.innerHTML = "/*" + ncolor1+ " " + ncolor2 + " " + ncolor3+ " "  + ncolor4 + " */";
}

function ComputeTertiary(r, g, b) {
    var rTert = 170 - r;
    var gTert = 170 - g;
    var bTert = 170 - b;

    var ncolor6 = `rgb(${Math.round(r * .8)}, ${Math.round(g * .8)}, ${Math.round(b * .8)})`;
    var ncolor7 = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

    var ncolor3 = `rgb(${Math.round(r * 1.5)}, ${Math.round(g * 1.5)}, ${Math.round(b * 1.5)})`;
    var ncolor4 = `rgb(${Math.round(r * 1.5)}, ${Math.round(g * 1.5)}, ${Math.round(b * 1.5)})`;
    var ncolor5 = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    var ncolor1 = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    var ncolor2 = `rgb(${Math.round(rTert)}, ${Math.round(gTert)}, ${Math.round(bTert)})`;
    UpdateBlocks(ncolor1, ncolor2, ncolor3, ncolor4, ncolor5, ncolor6, ncolor7)

}

function UpdatePage(color1, color2, color3, color4, color5) {
    var h1s = document.querySelectorAll('h1');
    h1s.forEach(element => {
        element.style.color = color1;
    });
    var h2s = document.querySelectorAll('h2');
    h2s.forEach(element => {
        element.style.color = color2;
    });
    var h3s = document.querySelectorAll('h3');
    h3s.forEach(element => {
        element.style.color = color4;
    });
    var gradients = document.getElementsByClassName('gradient');
    for (i = 0; i < gradients.length; i++) {
        gradients[i].style.backgroundImage = `linear-gradient(to right, ${color4}, ${color5})`;
    }
}
