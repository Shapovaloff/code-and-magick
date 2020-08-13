'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var popupEscPress = function (evt) {
    window.utils.onPopupEscPress(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPress);
  }

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPress);
  }

  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, alert);
    evt.preventDefault();
  });

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.utils.onPopupEnterPress(evt, openPopup)
  })

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.utils.onPopupEnterPress(evt, closePopup)
  })
})();
