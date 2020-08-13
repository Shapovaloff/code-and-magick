'use strict';

(function () {
  var URL = {
    load: 'https://javascript.pages.academy/code-and-magick/data',
    save: 'https://javascript.pages.academy/code-and-magick'
  };
  var STATUS = {
    CODE_OK: 200
  };
  var timeout = 10000;


  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', URL.load);

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS.CODE_OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Проверьте интернет соединение');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = timeout;

    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS.CODE_OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Проверьте интернет соединение');
    });

    xhr.open('POST', URL.save);

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = timeout;
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
