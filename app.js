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
    let playerscore = 0
    let compscore = 0
    const playerscoreEl = document.querySelector('.playerscore')
    const compscoreEl = document.querySelector('.compscore')
    const resultEl = document.querySelector('.result')
    const gameoverEl = document.querySelector('.gameover')

    const setGameOver = () => {
        if (playerscore === 5) {
            gameoverEl.innerText = 'Player Wins!'
        }
        if (compscore === 5) {
            gameoverEl.innerText = 'Computer Wins!'
        }
        document.querySelectorAll('.play').forEach(el => {
            el.style.display = 'none'
        })
    }

    document.querySelectorAll('.play').forEach(el => {
        const playerChoice = el.innerText
        el.addEventListener('click', () => {
            const txt = playRound(playerChoice, getComputerChoice())
            if (txt.includes('Win')) {
                ++playerscore
                playerscoreEl.innerText = playerscore
            }
            if (txt.includes('Lose')) {
                ++compscore
                compscoreEl.innerText = compscore
            }
            resultEl.innerHTML = resultEl.innerHTML + `<li>${txt}</li>`
            if (playerscore === 5 || compscore === 5) {
                setGameOver()
            }
        })
    })
}

game()
