function initContent(r) {
    removeModal();
    $("#content").html(r);
    initTables();
}
//BLOGS
function resetFormBlog(r) {
    $("form").attr("method", "post");
    $("#image").attr("src", "");
    $("#idBlog").val(0);
    $("form").trigger("reset");
    if (typeof r !=="undefined") {
        $("input[name=id]").val(r.id);
        $("input[name=titulo]").val(r.titulo);
        $("select[name=idCategoria]").val(r.idCategoria);
        $("textarea[name=contenido]").val(r.contenido);
        $("#image").attr("src", "/Content/uploads/" + r.imagen);
        r.blog_subcategoria.forEach(function (i) {
            $("#subcategoria-" + i.idSubcategoria).prop("checked", true);
        });
        $("#submit").attr("onclick", "updateBlog()");
        $(".modal").modal("show");
    }
}
function callBlogs() {
    peticionAjax("/Admin/Blogs", "get", null, "initContent(r);");
};
function getBlog(id) {
    peticionAjax("/Admin/Blog/" + id, "get", null, "resetFormBlog(r);");
}
function insertBlog() {
    var i = 0;
    $("input[type=checkbox]:checked").each(function () {
        var name = $(this).attr("name");
        $(this).attr("name", name.replace(".", "[" + i + "]."));
        i += 1;
    });
    var formdata = new FormData($("#form")[0]);
    peticionAjax("/Admin/Blog", "post", formdata, "initContent(r);");
}
function updateBlog() {
    var i = 0;
    $("input[type=checkbox]:checked").each(function () {
        var name = $(this).attr("name");
        $(this).attr("name", name.replace(".", "[" + i + "]."));
        i += 1;
    });
    var formdata = new FormData($("#form")[0]);
    peticionAjax("/Admin/Blog", "put", formdata, "initContent(r);");
}
function deleteBlog(id) {
    peticionAjax("/Admin/Blog/"+id, "delete", null, "initContent(r);");
}
function recommendBlog(id) {
    peticionAjax("/Admin/Blog/Recommend/" + id, "put", null, "initContent(r);");
}

//EVENTOS
function resetFormEvent(r) {
    $("form").attr("method", "post");
    $("#image").attr("src", "");
    $("#idEvento").val(0);
    $("form").trigger("reset");
    if (typeof r !== "undefined") {
        r.evento_categoria.forEach(function (i) {
            $("#categoria-" + i.idCategoria).prop("checked", true);
        });
        $("input[name=titulo]").val(r.titulo);
        $("textarea[name=descripcion]").val(r.descripcion);
        $("input[name=direccion]").val(r.direccion);
        $("input[name=fechaInicio]").val(formatDate(new Date(parseInt(r.fechaInicio.substr(6)))));
        $("input[name=fechaFin]").val(formatDate(new Date(parseInt(r.fechaFin.substr(6)))));
        $("select[name=idAliado]").val(r.idAliado);
        $("select[name=idCiudad]").val(r.idCiudad);
        $("input[name=id]").val(r.id);
        $("input[name=isActivo]").val(r.isActivo);
        $("input[name=isRecommend]").val(r.isRecommend);
        $("#image").attr("src", "/Content/uploads/" + r.imagen);
        $("#submit").attr("onclick", "updateEvent()");
        $(".modal").modal("show");
    }
}
function callEventos() {
    peticionAjax("/Admin/Eventos","get", null, "initContent(r);");
}
function recommendEvent(id) {
    peticionAjax("/Admin/Evento/Recommend/"+id, "put", null, "initContent(r);");
}
function cambiarEstadoEvento(idEvento, estado) {
    var data = {
        "id": idEvento,
        "estado": estado
    };
    peticionAjax("/Admin/Evento/CambiarEstado", "post", data, "initContent(r);");
}
function getEvent(id) {
    peticionAjax("/Admin/Evento/" + id, "get", null, "resetFormEvent(r);");
}
function updateEvent() {
    var i = 0;
    $("input[type=checkbox]:checked").each(function () {
        var name = $(this).attr("name");
        $(this).attr("name", name.replace(".", "[" + i + "]."));
        i += 1;
    });
    var formData = new FormData($("#form")[0]);
    peticionAjax("/Admin/Evento", "put", formData, "initContent(r)");
}

//PROMOCIONES
function resetFormPromo(r) {
    $("form").attr("method", "post");
    $("#image").attr("src", "");
    $("#idPromocion").val(0);
    $("form").trigger("reset");
    if (typeof r !== "undefined") {
        r.promocion_categoria.forEach(function (i) {
            $("#categoria-" + i.idCategoria).prop("checked", true);
        });
        $("input[name=titulo]").val(r.titulo);
        $("textarea[name=descripcion]").val(r.descripcion);
        $("input[name=direccion]").val(r.direccion);
        $("input[name=fechaInicio]").val(formatDate(new Date(parseInt(r.fechaInicio.substr(6)))));
        $("input[name=fechaFin]").val(formatDate(new Date(parseInt(r.fechaFin.substr(6)))));
        $("select[name=idAliado]").val(r.idAliado);
        $("select[name=idCiudad]").val(r.idCiudad);
        $("input[name=id]").val(r.id);
        $("#image").attr("src", "/Content/uploads/" + r.imagen);
        $("#submit").attr("onclick", "updatePromo()");
        $(".modal").modal("show");
    }
}
function callPromociones() {
    peticionAjax("/Admin/Promociones", "get", null, "initContent(r);");
}
function recommendPromo(id) {
    peticionAjax("/Admin/Promocion/Recommend/" + id, "put", null, "initContent(r);")
}
function cambiarEstadoPromo(idPromocion, estado) {
    var data = {
        "id": idPromocion,
        "estado": estado
    };
    peticionAjax("/Admin/Promocion/CambiarEstado", "post", data, "initContent(r);");
}
function getPromo(id) {
    peticionAjax("/Admin/Promocion/" + id, "get", null, "resetFormPromo(r);")
}
function updatePromo() {
    var i = 0;
    $("input[type=checkbox]:checked").each(function () {
        var name = $(this).attr("name");
        $(this).attr("name", name.replace(".", "[" + i + "]."));
        i += 1;
    });
    var formdata = new FormData($("#form")[0]);
    peticionAjax("/Admin/Promocion", "put", formdata, "initContent(r);");
}
