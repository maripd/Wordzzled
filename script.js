/////////////////////////////////////////////////////////// Global Scope
const headerText = document.getElementById('header-text')
const submitBtn = document.querySelector('#submit-btn')
const playGameBtn = document.querySelector('#playgame-btn')
const inputContainer = document.querySelector('.input-container')
const letterInput = document.querySelector('#letter-input')
let lifeCountText = document.querySelector('.lifecount')
const nightBtn = document.querySelector('.night-button')

let lifeCount = 5
let userInputArray = []
headerText.innerText = 'WORDZZLED'
const wordArray = [
  'loop',
  'function',
  'class',
  'object',
  'method',
  'array',
  'if',
  'flexbox',
  'logic',
  'switch',
  'grid',
  'markdown',
  'homework',
  'events',
  'fork',
  'clone',
  'branch',
  'pull',
  'command',
  'directory'
]

let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]
console.log(randomWord)
////////////////////////////////////////////////////////////////// functions
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
  let userInputValue = letterInput.value.toLowerCase()
  let letterBoxes = document.querySelectorAll('.letter-box')
  let letterIndices = []

  if (randomWord.includes(userInputValue) === true) {
    //if answer is right empty headertext
    headerText.innerText = ''
    //given input letter, find index of matching letter of randomWord
    //given the index, show letter in the corresponding box index

    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === userInputValue) {
        letterBoxes[i].innerText = userInputValue
        userInputArray.push(userInputValue)
        letterInput.value = ''
      }
      if (randomWord.length === userInputArray.length) {
        headerText.innerText = 'You win!'
        letterInput.disabled = true
      }
    }
  } else {
    lifeCount -= 1
    lifeCountText.innerText = lifeCount
    headerText.innerText = 'Try again'
    console.log('does not exist', userInputValue)
    if (lifeCount < 1) {
      headerText.innerText = 'Game over'
      letterInput.disabled = true
      for (let i = 0; i < randomWord.length; i++)
        letterBoxes[i].innerText = randomWord[i]
    }
  }
  letterInput.value = ''
}

const playGame = () => {
  location.reload()
}

const clickNightMode = () => {
  const bodyEl = document.body
  const lifeImg = document.querySelector('.life-img')
  bodyEl.classList.toggle('night-mode')
  headerText.classList.toggle('night-mode')
  letterInput.classList.toggle('night-mode')
  submitBtn.classList.toggle('night-mode')
  nightBtn.classList.toggle('night-mode')
  lifeImg.classList.toggle('night-mode')
}

const goToHomepage = () => {
  window.location.href = 'index.html'
}
/////////////////////////////////////////////////////////////Event Listeners
submitBtn.addEventListener('click', checkLetter)
playGameBtn.addEventListener('click', playGame)
nightBtn.addEventListener('click', clickNightMode)
headerText.addEventListener('click', goToHomepage)
