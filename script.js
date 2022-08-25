var answer = Math.floor(Math.random()*10) + 1;

var a = 0;

function play(){

   for(var i = 3; i>0 ; i--){
    a += 1;
    var user_guess = prompt("Guess between 1 and 10");
    if(user_guess > answer){
        alert(`Correct answer in smaller\nYou have ${i-1} chances left`);
    }else if(user_guess < answer){
        alert(`Coreect answer is greater\nYou have ${i-1} chances left`);
    }else if( user_guess == answer){
        alert("You Win");
        break;
    }
   }
   if( a == 3){
    alert("You lose!");
    document.getElementById('my_btn').disabled = true;
    document.getElementById('my_btn2').style="display:block";
    document.getElementById('my_btn2').innerHTML = "Restart";
   }
}
