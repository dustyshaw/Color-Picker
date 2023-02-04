
var base = document.querySelector("input");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color4 = document.getElementById("color4");
var color5 = document.getElementById("color5");
base.addEventListener("change", function() {
    var color = base.value;
    var hexCode = color.replace('#','');
    console.log(hexCode);
    var r = parseInt(hexCode.substring(0,2), 16);
    var g = parseInt(hexCode.substring(2,4), 16);
    var b = parseInt(hexCode.substring(4,6), 16);
    color1.style.backgroundColor = base.value;
    var rComp = 255 - r;
    var gComp = 255 - g;
    var bComp = 255 - b;
    color2.style.backgroundColor=`rgb(${r*.5},${g*.5},${b*.5},)`;
    color5.style.backgroundColor=`rgb(${rComp}, ${gComp}, ${bComp})`;
    color4.style.backgroundColor=`rgb(${rComp*1.5}, ${gComp*1.5}, ${bComp*1.5})`;
});
