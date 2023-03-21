
let getComputerChoice = () =>{
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors'
    }
}

let round = (playerSelection,computerSelection)=>{
    console.log('Player Chose : ' + playerSelection + ' And Computer Chose : ' + computerSelection)
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection)
    return 0;
    if (playerSelection === 'rock' && computerSelection ==='scissors')
    return 1;
    else if (playerSelection === 'paper' && computerSelection ==='rock')
    return 1;
    else if (playerSelection ==='scissors' && computerSelection==='paper')
    return 1;

    return 2;
}


const buttons = document.querySelectorAll('.choice');


buttons.forEach(button => {
    button.addEventListener('click', e=>{
        let roundOfGame = round(button.textContent,getComputerChoice());
        const userSpan = document.querySelector('#user-score');
        const computerSpan = document.querySelector('#computer-score');

        if (roundOfGame === 1)
        {
            userSpan.textContent = (Number(userSpan.textContent)+1).toString();
        }
        else if (roundOfGame === 2)
        {   
            computerSpan.textContent = (Number(computerSpan.textContent)+1).toString();
        }
        else
            return;


        if ( Number(computerSpan.textContent) === 5 )
        {
            console.log('Computer Wins ! ');
        }
        if (Number(userSpan.textContent) === 5)
        {
            console.log('You Win ! ');

        }
        
        e.stopPropagation()
    })
});

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', e => {
    const userSpan = document.querySelector('#user-score');
    const computerSpan = document.querySelector('#computer-score');
    computerSpan.textContent = "0";
    userSpan.textContent = "0";
    e.stopPropagation();
});