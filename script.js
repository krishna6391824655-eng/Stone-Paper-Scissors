let userScore = 0;
let computerScore = 0;



const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorepara=document.querySelector("#your-score");
const compScore=document.querySelector("#computer-score");

const genCompchoice =()=>{
  const options=["rock","paper","scissors"]
 const randomIdx=Math.floor(Math.random()*3);  
  return options[randomIdx];
}
const drawGame =()=>{
  console.log("game was draw")
  msg.innerHTML="GAME WAS DRAW PLAY AGAIN"
  msg.style.backgroundcolor="rgb(10, 14, 51)"
}
const showwinner=(userwin,userchoice,CompChoice)=>{
if(userwin){

  console.log("you win!!")
  msg.innerHTML='YOU WIN !! '
  msg.style.backgroundColor="green";
}
else{
  compScore++;
  compScore.innerText=compScore;
  console.log("you lose")
  msg.innerHTML="YOU LOSE"
    msg.style.backgroundColor="red";
}
}

const playGame=(userchoice)=>{
console.log("userchoice =",userchoice);
 const CompChoice =genCompchoice();
console.log("comp Choice =", CompChoice );
if (userchoice === CompChoice){
 drawGame();
}
else{
  let userwin =true;
  if(userchoice==="rock"){
    //scissor,paper

    userwin =CompChoice==="paper" ? false : true;
  }
  else if(userchoice==="paper"){
    //rock,scissor
    userwin =CompChoice==="scissors"? false : true;
  }
  else {
//rock,scissors
userwin =CompChoice==="rock"? false : true;
  }
  showwinner(userwin ,userchoice,CompChoice);

}

}
choices.forEach((choice)=>{

    choice.addEventListener("click",()=>
    {
        const userchoice = choice.getAttribute("id")
    
      playGame(userchoice);  
    })
}
)