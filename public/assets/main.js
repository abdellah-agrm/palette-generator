function generateRandomColor(boxId) {
  $.get('/generateColor', function (data) {
    const colorBox = $('#color-box-' + boxId);
    const hexCode = $('#hex-' + boxId);
    colorBox.css('background-color', data.color);
    hexCode.text(data.color);
  });
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$('#regenerate-button').click(function (e) {
  e.preventDefault();
  for (let i = 1; i <= 4; i++) {
    generateRandomColor(i);
  }
});

$(document).ready(function () {
  for (let i = 1; i <= 4; i++) {
    generateRandomColor(i);
  }
});

$('.copy-hex').click(function () {
const hexCode = $(this).text();
const tempInput = $('<input>');
$('body').append(tempInput);
tempInput.val(hexCode).select();
document.execCommand('copy');
tempInput.remove();
});