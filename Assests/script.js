// Variables 
var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Your out of time! Game Over!';
    // or...
    alert("You're out of time!");
  }
}, 1000);