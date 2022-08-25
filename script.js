var msg1 = document.getElementById("message1");

var answer = Math.floor(Math.random()*10) + 1;



function play(){

   for(var i = 0; i<3 ; i++){
    var user_guess = prompt("Guess between 1 and 10");
    if(user_guess > answer){
        alert("Correct answer in smaller");
    }else if(user_guess < answer){
        alert("Coreect answer is greater");
    }else if( user_guess == answer){
        alert("You Win");
        break;
    }
   }
   if( i == 3){
    alert("You lose!");
    document.getElementById('my_btn').disabled = true;
   }
}