(function() {
  'use strict';

  $(document).ready(init)

  function init() {
    $('#toText').on('click', toText);
    $('#toVisual').on('click', toVisual);

    function toText() {
      $('#visual').addClass('hide');
      $('#toText').addClass('hide');
      $('#text').removeClass('hide');
      $('#toVisual').removeClass('hide');
    }

    function toVisual() {
      $('#text').addClass('hide');
      $('#toVisual').addClass('hide');
      $('#visual').removeClass('hide');
      $('#toText').removeClass('hide');
    }
  }

}());
