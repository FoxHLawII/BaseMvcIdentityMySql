
function checkCategoria(e) {
    $(e).children("input").prop("checked", true);
    var id = $("input[name=idCategoria]:checked").val();
    $.ajax({
        url: "api/Mascota/Razas/" + id,
        type: "get",
        success: function (r) {
            var text = "<option value>Raza...</option>";
            r.forEach(function (e) {
                text += "<option value='"+e.id+"'>"+e.nombre+"</option>";
            });
            $("#idRaza").html(text);
        },
        error: function (r) {
            console.log(r);
        }
    });
};
