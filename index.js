var buttoncount = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttoncount; i++)
{
var key= document.querySelectorAll(".drum")[i].innerHTML;
 document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
  var content=this.innerHTML;
  makesound(content);
});
}

  document.addEventListener("keypress",function(event)
  {
    makesound(event.key);
  } );


function makesound(key)
{
switch (key) {
  case "w":
    var audio1 = new Audio("sounds/crash.mp3");
    audio1.play();
    break;
  case "a":
    var audio2 = new Audio("sounds/kick-bass.mp3");
    audio2.play();
    break;
  case "s":
    var audio3 = new Audio("sounds/snare.mp3");
    audio3.play();
    break;
  case "d":
    var audio4 = new Audio("sounds/tom-1.mp3");
    audio4.play();
    break;
  case "z":
    var audio5 = new Audio("sounds/tom-2.mp3");
    audio5.play();
    break;
  case "x":
    var audio6 = new Audio("sounds/tom-3.mp3");
    audio6.play();
    break;
  case "c":
    var audio7 = new Audio("sounds/tom-4.mp3");
    audio7.play();
    break;
}}
