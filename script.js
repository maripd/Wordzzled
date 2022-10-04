///////////////////////////////////////////////////////////Global scope

let lifeCount = 5
const player = null
const computer = null

let userInputArray = []

const headerText = document.getElementById('header-text')
const submitBtn = document.querySelector('#submit-btn')
const playGameBtn = document.querySelector('#playgame-btn')
const inputContainer = document.querySelector('.input-container')

const wordArray = ['cat', 'dog', 'rat', 'fox']
let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]

/////////////////////////////////////////////////////////////Functions

const getUserInput = () => {
  headerText.innerText = randomWord
  const letterInput = document.querySelector('#letter-input')
  let userInputValue = letterInput.value

  if (randomWord.includes(userInputValue) && userInputValue.length > 0) {
    userInputArray.push(userInputValue)
    const pElement = document.createElement('p')
    pElement.innerText = userInputValue
    document.querySelector('.input-container').append(pElement)
    let joinLetters = userInputArray.join('')
    letterInput.value = ''
    console.log(joinLetters)
  }
}
getUserInput()

const playGame = () => {
  location.reload()
}

/////////////////////////////////////////////////////////////Event Listeners
submitBtn.addEventListener('click', getUserInput)
playGameBtn.addEventListener('click', playGame)
