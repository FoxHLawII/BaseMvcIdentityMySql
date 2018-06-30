function initForm(r) {
    //Change teext of labels
    $("#eventosCreate").click(function () {
        $("#txtCrear").html("Crear un evento");
        $("#callForm").attr("onclick", "callView('EventoForm','#container')");
        $("#txtEstados").html("Estados de eventos");
        $("#callEstados").attr("onclick", "callView('EstadoEventos','#container')");
    });
    $("#promocionesCreate").click(function () {
        $("#txtCrear").html("Crear un promocion");
        $("#callForm").attr("onclick", "callView('PromocionForm','#container')");
        $("#txtEstados").html("Estados de promociones");
        $("#callEstados").attr("onclick", "callView('EstadoPromociones','#container')");
    });
    //Show and hide textarea
    $('.answer-yes-1').click(function (e) {
        e.preventDefault(e)
        $('.__textarea-1').fadeIn('slow')
    })
    $('.answer-not-1').click(function (e) {
        e.preventDefault(e)
        $('.__textarea-1').fadeOut('slow')
    })
    $('.answer-yes-2').click(function (e) {
        e.preventDefault(e)
        $('.__textarea-2').fadeIn('slow')
    })
    $('.answer-not-2').click(function (e) {
        e.preventDefault(e)
        $('.__textarea-2').fadeOut('slow')
    })
    if (typeof r !== "undefined") {
        $("#id").val(r.data.id);
        $("#titulo").val(r.data.titulo);
        $("#direccion").val(r.data.direccion);
        $("#idSede").val(r.data.idSede);
        if (typeof r.data.evento_categoria !== "undefined") {
        r.data.evento_categoria.forEach(function (e) {
            $("input[value="+e.id+"]").prop("checked", true);
        });

        }
        if (typeof r.data.promocion_categoria !== "undefined") {
        r.data.promocion_categoria.forEach(function (e) {
            $("input[value="+e.id+"]").prop("checked", true);
        });

        }
        $("#fechaInicio").val(r.data.fechaInicio);
        $("#fechaFin").val(r.data.fechaFin);
        $("#promocionesAsociadas").val(r.data.promocionesAsociadas);
        $("input[name=isPresenciaMerck]").val(r.data.isPresenciaMerck);
        $("#patrocinadores").val(r.data.patrocinadores);
        $("#descripcion").val(r.data.descripcion)
        }
    }
function callView(tipo, container) {
    var url = '/Aliado/'+tipo;
    peticionAjax(url, "get", null, function (r) {
        $(container).html(r);
    });
}
function responseAddEvento(r) {
    if (r.code == 1) {
        $("#sendRequestText").html("¡La <span>Solicitud</span> fue Enviada con Éxito!");
        $("#showStatusButton").html("Ver estado de mis eventos");
        $("#showStatusButton").attr("onclick", "callView('EstadoEventos','#container')");
        $("#modalSolicitud").modal("show");
    } else if (r.code == 2) {
        alert(r.message);
        console.log(r.message);
    } else if (r.code==3) {
        alert(r.message);
        console.log(r.message);
    }
}
function getEvento(id) {
    peticionAjax("/Aliado/Evento/" + id, "get", null, function (r) {
        callView("EventoForm", '#container');
        initForm(r);
    });
}
function AddEvento() {
    var data = {
        "titulo": $("#tituloEvento").val(),
        "direccion": $("#direccionEvento").val(),
        "idSede": $("#idSedeEvento").val(),
        "evento_categoria": [],
        "fechainicio": $("#fechaInicioEvento").val(),
        "fechaFin": $("#fechaFinEvento").val(),
        "promocionesAsociadas": $("#promocionesAsociadasEvento").val(),
        "isPresenciaMerck": $("input[name=isPresenciaMerck]:checked").val(),
        "patrocinadores": $("#patrocinadoresEvento").val(),
        "descripcion": $("#descripcionEvento").val()
    }
    $("input[name=idCategoria]:checked").each(function (e) {
        data.evento_categoria.push({ "idCategoria":$(this).val() });
    });
    peticionAjax("/Aliado/Evento", "post", data, "responseAddEvento(r);");
}
function responseAddPromocion(r) {
    if (r.code == 1) {
        $("#sendRequestText").html("¡La <span>Solicitud</span> fue Enviada con Éxito!");
        $("#showStatusButton").html("Ver estado de mis promociones");
        $("#showStatusButton").attr("onclick", "callView('EstadoPromociones','#container');");
        $("#modalSolicitud").modal("toggle");
    } else if (r.code == 2) {
        alert(r.message);
        console.log(r.message);
    } else if (r.code == 3) {
        alert(r.message);
        console.log(r.message);
    }
}
function addPromocion(){
    var data = {
        "titulo": $("#tituloPromocion").val(),
        "direccion": $("#direccionPromocion").val(),
        "idSede": $("#idSedePromocion").val(),
        "promocion_categoria": [],
        "fechaFin": $("#fechaFinPromocion").val(),
        "promocionesAsociadas": $("#promocionesAsociadasPromocion").val(),
        "isPresenciaMerck": $("input[name=isPresenciaMerck]:checked").val(),
        "patrocinadores": $("#patrocinadoresPromocion").val(),
        "descripcion": $("#descripcionPromocion").val()
    }
    $("input[name=idCategoria]:checked").each(function (e) {
        data.promocion_categoria.push({ "idCategoria": $(this).val() });
    });
    console.log(data);
    peticionAjax("/Aliado/Promocion", "post", data, "responseAddPromocion(r);");
}
