//console.log('Hello, World!')
const choices = ['rock', 'paper', 'scissors']
const getComputerChoice = () => {
    const idx = Math.floor(Math.random()*choices.length);
    return choices[idx]
}
const playRound = (playerChoice, compChoice) => {
    const p = playerChoice.toLowerCase()
    const c = compChoice.toLowerCase()
    if (p === c) {
        return 'Tie!'
    }
    if (p === 'rock') {
        if (c === 'paper') {
            return 'You Lose! Paper beats Rock'
        } else if (c === 'scissors') {
            return 'You Win! Rock beats Scissors'
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'You Lose! Scissors beats Paper'
        } else if (c === 'rock') {
            return 'You Win! Paper beats Rock'
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'You Lose! Rock beats Scissors'
        } else if (c === 'paper') {
            return 'You Win! Scissors beats Paper'
        }
    }
}

const game = () => {
    let playerWins = 0
    let compWins = 0
    let i = 0
    while (i < 5) {
        const playerChoice = prompt('Select rock paper or scissors...')
        const compChoice = getComputerChoice()
        const res = playRound(playerChoice, compChoice)
        console.log(res)
        if (res.includes('Win')) {
            playerWins += 1
            ++i
        } else if (res.includes('Lose')) {
            compWins += 1
            ++i
        }
    }
    if (playerWins > compWins) {
        console.log('Player Wins!')
    } else if (playerWins < compWins) {
        console.log('Computer Wins!')
    }
}

game()
