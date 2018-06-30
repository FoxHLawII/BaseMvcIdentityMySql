function filtroEventosYPromociones(element) {
    element.children("input").prop("checked", true);
    var char = "?";
    var urlGet = url + "/EventosPromociones/Filtro";
    var tipo = $("input[name=eventosYPromo]:checked").val();
    var orden = $("input[name=filtroEventoYPromo]:checked").val();
    var direccion = $("input[name=direccion]").val();
    var idCategoria = $("input[name=eventosYPromoTipo]:checked").val();
    var idCiudad = $("select[name=idCiudad]").val();
    if (typeof tipo !== "undefined") {
        urlGet += "/" + tipo;
    }
    if (typeof orden !== "undefined") {
        urlGet += "/" + orden;
    }
    if (typeof direccion !== "undefined" && direccion !== "") {
        urlGet += char + "direccion=" + direccion;
        char = "&";
    }
    if (typeof idCategoria !== "undefined") {
        urlGet += char + "categoria=" + idCategoria;
        char = "&";
    }
    if (typeof idCiudad !== "undefined" && idCiudad !== "") {
        urlGet += char + "ciudad=" + idCiudad;
        char = "&";
    }
    console.log(urlGet);
    $.ajax({
        type: "get",
        url: urlGet,
        success: function (r) {
            $("#sectionEventosOPromos").html(r);
        },
        failure: function (r) {
            console.log("error");
        }
    });
};
$(".callFiltroEventoOCategoria").on("change", function (e) {
    filtroEventosYPromociones($(this));
});

function getEvento(id) {
    $.ajax({
        url: "/EventosPromociones/Evento/" + id,
        type: "get",
        success: function (r) {
            $("#modalDetalles").empty();
            $("#modalDetalles").html(r);
        },
        complete: function () {
            $("#modalDetalleEP").modal("show");
        },
        error: function (r) {
            console.log(r);
        }
    });
};

function getPromocion(id) {
    $.ajax({
        url: "/EventosPromociones/Promocion/" + id,
        type: "get",
        success: function (r) {
            $("#modalDetalles").empty();
            $("#modalDetalles").html(r);
        },
        complete: function () {
            $("#modalDetalleEP").modal("show");
        },
        error: function (r) {
            console.log(r);
        }
    });
};
var fun = (r) => {
    console.log(r);
    if (r.code == 1) {
        alert(r.message);
    } else {
        alert(r.message);
    }
}

function meInteresa(tipo, idEvento) { //1 evento 2 promociones
    var data = { "tipo": tipo, "idTipo": idEvento };
    peticionAjax("/EventosPromociones/MeInteresa", "post", data, "fun(r)");
}

$(".showMap").click(function () {
    $(".map-intern-ep").removeClass("display-none");
    $(".hideCositas").addClass("display-none");
    $("#linkBack").removeClass("display-none").css("display", "block");
    $(".__filtro-perro").css("display", "none");
});
$("#linkBack").click(function () {
    $(".map-intern-ep").addClass("display-none");
    $(".hideCositas").removeClass("display-none");
    $("#linkBack").addClass("display-none").css("display", "none");
    $(".__filtro-perro").css("display", "block");
});
