let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genComputerChoice = ()=>{
    // rock , paper , scissor
    const options = ["rock" , "paper", "scissors"];
    let randIdx = Math.floor(Math.random()*3); // *3 matlab 3 ka under print kara ga and .. math floor = point mea number nahi dega 

    return options[randIdx];
};

const drawgame =()=>{
    console.log("Game was Draw")
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "#081b31"

}

const showWinner =(userWin , userChoice, compChoise) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoise}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText =`You lose. ${compChoise} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}
const playGame = (userChoice)=> {
    // console.log("user" , userChoice);
    const compChoise = genComputerChoice();
    // console.log("comp" , compChoise);

    if(userChoice === compChoise){
        // Draw
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            //paper scissor
           userWin  = compChoise === "paper"  ? false: true; // ? if and else
        }else if(userChoice === "paper"){
            // rock , scissors
          userWin =  compChoise ==="scissors" ? false :true;
        }
        else{
            // rock , paper comp ka pass and user ka pass scissors hai

          userWin =  compChoise === "rock" ? false :true;
        }

        showWinner(userWin, userChoice, compChoise);
    }
}

choices.forEach((choice) =>{ // ek ek ko choice(( chose ))kar raha hai choices
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        // console.log("clicke", userChoice);
        playGame(userChoice)
    });
});