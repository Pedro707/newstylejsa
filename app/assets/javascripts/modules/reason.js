'use strict';

/* Reason */
const Reason = function () {
  const $reasons = document.querySelectorAll('.js-reason');
  $reasons.forEach(function ($el, index) {
    $el.addEventListener('change', function () {
      toggleOtherDetail($el);
    });
    toggleOtherDetail($el);
  });

  function toggleOtherDetail (el) {
    if (el.parentNode.nextElementSibling) {
      if (el.value === 'other' || el.value === 'OTHER') {
        el.parentNode.nextElementSibling.classList.remove('govuk-checkboxes__conditional--hidden');
      } else {
        el.parentNode.nextElementSibling.classList.add('govuk-checkboxes__conditional--hidden');
      }
    }
  }
};

export default {
  init: Reason
};
