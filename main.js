var data = {
  affirmations: [
      'I forgive myself and set myself free.',
      'I believe I can be all that I want to be.',
      'I am in the process of becoming the best version of myself.',
      'I have the freedom & power to create the life I desire.',
      'I choose to be kind to myself and love myself unconditionally.',
      'My possibilities are endless.',
      'I am worthy of my dreams.',
      'I am enough.',
      'I deserve to be healthy and feel good.',
      'I am full of energy and vitality and my mind is calm and peaceful.',
      'Every day I am getting healthier and stronger.',
      'I honor my body by trusting the signals that it sends me.',
      'I manifest perfect health by making smart choices.',
    ],

  mantras: [
      'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
      'Don’t let yesterday take up too much of today.',
      'Every day is a second chance.',
      'Tell the truth and love everyone.',
      'I am free from sadness.',
      'I am enough.',
      'In the beginning it is you, in the middle it is you and in the end it is you.',
      'I love myself.',
      'I am present now.',
      'Inhale the future, exhale the past.',
      'This too shall pass.',
      'Yesterday is not today.',
      'The only constant is change.',
      'Onward and upward.',
      'I am the sky, the rest is weather.',
    ],
}

// QUERY SELECTORS 👇👇👇👇👇👇
var affirmationSelection = document.querySelector('.radio-affirmation')
var mantraSelection = document.querySelector('.radio-mantra')
var receiveMessageButton = document.querySelector('.receive-message-button')

var outputBox = document.querySelector('.output-box')
var message = document.querySelector('.message')
var clearButton = document.querySelector('.clear-button')
var yogaFigure = document.querySelector('.yoga-figure')

// EVENT HANDLERS 👇👇👇👇👇👇

affirmationSelection.addEventListener('click', function() {
  selectMessageType(mantraSelection)
})
mantraSelection.addEventListener('click', function() {
  selectMessageType(affirmationSelection)
})
receiveMessageButton.addEventListener('click', deliverMessage)
clearButton.addEventListener('click', clearMessage)

// FUNCTIONS 👇👇👇👇👇👇
function returnRandomIndex(array) {
  return array[(Math.floor(Math.random() * array.length))];
}

function selectMessageType(selection) {
  selection.checked = false
}

// function deliverMessage() {
//   if (affirmationSelection.checked === true || mantraSelection.checked === true)
//     yogaFigure.classList.add('hidden')
//     message.classList.remove('hidden')
//     clearButton.classList.remove('hidden')
//     message.innerText = `
//       ${returnRandomIndex(data.affirmations)}
//     `
// }

function deliverMessage() {
  if (affirmationSelection.checked === true) {
    yogaFigure.classList.add('hidden')
    message.classList.remove('hidden')
    clearButton.classList.remove('hidden')
    message.innerText = `
      ${returnRandomIndex(data.affirmations)}
    `
  } else if (mantraSelection.checked === true) {
    yogaFigure.classList.add('hidden')
    message.classList.remove('hidden')
    clearButton.classList.remove('hidden')
    message.innerText = `
      ${returnRandomIndex(data.mantras)}
    `
  }
}

function clearMessage() {
    affirmationSelection.checked = false
    mantraSelection.checked = false
    message.classList.add('hidden')
    clearButton.classList.add('hidden')
    yogaFigure.classList.remove('hidden')
}
