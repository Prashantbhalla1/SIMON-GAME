let colo=["green","red","yellow","blue"];
let randomcolor="";
let gamepattern=[];
var started = false;
let userpattern=[]

var level = 0;


$(document).keypress(function() {
  if (!started) {

    $("h1").text("Level - " + level);
    rand();
    started = true;
  }
});


$(".btn").click(function(){

usercolor=$(this).attr("id");
userpattern.push(usercolor);
playsounds(usercolor);
animatebut(usercolor);
let r=userpattern.length;
r=r-1;
checka(r);


})



function rand(){
    userpattern=[];
level++;
$("h1").text("Level - "+level);
let randomno=Math.random()
randomno=(randomno*4);
randomno=Math.floor(randomno);

randomcolor=colo[randomno];
gamepattern.push(randomcolor);

$("#"+randomcolor).fadeOut(100).fadeIn(100);
playsounds(randomcolor);




}

function playsounds(key){


let au=new Audio(key+".mp3");
au.play();




}
function animatebut(key){


$("#"+key).addClass("press");
setTimeout(() => {
    $("#"+key).removeClass("press");
},100);




}
function checka(currentLevel) {

    if (gamepattern[currentLevel] === userpattern[currentLevel]) {

      console.log("success");

      if (userpattern.length === gamepattern.length){
        setTimeout(rand, 1000);
      }

    } else {

      console.log("wrong");

      playsounds("wrong");
      $("body").addClass("gameover");
     
      setTimeout(function () {
        $("body").removeClass("gameover");
      }, 200);

      $("h1").text("Game Over, SCORE = "+ (level-1 ));
      setTimeout(() => {
        $("h1").text("PRESS ANY KEY TO RESTART" );
      }, 5000);
      startagain();
    }

}
function startagain(){

level=0;
gamepattern=[];
started=false;


}