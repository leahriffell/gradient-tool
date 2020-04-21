var colorPicker = document.getElementsByClassName("gradient-settings__picker");
var hex1Picker = document.querySelector("#hex-1");
var hex2Picker = document.querySelector("#hex-2");
var hex1Value = document.getElementById("hex-1").value;
var hex2Value = document.getElementById("hex-2").value;
var hex1Display = document.getElementById("hex-1-display");
var hex2Display = document.getElementById("hex-2-display");
var hexDisplay = docment.querySelectorAll(".hex-display");
var hex1DefaultValue = "#B118C8";
var hex2DefaultValue = "#63D2FF";
var gradientPreview = document.querySelector(".gradient-preview");
var h1 = document.querySelector("h1");

window.addEventListener("load", init, false);

function init() {
  hex1Value = hex1DefaultValue;
  hex2Value = hex2DefaultValue;
  hex1Display.textContent = hex1Value;
  hex2Display.textContent = hex2Value;
  hex1Picker.value = hex1DefaultValue;
  hex2Picker.value = hex2DefaultValue
  console.log(hex1Value);
  console.log(hex2Value);
  gradientPreview.style.background = hex1Value;
}

for(var i = 0; i < colorPicker.length; i++) {
    colorPicker[i].addEventListener('change', function(){
        gradientPreview.style.backgroundColor = this.value;
        hex1Display.textContent = this.value;
    }, false);
}

// change label so that it's just one label not different ids
// function update color .. change label. chagne teh corresponding gradient position
