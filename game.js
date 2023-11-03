// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')

function numberReset(){
    let num1 = Math.ceil(Math.random() * 100)
    let num2 = Math.ceil(Math.random() * 100)

    number1.textContent = num1
    number2.textContent = num2
    console.log(score)
    timer.textContent = 5
    resetCount+=1
    if(resetCount == 15){
        localStorage.setItem('score',score)
        window.location.href = "./gameover.html"
    }
}
let score = 0
let resetCount = 0
// Iteration 3: Make the options button functional

const greaterThan = document.getElementById('greater-than') 
const equalTo = document.getElementById('equal-to') 
const lowerThan = document.getElementById('lesser-than') 

greaterThan.onclick = () =>{
    if(number1.textContent  >
        number2.textContent){
        score+=1
    }
    numberReset()
}

lowerThan.onclick = () =>{
    if(number1.textContent  <
        number2.textContent){
        score+=1
    }
    numberReset()
}

equalTo.onclick = () =>{
    if(number1.textContent  ==
        number2.textContent){
        score+=1
    }
    numberReset()
}

// Iteration 4: Build a timer for the game
const timer = document.getElementById('timer')
timer.textContent = 5

const timeDecrement  = setInterval(() => {
    timer.textContent -=1
    if(timer.textContent == 0){
        numberReset()
        timer.textContent = 5
    }
}, 1000);

