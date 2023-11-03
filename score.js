// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem('score')

const scoreBoard = document.getElementById('score-board')

window.onload = () =>{
    scoreBoard.textContent = score
}

const playAgain = document.getElementById('play-again-button')

playAgain.onclick = () =>{
    window.location.href = "./game.html"
}