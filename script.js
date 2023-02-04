var base = document.getElementById("base");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var color4 = document.getElementById("color4");
var color5 = document.getElementById("color5");
base.addEventListener("change", function () {
    var color = base.value;
    var hexCode = color.replace('#', '');
    var r = parseInt(hexCode.substring(0, 2), 16);
    var g = parseInt(hexCode.substring(2, 4), 16);
    var b = parseInt(hexCode.substring(4, 6), 16);

    ComputeComplimentary(r, g, b);
    ComputeTertiary(r, g, b);
});

function ComputeComplimentary(r, g, b) {
    var rComp = 255 - r;
    var gComp = 255 - g;
    var bComp = 255 - b;
    var ncolor1 = `rgb(${Math.round(r * .8)}, ${Math.round(g * .8)}, ${Math.round(b * .8)})`;
    var ncolor2 = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    var ncolor3 = `rgb(${Math.round(r * 1.5)}, ${Math.round(g * 1.5)}, ${Math.round(b * 1.5)})`;
    var ncolor4 = `rgb(${Math.round(rComp * 1.5)}, ${Math.round(gComp * 1.5)}, ${Math.round(bComp * 1.5)})`;
    var ncolor5 = `rgb(${Math.round(rComp)}, ${Math.round(gComp)}, ${Math.round(bComp)})`;
    color2.style.backgroundColor = ncolor2;
    color3.style.backgroundColor = ncolor3;
    color1.style.backgroundColor = ncolor1;
    color5.style.backgroundColor = ncolor5;
    color4.style.backgroundColor = ncolor4;

    UpdatePage(ncolor1, ncolor2, ncolor3, ncolor4, ncolor5);
    color1.innerText = ncolor1;
    color2.innerText = ncolor2;
    color3.innerText = ncolor3;
    color4.innerText = ncolor4;
    color5.innerText = ncolor5;
}

function ComputeTertiary(r, g, b) {
    var rTert = 255 - r;
    var gTert = 255 - g;
    var bTert = 255 - b;
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
