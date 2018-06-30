function readURL(input) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var divImage = $("#image");
        console.log(divImage);
        divImage.attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
}
