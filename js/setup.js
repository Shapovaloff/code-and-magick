'use strict';

var setup = document.querySelector('.setup').classList.remove('hidden');
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden')
var similarListElement = setupSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item')

var nameArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var subNameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var randomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

var wizards = [
  {
    name: randomElement(nameArr) + ' ' + randomElement(subNameArr),
    coatColor: randomElement(coatColor),
    eyesColor: randomElement(eyesColor)
  },
  {
    name: randomElement(nameArr) + ' ' + randomElement(subNameArr),
    coatColor: randomElement(coatColor),
    eyesColor: randomElement(eyesColor)
  },
  {
    name: randomElement(nameArr) + ' ' + randomElement(subNameArr),
    coatColor: randomElement(coatColor),
    eyesColor: randomElement(eyesColor)
  },
  {
    name: randomElement(nameArr) + ' ' + randomElement(subNameArr),
    coatColor: randomElement(coatColor),
    eyesColor: randomElement(eyesColor)
  }
]

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]))
}

similarListElement.appendChild(fragment);


