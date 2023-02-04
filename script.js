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
    var rComp = 255 - r;
    var gComp = 255 - g;
    var bComp = 255 - b;
    color2.style.backgroundColor = color;
    color3.style.backgroundColor = `rgb(${r * 1.5}, ${g * 1.5}, ${b * 1.5})`;
    color1.style.backgroundColor = `rgb(${(r * .8)}, ${(g * .8)}, ${(b * .8)})`;
    color5.style.backgroundColor = `rgb(${rComp}, ${gComp}, ${bComp})`;
    color4.style.backgroundColor = `rgb(${rComp * 1.5}, ${gComp * 1.5}, ${bComp * 1.5})`;
    ncolor1 = `rgb(${(r * .8)}, ${(g * .8)}, ${(b * .8)})`;
    ncolor2 = color;
    ncolor3 = `rgb(${r * 1.5}, ${g * 1.5}, ${b * 1.5})`;
    ncolor4 = `rgb(${rComp * 1.5}, ${gComp * 1.5}, ${bComp * 1.5})`;
    ncolor5 = `rgb(${rComp}, ${gComp}, ${bComp})`;
    UpdatePage(ncolor1, ncolor2, ncolor3, ncolor4, ncolor5);
    color1.innerText = `rgb(${Math.round((r * .8))}, ${Math.round((g * .8))}, ${Math.round((b * .8))})`;
});

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
        element.style.color = color3;
    });
    var radios = document.getElementsByClassName('radio');
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            //radios[i].style.accentColor = color3;
        }
    }
    var buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.style.backgroundImage = `linear-gradient(to right, ${color4}, ${color5})`;
        element.style.color = 'white';
    });

}
