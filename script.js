const data = [
  'Teal',
  'SkyBlue',
  'DarkSeaGreen',
  'Purple',
  'LightPink',
  'Crimson'
];
const defaultColor = 'Silver';

var sel = document.getElementById("color-select");
var box = document.getElementById("box");

data.forEach((item) => {
  let node = document.createElement("option");
  sel.append(node);
  node.setAttribute("value", `${item}`);
  node.innerHTML = `${item}`;


});

sel.onchange = function() {
  var selectedVal = sel.options[sel.selectedIndex].text;
  if( selectedVal === "یک رنگ را انتخاب کنید"){
    setSilver()
  }else{
    box.style.background = selectedVal;
  }
};

setTimeout(function(){ 
  setSilver()
}, 1000);

function setSilver(){
  box.style.background = 'Silver'
}