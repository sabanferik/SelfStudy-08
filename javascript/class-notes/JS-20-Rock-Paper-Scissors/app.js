//& Seçiciler
const yourChoiceDiv = document.getElementById('your-choice')
const pcChoiceDiv = document.getElementById('pc-choice')
const selectionArticle = document.querySelector('.selection')

const messagePar = document.querySelector('.message')

//&Score
const scoreCardSection = document.querySelector('.score-card')
const yourScoreSpan =document.getElementById('your-score')
const pcScoreSpan = document.getElementById('pc-score')
const domTopScore = document.getElementById('top-score')

//& Değişkenler

let userSelection;
let pcRandom;
let pcArr = [];
const userSelectImg = document.createElement('img');
const pcSelectImg = document.createElement('img');

//& Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//& Modal

const modalCardSection = document.querySelector('.modal-card');
const finalMessagePar = document.getElementById('final-message');
const playAgainButton = document.getElementById('play-again');


// console.log(selectionArticle)


//& Event listeners

selectionArticle.addEventListener('click',(e)=>{
    // console.log(e.target.id)
    userSelection = e.target.id
    // console.log(userSelection)

    if(userSelection){
        userSelectImg.src =`./assets/${userSelection}.png`;
        userSelectImg.id = `you`;
        yourChoiceDiv.appendChild(userSelectImg)
    }
    createPcSelection()


})

//& Functions

const createPcSelection = ()=>{
    pcArr = ['rock', 'paper', 'scissor', 'rock', 'paper', 'scissor'];
    // pcRandom = pcArr[Math.trunc(Math.random() * 6)]
    pcRandom = 'scissor'
    // console.log(pcRandom)
    pcSelectImg.src = `./assets/${pcRandom}.png`;
    pcSelectImg.id = `pcs`;
    pcChoiceDiv.appendChild(pcSelectImg)

    calculateResult()
}

const calculateResult = () =>{
    // console.log(userSelection)
    // console.log(pcRandom)

    if(userSelection === pcRandom){
        draw()
    }else{
        if(userSelection === 'rock'){
            pcRandom === 'paper' ?  youLost(userSelection) : youWin()
        }else if(userSelection === 'paper'){
            pcRandom === 'scissor'? youLost(userSelection) : youWin()
        }else if(userSelection === 'scissor'){
            pcRandom === 'rock' ? youLost(userSelection) : youWin()
        }
    }
    if(pcScore === '10' || yourScore === '10'){
        openModal
    }

}


const draw = () => {
    messagePar.textContent = "it's a draw";
    messagePar.style.backgroundColor = YELLOW;
    scoreCardSection.style.color = YELLOW;
}

const youLost = (userSelection)=>{
    console.log(userSelection)
    messagePar.textContent = "You Lost!☹️";
    messagePar.style.backgroundColor = RED;
    scoreCardSection.style.color = RED;
    pcScoreSpan.textContent++
    // console.log(document.getElementById('you').getAttribute('src')) // attribute kontrol
    document.getElementById('you').setAttribute('src', `./assets/${userSelection}l.png`)
}

const youWin = ()=>{
    messagePar.textContent = "You Win!🎉";
    messagePar.style.backgroundColor = GREEN;
    scoreCardSection.style.color = GREEN;
    yourScoreSpan.textContent++
    document.getElementById('pcs').setAttribute('src', `./assets/${pcRandom}l.png`)
}

const openModal = () => {
    modalCardSection.classList.add('show');
}








































/* let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')


rock.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"/>`
})
paper.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/paper.png"/>`
})
scissor.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/scissor.png"/>`
})
 */
