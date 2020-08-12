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
