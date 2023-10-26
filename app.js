//console.log('Hello, World!')
const choices = ['rock', 'paper', 'scissors']
const getComputerChoice = () => {
    const idx = Math.floor(Math.random()*choices.length);
    return choices[idx]
}
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
