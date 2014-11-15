(function() {
  'use strict';

  $(document).ready(init)

  function init() {
    $('#toTextLink').on('click', toggleText);
    $('#toText').on('click', toText);
    $('#toVisual').on('click', toVisual);

    function toText() {
      $('#visual').addClass('hide');
      $('#toText').addClass('hide');
      $('#text').removeClass('hide');
      $('#toVisual').removeClass('hide');
    }

    function toggleText() {
      if ($('#toTextItem').hasClass('active')) {
        $('#text').addClass('hide');
        $('#toTextItem').removeClass('active');
        $('#visual').removeClass('hide');
      } else {
        $('#visual').addClass('hide');
        $('#toTextItem').addClass('active');
        $('#text').removeClass('hide');
      }
    }

    function toVisual() {
      $('#text').addClass('hide');
      $('#toVisual').addClass('hide');
      $('#visual').removeClass('hide');
      $('#toText').removeClass('hide');
    }
  }

}());
