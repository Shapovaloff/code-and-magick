'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
  var countOfWizards = 4;

  var similarListElement = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item')

  // var nameArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var subNameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColor= ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  var setupWizard = setup.querySelector('.setup-wizard');
  var setupFireball = setup.querySelector('.setup-fireball-wrap')
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill =  window.utils.randomElement(coatColor);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.utils.randomElement(eyesColor);
  });

  setupFireball.addEventListener('click', function () {
    setupFireball.style.backgroundColor = window.utils.randomElement(fireballColor);
  });


  // var wizards = [
  //   {
  //     name: window.utils.randomElement(nameArr) + ' ' + window.utils.randomElement(subNameArr),
  //     coatColor: window.utils.randomElement(coatColor),
  //     eyesColor: window.utils.randomElement(eyesColor)
  //   },
  //   {
  //     name: window.utils.randomElement(nameArr) + ' ' + window.utils.randomElement(subNameArr),
  //     coatColor: window.utils.randomElement(coatColor),
  //     eyesColor: window.utils.randomElement(eyesColor)
  //   },
  //   {
  //     name: window.utils.randomElement(nameArr) + ' ' + window.utils.randomElement(subNameArr),
  //     coatColor: window.utils.randomElement(coatColor),
  //     eyesColor: window.utils.randomElement(eyesColor)
  //   },
  //   {
  //     name: window.utils.randomElement(nameArr) + ' ' + window.utils.randomElement(subNameArr),
  //     coatColor: window.utils.randomElement(coatColor),
  //     eyesColor: window.utils.randomElement(eyesColor)
  //   }
  // ]

  var loadWizards = function (wizard) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < countOfWizards; i++) {
      fragment.appendChild(renderWizard(wizard[i]))
    }
    similarListElement.appendChild(fragment);
  }

  window.backend.load(loadWizards, alert)

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }


})();


