
let getComputerChoice = function(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors'
    }
}

let round = (playerSelection,computerSelection)=>{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection)
    return "Its A Draw";
    if (playerSelection === 'rock' && computerSelection ==='scissors')
    return 'You Win !';
    else if (playerSelection === 'paper' && computerSelection ==='rock')
    return 'You Win !';
    else if (playerSelection ==='scissors' && computerSelection==='paper')
    return 'You Win !';

    return 'You Lose!';
}

let game = ()=>{
    let scoreHuman = 0;
    let scoreComputer = 0;

    for (let i =0 ; i < 5 ; i++)
    {
        let input = prompt("Choose Rock/Paper/Scissors");
        let compDec = getComputerChoice();
        console.log("Computer Dec : " + compDec +"User Dec : " + input)
        
        let result = round(input,compDec);
        if (result === 'You Win !')
            scoreHuman++;
        else if ( result === 'You Lose!')
        scoreComputer++;
    }

    if (scoreComputer === scoreHuman){
    console.log('It\'s a draw!');
    return;
    }

    scoreHuman >= scoreComputer ?  console.log('You Won it all !') : console.log('You Lost!');

}


game()
