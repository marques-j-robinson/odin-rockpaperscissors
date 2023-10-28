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
    const resultEl = document.querySelector('.result')
    document.querySelectorAll('.play').forEach(el => {
        const playerChoice = el.innerText
        el.addEventListener('click', () => {
            resultEl.innerHTML = resultEl.innerHTML + `<li>${playRound(playerChoice, getComputerChoice())}</li>`
        })
    })
}

game()
