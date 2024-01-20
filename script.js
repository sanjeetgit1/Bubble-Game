var timer = 60;
var score = 0;
var hitrt = 0;

function increasescore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}




function gitNewhit(){
     hitrt = Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent =hitrt;
} 
 function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timetravel").innerHTML = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtn").innerHTML = `<h1> Game over</h1>`;
        }

    },1000)
 }
 function markebubble(){
    var clutter = "";

for(var i = 1; i <=96; i++){
    var rt =Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rt}</div>`;
}
document.querySelector("#pbtn").innerHTML = clutter;
}
document.querySelector("#pbtn").addEventListener("click",function(dets){
   var clickednum = Number(dets.target.textContent)
    if(clickednum === hitrt){
        increasescore();
        markebubble();
        gitNewhit();
    }
});


gitNewhit();
 runtimer();
markebubble();


