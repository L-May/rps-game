
//let humanScore = parseInt(0);
//let computerScore = parseInt(0);

const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const scoreText = document.getElementById("scoreText");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");


rock.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
  });
paper.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
  });
scissors.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
  });

  function playRound(humanSelection, computerChoice) {
    let roundWinner;
    if (humanSelection === 'rock' && computerChoice === 'scissors') {
        pScore.dataset.score = parseInt(pScore.dataset.score) + 1;
        pScore.textContent = "Player: " + pScore.dataset.score;
        roundWinner = 'player';
    } else if (humanSelection === 'rock' && computerChoice === 'paper') {
        cScore.dataset.score = parseInt(cScore.dataset.score) + 1;
        cScore.textContent = "Computer: " + cScore.dataset.score;
        roundWinner = 'computer';
    } else if (humanSelection === 'paper' && computerChoice === 'rock') {
        pScore.dataset.score = parseInt(pScore.dataset.score) + 1;
        pScore.textContent = "Player: " + pScore.dataset.score;
        roundWinner = 'player';
    } else if (humanSelection === 'paper' && computerChoice === 'scissors') {
        cScore.dataset.score = parseInt(cScore.dataset.score) + 1;
        cScore.textContent = "Computer: " + cScore.dataset.score;
        roundWinner = 'computer';
    } else if (humanSelection === 'scissors' && computerChoice === 'paper') {
        pScore.dataset.score = parseInt(pScore.dataset.score) + 1;
        pScore.textContent = "Player: " + pScore.dataset.score;
        roundWinner = 'player';
    } else if (humanSelection === 'scissors' && computerChoice === 'rock') {
        cScore.dataset.score = parseInt(cScore.dataset.score) + 1;
        cScore.textContent = "Computer: " + cScore.dataset.score;
        roundWinner = 'computer';
    } if (humanSelection === computerChoice) {
        roundWinner = 'tie';
    }
    
    console.log("Computer: " + computerChoice + ", Player: " + humanSelection + ", Winner: " + roundWinner + ".");
  updateScoreText(roundWinner, humanSelection, computerChoice);
}

  function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    //console.log(num);
    if(computerChoice === 0) {
        //console.log('paper');
        return 'paper';
    } else if(computerChoice === 1) {
        //console.log('rock');
        return 'rock';
    } else {
        //console.log('scissors');
        return 'scissors';
    }
}

  function updateScoreText(winner, humanSelection, computerChoice) {
    var txtMessage = '';
    if (winner === 'player') {
        scoreText.textContent = 'You win! Selection: ' + humanSelection + ' beats ' + computerChoice + '!';
        return;
    }
    if (winner === 'computer') {
        scoreText.textContent = 'You lose! Selection: ' + computerChoice + ' beats ' + humanSelection + '!';
        return;
    }
    scoreText.textContent = 'Your selection ties!';
  }

//for(let i = 0; i < 5; i++) {
    //let humanSelection = prompt('Select paper, rock, or scissors: ')
    //const computerChoice = getComputerChoice();
    //console.log(playRound(humanSelection, computerChoice))
    //console.log("Your score: " + humanScore);
    //console.log("Computer's score: " + computerScore);
    //}