'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var onPopupEscPress = function (evt, escape) {
    if (evt.keyCode === ESC_KEYCODE) {
      escape();
    }
  }

  var onPopupEnterPress = function (evt, enter) {
    if (evt.keyCode === ENTER_KEYCODE) {
      enter();
    }
  }


  var randomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  window.utils = {
    onPopupEscPress: onPopupEscPress,
    onPopupEnterPress: onPopupEnterPress,
    randomElement: randomElement
  }
})();
