/////////////////////////////////////////////////////////// Global Scope
let lifeCount = 5
let userInputArray = []

const headerText = document.getElementById('header-text')
const submitBtn = document.querySelector('#submit-btn')
const playGameBtn = document.querySelector('#playgame-btn')
const inputContainer = document.querySelector('.input-container')
const letterInput = document.querySelector('#letter-input')
headerText.innerText = 'WORDZZLED'
const wordArray = [
  'wavelength',
  'epidermal',
  'aadvark',
  'onomatopoeia',
  'anemone',
  'quinoa',
  'pharaoh',
  'jazz',
  'buzz',
  'quiz',
  'quilt',
  'afflux',
  'surreptitious',
  'Euouae',
  'interdisciplinary',
  'winter',
  'autumn',
  'ball',
  'shovel',
  'hammer'
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
  let userInputValue = letterInput.value
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
        letterInput.value = ''
      }
    }
  } else {
    lifeCount -= 1
    headerText.innerText = 'Try again'
    console.log('does not exist', userInputValue)
    if (lifeCount < 1) {
      headerText.innerText = 'Game over'
      letterInput.value = ''
      for (let i = 0; i < randomWord.length; i++)
        letterBoxes[i].innerText = randomWord[i]
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
