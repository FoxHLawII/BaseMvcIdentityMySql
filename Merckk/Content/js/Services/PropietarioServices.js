
function callViewP(tipo) {
    var url = '/Propietario/' + tipo;
    $.ajax({
        url: url,
        type: 'GET',
        success: function (r) {
            $('#pills-content').html(r)
        }
    })
}
function showName() {
    $("#txtNombre").removeClass("hidden");
}
function updateProfile() {
    var formData = new FormData($("#formPerfil")[0]);
    $.ajax({
        url: "/Propietario/Persona",
        type: "put",
        data: formData,
        success: function (r) {
            $("#pills-content").html(r);
        },
        error: function (r) {
            console.log(r);
        },
        cache: false,
        contentType: false,
        processData: false
    });
}
function updatePassword() {

}
