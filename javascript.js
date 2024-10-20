
/*function getRandom() {
//    return Math.floor(Math.random() * 3);
*/

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    //console.log(num);
    if(num === 0) {
        //console.log('paper');
        return 'paper';
    } else if(num === 1) {
        //console.log('rock');
        return 'rock';
    } else {
        //console.log('scissors');
        return 'scissors';
    }
}
function getHumanChoice() {
    if (humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors') {
      //  console.log('correctentry')
        return humanChoice;
    } else {
        console.log('Incorrect entry');
     }
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === 'rock' && computerSelection === 'scissors') {
        humanScore++;
        return win;
    } else if (humanSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return lose;
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
        humanScore++;
        return win;
    } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return lose;
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        humanScore++;
        return win;
    } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return lose;
    } else {
        return tie;
    }
}

let humanScore = parseInt(0);
let computerScore = parseInt(0);
let win = 'You win';
let lose = 'You lose';
let tie = 'It is a tie';

for(let i = 0; i < 5; i++) {
    let humanSelection = prompt('Select paper, rock, or scissors: ')
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection))
    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
    }