/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Accessible Modal
$(document).ready(function() {
  var findModal = function(elem) {

    var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');

    var firstTabbable = tabbable.first();
    var lastTabbable = tabbable.last();
    // set focus on first tabbable element
    // NOTE:  If this doesn't exist, then the user is able to tab through all of the page
    //        page elements that sit behind the modal dialog...
    //        Work around being that the 'Continue' button is on focus, with tabbing
    //        through not being permissiable
    firstTabbable.focus();

    // send last tabbable back to first
    lastTabbable.on('keydown', function (e) {
       if ((e.which === 9 && !e.shiftKey)) {
           e.preventDefault();
           firstTabbable.focus();
       }
    });

    // send last shift tabbable back to last
    firstTabbable.on('keydown', function (e) {
        if ((e.which === 9 && e.shiftKey)) {
            e.preventDefault();
            lastTabbable.focus();
        }
    });

    // allow esc to close Modal
    elem.on('keyup', function(e){
      if (e.keyCode === 27 ) {
        elem.hide();
        $('.govuk-modal-overlay').hide();
        $('html').removeClass("noscroll");
      };
    });
  };

  // show modal and overlay and lock scroll
  // $('.show-modal').click(function(e){
  //   e.preventDefault();
  //
  //   $('.govuk-modal').show();
  //   $('.govuk-modal-overlay').show();
  //   $('html').addClass("noscroll");
  //   findModal($('.govuk-modal'));
  // });

  if(document.querySelector(".govuk-modal")){
    setTimeout(function(){
      $('.govuk-modal').show();
      $('.govuk-modal-overlay').show();
      $('html').addClass("noscroll");
      findModal($('.govuk-modal'));
    }, 5000); // timed delay in nano-seconds (set to 5 seconds)
  }

  //hide modal and overlay
  $('.close-modal').click(function(e){
    e.preventDefault();

    $('.govuk-modal').hide();
    $('.govuk-modal-overlay').hide();
    $('html').removeClass("noscroll");
  });

});