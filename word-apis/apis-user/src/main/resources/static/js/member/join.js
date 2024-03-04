import {
   togglePasswordVisibility,
   onlyKorean,
   onlyAlphaNumber
} from '/js/common/form-helper.js';

document.addEventListener('DOMContentLoaded', function() {
   togglePasswordVisibility();
   onlyKorean();
   onlyAlphaNumber();
});