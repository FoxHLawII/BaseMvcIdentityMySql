//const url = "http://merck.imaginamos.tech";
const url = "http://localhost:63016";
//const url = "https://localhost:44365";

$(document).ajaxStart(function () {
    $('.preloader').show();
});
$(document).ajaxComplete(function () {
    $('.preloader').hide();
});
