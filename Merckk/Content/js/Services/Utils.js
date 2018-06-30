function peticionAjax(urlMethod, type, data, callback) {
    var d;
    var cT;
    if (data instanceof FormData) {
        d = data;
        cT = false;
    } else if (data!==null) {
        d = JSON.stringify(data);
        cT = "application/json; charset=utf-8";
    }
    $.ajax({
        url: url + urlMethod,
        type: type,
        data: d,
        success: function (r) {
            callback(r);
        },
        error: function (r) {
            console.log(r);
            eval(callback);
        },
        cache: false,
        contentType: cT,
        processData: false,
    });
}
function error(msj) {
    removeModal();
    $.toast({
        text: msj,
        heading: '<b>BAD</b>',
        showHideTransition: 'slide',
        allowToastClose: true,
        hideAfter: 3000,
        loader: true,
        loaderBg: '#FFF',
        stack: 5,
        position: 'bottom-left',
        bgColor: '#FE2E2E',
        textColor: '#FFFFFF',
        textAlign: 'left',
        icon: 'error',
    })
}
function success(msj) {
    removeModal();
    $.toast({
        text: msj,
        heading: '<b>OK</b>',
        showHideTransition: 'slide',
        allowToastClose: true,
        hideAfter: 3000,
        loader: true,
        loaderBg: '#FFF',
        stack: 5,
        position: 'bottom-left',
        bgColor: '#2EFE2E',
        textColor: '#FFF',
        textAlign: 'left',
        icon: 'success',
    })
}
//Formatea /Date(123)/ A yyy-mm-dd hh:mm:ss
function formatDate(fecha) {
    var day = fecha.getDate();
    var month = fecha.getMonth() + 1; //January is 0!
    var year = fecha.getFullYear();
    var hh = fecha.getHours();
    var mm = fecha.getMinutes();
    var ss = fecha.getSeconds();
    if (day < 10) { day = '0' + day };
    if (month < 10) { month = '0' + month };
    fecha = year + '-' + month + '-' + day + " " + hh + ":" + mm + ":" + ss;
    return fecha;
}
//Remueve un modal eliminado por el DOM
function removeModal() {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
}

function selectCheck(e) {
    $(e).children("input").prop("checked", true);
}
