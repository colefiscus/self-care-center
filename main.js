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
  splicedAffirmations: [],
  splicedMantras: [],
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
  return (Math.floor(Math.random() * array.length));
}

function selectMessageType(selection) {
  receiveMessageButton.disabled = false
  selection.checked = false
}

function startRepeatMessages(array1, array2) {
  if (array1.length === 0) {
    alert("We've run out of new messages for this type. Please feel free to look over the messages again to find one that speaks to you.")
    for (var i = 0; i < array2.length; i++)
      array1.push(array2[i])
      array2.length = 0
  }
}

function deliverMessage() {
  if (affirmationSelection.checked === true) {
    yogaFigure.classList.add('hidden')
    message.classList.remove('hidden')
    clearButton.classList.remove('hidden')
    startRepeatMessages(data.affirmations, data.splicedAffirmations)
    var i = returnRandomIndex(data.affirmations)
    message.innerText = `${data.affirmations[i]}`
    data.splicedAffirmations.push(data.affirmations[i])
    data.affirmations.splice(i, 1)
  } else if (mantraSelection.checked === true) {
      yogaFigure.classList.add('hidden')
      message.classList.remove('hidden')
      clearButton.classList.remove('hidden')
      startRepeatMessages(data.mantras, data.splicedMantras)
      var i = returnRandomIndex(data.mantras)
      message.innerText = `${data.mantras[i]}`
      data.splicedMantras.push(data.mantras[i])
      data.mantras.splice(i, 1)
  }
}

function clearMessage() {
  receiveMessageButton.disabled = true
  affirmationSelection.checked = false
  mantraSelection.checked = false
  message.classList.add('hidden')
  clearButton.classList.add('hidden')
  yogaFigure.classList.remove('hidden')
}
