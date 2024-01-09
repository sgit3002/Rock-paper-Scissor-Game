let userScore = 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector ("#user-score");
const compScorePara = document.querySelector ("#comp-score");



const  GenCompChoice = () => {
    const option = ["rock" , "paper" , "scissor"];
    const ranIdx = Math.floor (Math.random () *3);
    return option[ranIdx];
}

const showWinner = (Userwin,userChoice,compChoice) => {
    if (Userwin) {
        userScore++;
        userScorePara.innerText = userScore++;
       console.log ("You Win.")
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        
        compScore++;
        compScorePara.innerText = compScore;
        console.log ("You Loss.")
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}


const playgame = (userChoice) => {
    console.log ("User Choice: " , userChoice );

    const compChoice = GenCompChoice ();
    console.log ("Computer Choice: " , compChoice );
    
    if (userChoice == compChoice) {
        //Draw Game
        console.log ("Game was Draw");
        msg.innerText = "Game Draw";
        msg.style.backgroundColor = "#081b31";
    }
    else {
        let Userwin = true;
        if (userChoice === "rock") {
            Userwin = compChoice === "paper" ?false: true;
        }
        else if (userChoice === "paper") {
            Userwin = compChoice === "scissor" ?false: true;
        }
        else {
            Userwin = compChoice === "rock" ?false: true;
            
        }
        showWinner(Userwin , userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        //  console.log ("Choice was clicked" , userChoice);
         playgame(userChoice);
    })
})