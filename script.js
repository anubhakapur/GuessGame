let input=document.getElementById('input');
let btn=document.getElementById('btn');
let info=document.getElementById('info');
let guess=document.getElementById('guesses');
let count=0;
let ans=Math.floor(Math.random()*100)+1;
function guessGame(){
    if(input.value==''||input.value<1||input.value>100){
        info.innerHTML="Please guess a number between 1 and 100";
        info.style.color='red';
    }
    else{
        count++;
        guess.innerHTML=`Number of guesses:${count}`;
        if(input.value<ans){
            info.innerHTML=`You guessed too low!`;
            info.style.color='red';
        }
        else if(input.value>ans){
            info.innerHTML=`You guessed too high!`;
            info.style.color='red';
        }
        else{
            info.innerHTML=`Congratulations,Your guess was correct ie ${ans}`;
            info.style.color='green';
            btn.disabled=true;
            setTimeout(()=>{
                count=0;
                let ans=Math.floor(Math.random()*100)+1;
                info.innerHTML="";
                input.value="";
                guess.innerHTML=`Number of guesses:${count}`;
                btn.disabled=false;
            },2000);
        }
}
}
btn.addEventListener('click',guessGame)
input.addEventListener('keypress',(event)=>{
    if(event.key=="Enter"){
        guessGame();
    }
})