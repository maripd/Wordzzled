const wordArray = ['cat', 'dog', 'rat']
let lifeCount = 0
const player = null
const computer = null

let userInputArray = []

const submitBtn = document.querySelector('#submit-btn')
const inputContainer = document.querySelector('.input-container')

const getRandomNumber = () => {
  let randomNum = Math.floor(Math.random() * wordArray.length)
  console.log(randomNum)
} //getRandomNumber is working

//create a function to combine letter strings together to make a word use concat()

//create a function to get userInputValue
const getUserInput = () => {
  //get the user input value
  let userInputValue = document.querySelector('#letter-input').value
  userInputArray.push(userInputValue)
  // if user input value is a string
  if (typeof userInputValue === 'string') {
    const pElement = document.createElement('p')
    pElement.innerText = userInputValue
    document.querySelector('.input-container').append(pElement)
    document.getElementById('letter-input').value = null
    console.log(userInputArray)
  }
  return
}
getUserInput()

submitBtn.addEventListener('click', getUserInput)
