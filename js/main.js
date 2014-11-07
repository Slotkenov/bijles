(function() {
  'use strict';

  $(document).ready(init)

  function init() {
    $('#toText').on('click', toText);
    $('#toVisual').on('click', toVisual);

    function toText() {
      $('#image').addClass('hide');
      $('#text').removeClass('hide');
    }

    function toVisual() {
      $('#text').addClass('hide');
      $('#image').removeClass('hide');
    }
  }

}());
