'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');

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
})();
