//& Seçiciler
const yourChoiceDiv = document.getElementById('your-choice')
const pcChoiceDiv = document.getElementById('pc-choice')
const selectionArticle = document.querySelector('.selection')

//& Değişkenler

let userSelection;
const userSelectImg = document.createElement('img');

// console.log(selectionArticle)

selectionArticle.addEventListener('click',(e)=>{
    // console.log(e.target.id)
    userSelection = e.target.id
    // console.log(userSelection)

    if(userSelection){
        userSelectImg.src =`./assets/${userSelection}.png`;
        userSelectImg.id = `you`;
        yourChoiceDiv.appendChild(userSelectImg)
    }



})


















































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
