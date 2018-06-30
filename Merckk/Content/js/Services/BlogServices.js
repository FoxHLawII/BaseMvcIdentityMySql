$(function () {
    $(".callFiltro").on("click", function () {
        var urlGet = url + "/Blog";
        $(this).children("input").prop("checked", true);
        var idCategoria = $("input[name=categoria]:checked").val();
        var idSubcategoria = $("input[name=subcategoria]:checked").val();
        var page = $("input[name=page]:checked").val();
        if (typeof idCategoria !== "undefined") {
            urlGet += "/Filtro/" + idCategoria;
        }
        if (typeof idSubcategoria !== "undefined") {
            urlGet += "/" + idSubcategoria;
        }
        if (page) {
            urlGet += "?page=" + page;
        }
        console.log(url);
        $.get(urlGet, function (r) {
            $("#sectionBlogEntradas").html(r);
        });
    });
});
function RatingBlog(idBlog, rating) {
    $.ajax({
        type: 'post',
        url: url + '/api/Blog/Calificar',
        dataType: "json",
        data: {
            "idBlog": idBlog,
            "idPersona": 1,
            "calificacion": rating
        },
        success: function (data) {
            alert("Blog calificado");
        }
    })
}

// Rating Calificar
var options = {
    emoji: 'U+2B50',
    count: 5,
    fontSize: 25,
    inputName: 'rating',
    onUpdate: function (rating) {
        var idBlog = $("input[name=idBlog]").val();
        RatingBlog(idBlog, rating);
    }
}
$('#rating').emojiRating(options);

function callBlogs(page) {
    $("#blogPaginacion-" + page).parent().addClass("disabled");
    $.ajax({
        url: "/Blog/" + page,
        type: "get",
        success: function (r) {
            $("#sectionBlogEntradas").html(r);
            $("#blogPaginacion-" + page).prop("checked", true);
            $("#blogPaginacion-" + page).parent().addClass("active");
        }
    });
};
