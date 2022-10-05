let lifeCount = 5
let userInputArray = []

const headerText = document.getElementById('header-text')
const submitBtn = document.querySelector('#submit-btn')
const playGameBtn = document.querySelector('#playgame-btn')
const inputContainer = document.querySelector('.input-container')
const letterInput = document.querySelector('#letter-input')

const wordArray = ['cat', 'aadvark', 'mice', 'fox']
let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]
console.log(randomWord)
/////////////////////////////////////////////////////////// Global Scope
const createBoxes = () => {
  const wordBox = document.querySelector('#word-box')
  for (let i = 0; i < randomWord.length; i++) {
    const div = document.createElement('div')
    div.className = 'letter-box'
    wordBox.append(div)
  }
}
createBoxes()

const checkLetter = () => {
  let userInputValue = letterInput.value
  let letterBoxes = document.querySelectorAll('.letter-box')
  let letterIndices = []

  if (randomWord.includes(userInputValue) === true) {
    //if answer is right empty headertext
    headerText.innerText = ''
    //given input letter, find index of matching letter of randomWord
    //console.log(randomWord.indexOf(userInputValue))
    //given the index, show letter in the corresponding box index
    //const letterIndex = randomWord.indexOf(userInputValue)
    //letterBoxes[letterIndex].innerText = userInputValue

    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === userInputValue) {
        letterBoxes[i].innerText = userInputValue
        userInputArray.push(userInputValue)
        letterInput.value = ''
      }
      if (randomWord.length === userInputArray.length) {
        headerText.innerText = 'You win!'
        letterInput.value = ''
      }
    }
  } else {
    lifeCount -= 1
    headerText.innerText = 'Try again'
    console.log('does not exist', userInputValue)
    if (lifeCount < 1) {
      headerText.innerText = 'Game over'
    }
  }
  letterInput.value = ''
}

const playGame = () => {
  location.reload()
}
/////////////////////////////////////////////////////////////Event Listeners
submitBtn.addEventListener('click', checkLetter)
playGameBtn.addEventListener('click', playGame)
