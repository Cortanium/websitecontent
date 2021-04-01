var element = document.getElementById("follow");
var main = document.getElementById("main");
var mainElement = main.getBoundingClientRect();
var x = 0;
var y = 0;
var z = 0;
var choose1x = 0;
var choose2x = 0;
var fader = {

timer : null,
direction : null,
cycle : null,
animate : function () {
let para = element,
  opacity = fader.cycle / 10;
para.style.opacity = opacity;

// Fade in
if (fader.direction) { 
fader.cycle++;
if (fader.cycle < 11) { fader.timer = setTimeout(fader.animate, 50); }
}

// Fade out
else {
fader.cycle--;
if (fader.cycle > -1) { fader.timer = setTimeout(fader.animate, 50); }
}
},
go : function (show) {
if (fader.timer != null) { clearTimeout(fader.timer); }
fader.direction = show;
fader.cycle = show ? 0 : 10 ; 
fader.timer = setTimeout(fader.animate, 10);
}
};

function faderScript(){
  fader.go(0);
}
function getCoords(){ //Generate a random number from 0-100 cut out the middle. Get 0-left side of image, right-
  choose1x=(Math.random()*(mainElement.left/window.innerWidth))*80 ;
  choose2x=((Math.random()*(mainElement.left/window.innerWidth))+(mainElement.right/window.innerWidth))*80 ;
 // console.log("1x: " + choose1x);
 // console.log("2x: " + choose2x);
 // console.log(window.innerWidth);

  if(Math.round(Math.random())) //50%
  x=choose1x;
  else
  x=choose2x;
  x=Math.round(x);
  y=(Math.random()*100)-5;
  y=Math.round(y);
  z=Math.random()*90;
  z=Math.round(z) - 45;

  if(window.innerWidth <= 720) {//top and bottom
  x=Math.random()*60;
  x=Math.round(x);
  choose1x=(Math.random()*5)-15;
  choose2x=((Math.random()*5)+95);
  if(Math.round(Math.random())) //50%
  y=choose1x;
  else
  y=choose2x;
  y=Math.round(y);
  z=Math.random()*45;
  z=Math.round(z) - 20;
  }

  if(window.innerWidth <= 500) {//just bottom
  x=Math.random()*50;
  x=Math.round(x);
  y = ((Math.random()*5)+95);
  y = Math.round(y);
  }
  if(window.innerWidth <= 340) { //tiny
  x=Math.random()*20;
  x=Math.round(x);
  }
  element.style.transform='rotate('+z+'deg)';
  element.style.left=x+'%';
  element.style.top=y+'%';
}
(function(){
    var f = function(){
    getCoords();
    fader.go(1);
    setTimeout(faderScript,8000);
}
window.setInterval(f, 10000);
f();
})();
