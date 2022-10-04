///////////////////////////////////////////////////////////Global scope

let lifeCount = 0
const player = null
const computer = null

let userInputArray = []
console.log(userInputArray.join(''))

const submitBtn = document.querySelector('#submit-btn')
const inputContainer = document.querySelector('.input-container')

const wordArray = ['cat', 'dog', 'rat', 'porcupine', 'fox']

let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]
console.log(randomWord)

/////////////////////////////////////////////////////////////Functions

const getUserInput = () => {
  const letterInput = document.querySelector('#letter-input')
  let userInputValue = letterInput.value

  console.log(userInputValue.length)
  if (typeof userInputValue === 'string' && userInputValue.length > 0) {
    const pElement = document.createElement('p')
    pElement.innerText = userInputValue
    userInputArray.push(userInputValue)
    document.querySelector('.input-container').append(pElement)
    document.getElementById('letter-input').value = null
    console.log(userInputArray)
  }
}

/////////////////////////////////////////////////////////////Event Listeners
submitBtn.addEventListener('click', getUserInput)
