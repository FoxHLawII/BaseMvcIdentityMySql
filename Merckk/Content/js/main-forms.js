
var form = $("#owner-form");
//form.validate({
//    errorPlacement: function errorPlacement(error, element) { element.before(error); },
//    rules: {
//        confirm: {
//            equalTo: "#password"
//        }
//    }
//});
form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    //onStepChanging: function (event, currentIndex, newIndex) {
    //    form.validate().settings.ignore = ":disabled,:hidden";
    //    return form.valid();
    //},
    //onFinishing: function (event, currentIndex) {
    //    form.validate().settings.ignore = ":disabled";
    //    return form.valid();
    //},
    onFinished: function (event, currentIndex) {
        form.submit();
    }
});
$(".check").on("click", function () {
    var urlGet = url + "/Blog";
    $(this).children("input").prop("checked", true);
});
