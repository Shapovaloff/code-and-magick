'use strict';

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden')

var similarListElement = setupSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item')

var nameArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var subNameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor= ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var onPupupEscPres = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPupupEscPres);
}

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPupupEscPres);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
})

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
})

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя персонажа не может содержать менее 2 символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Максимальная длина имени персонажа — 25 символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле')
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя персонажа не может содержать менее 2 символов')
  } else {
    target.setCustomValidity('');
  }
});


var randomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

var setupWizard = setup.querySelector('.setup-wizard');
var setupFireball = setup.querySelector('.setup-fireball-wrap')
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = randomElement(coatColor);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = randomElement(eyesColor);
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.backgroundColor = randomElement(fireballColor);
});

var dialogHandle = setup.querySelector('.upload');

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  }

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    }

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  }

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        dialogHandle.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandle.addEventListener('click', onClickPreventDefault);
    }
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
})



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


