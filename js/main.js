(function() {
  'use strict';

  $(document).ready(init)

  function init() {
    $('#toTextLink').on('click', toggleText);
    $('#toText').on('click', toText);
    $('#toVisual').on('click', toVisual);

    function toggleText() {
      if ($('#toTextItem').hasClass('active')) {
        toVisual();
      } else {
        toText();
      }
    }

    function toText() {
      $('#visual').addClass('hide');
      $('#toTextItem').addClass('active');
      $('#toText').addClass('hide');
      $('#toVisual').removeClass('hide');
      $('#text').removeClass('hide');
    }

    function toVisual() {
      $('#text').addClass('hide');
      $('#toTextItem').removeClass('active');
      $('#toVisual').addClass('hide');
      $('#toText').removeClass('hide');
      $('#visual').removeClass('hide');
    }
  }

}());
