 // sizeWindow

function sizeWindow() {
    let widthW = $(window).width()

    if (widthW <= 908 ) {
       $("#navegacion").removeClass("col-md-8")
       $(".main-nav").removeClass("justify-content-end")
       $("#navegacion").addClass("col-md-12")
       $(".main-nav").addClass("justify-content-center")
    }else if (widthW >= 908 ) {
        $("#navegacion").addClass("col-md-8")
        $(".main-nav").addClass("justify-content-end")
        $("#navegacion").removeClass("col-md-12")
        $(".main-nav").removeClass("justify-content-center")  
     }  
}

// Read Upload Image
function readURL(input) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var divImage = $("#image-load");
        console.log(divImage);
        divImage.attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
}

// Style

$(document).ready(function(){

    //General


    // styles
    $('.owner-profile .__ul .__li:nth-child(1)').click(function (e) {
        e.preventDefault()
        $(this).css('font-weight', 'bold')
        $('.owner-profile .__ul .__li:nth-child(2)').css('font-weight', 'normal')
    })
    $('.owner-profile .__ul .__li:nth-child(2)').click(function (e) {
        e.preventDefault()
        $(this).css('font-weight', 'bold')
        $('.owner-profile .__ul .__li:nth-child(1)').css('font-weight', 'normal')
    })

    // Show and hide pass fiel
    $('.pass-owner').click(function (e) {
        e.preventDefault()
        $('.confirmation-pass-owner').removeClass('display-none')
    })
    $('.pass-ally').click(function (e) {
        e.preventDefault()
        $('.confirmation-pass-ally').removeClass('display-none')
    })

    sizeWindow()

    // Displacement initial blog

    $('.ancla').click(function(e){
        e.preventDefault()
        let starAncla = '#' + $(this).data('ancla')
        $('html,body').animate(
        {
         scrollTop: $(starAncla).offset().top
        }, 900
      )
    })

    $('.ancla-e-y-p').click(function (e) {
        e.preventDefault()
        let starAncla = '#' + $(this).data('ancla')
        $('html,body').animate(
            {
                scrollTop: $(starAncla).offset().top
            }, 900
        )
    })

    $('.inicio').click(function(e){
        e.preventDefault()
        let starAncla = '#' + $(this).data('ancla')
        $('html,body').animate(
        {
         scrollTop: $(starAncla).offset().top
        }, 900
      )
    })

    // Displacement home

    $('.displacement-result').click(function(e){
        e.preventDefault()
        let starAncla = '#' + $(this).data('ancla')
        $('html,body').animate(
        {
         scrollTop: $(starAncla).offset().top
        }, 500
      )
    })

    // Hamburguer menu

    $('#nav-icon2').click(function(){
		$(this).toggleClass('open')
    })
    $('#closeNav').click(function(){
		$('#nav-icon2').toggleClass('open')
	})

    // Disabled subfilters Blog

    $(".main-tag").click(function(){
        $('[type="radio"]').removeAttr("disabled")
        $('.__label-1').removeClass('disabled')
        $('.__label-2').removeClass('disabled')
        $('.__label-3').removeClass('disabled')
    })

    // Show and hide specialist filter

    $( ".muestra-oculta" ).click(function() {
        $( ".home-specialist-filter" ).toggle( "slow" )
      })

    //Menu deplegable

    $("#nav-icon2").click(function(e){
        $("#myNav").css("height", "100%")
    })
    $("#closeNav").click(function(e){
        $("#myNav").css("height", "0%")
    })

    // Estilos del Tag menú
    $(".tag-cachorro-1").click(function(e){
        e.preventDefault()
        $('.nav-item-1').addClass('gris-oscuro')
        $( '.nav-item-2' ).removeClass( 'gris-oscuro' )
        $( '.nav-item-3' ).removeClass( 'gris-oscuro' )
        //parrafos
        $('.p-cachorro').css('font-weight', "bold")
        $('.p-adulto').css('font-weight', "normal")
        $('.p-senior').css('font-weight', "normal")
    })
    $(".tag-cachorro-2").click(function(e){
        e.preventDefault()
        $('.nav-item-2').addClass('gris-oscuro')
        $( '.nav-item-1' ).removeClass( 'gris-oscuro' )
        $( '.nav-item-3' ).removeClass( 'gris-oscuro' )
        //parrafos
        $('.p-cachorro').css('font-weight', "normal")
        $('.p-adulto').css('font-weight', "bold")
        $('.p-senior').css('font-weight', "normal")
    })
    $(".tag-cachorro-3").click(function(e){
        e.preventDefault()
        $('.nav-item-3').addClass('gris-oscuro')
        $( '.nav-item-2' ).removeClass( 'gris-oscuro' )
        $( '.nav-item-1' ).removeClass( 'gris-oscuro' )
        //parrafos
        $('.p-cachorro').css('font-weight', "normal")
        $('.p-adulto').css('font-weight', "normal")
        $('.p-senior').css('font-weight', "bold")
    })

    //Efectos cuadros

    $("#hero__eventos").click(function(e) {
        e.preventDefault()
        $(this).addClass("hero__eventos-activa")
        $("#hero__promociones").removeClass("hero__eventos-activa")
    })
    $("#hero__promociones").click(function(e) {
        e.preventDefault()
        $(this).addClass("hero__eventos-activa")
        $("#hero__eventos").removeClass("hero__eventos-activa")
    })

    $("#perro__blog").click(function(e) {
        e.preventDefault()
        $(this).addClass("pyg__blog-activa")
        $("#gato__blog").removeClass("pyg__blog-activa")
    })
    $("#gato__blog").click(function(e) {
        e.preventDefault()
        $(this).addClass("pyg__blog-activa")
        $("#perro__blog").removeClass("pyg__blog-activa")
    })

    // Home animation 
    
    $('.capa-evento').hover(function(e) {
        $(this).addClass('magictime rotateUp')
        $('.capa-promo').removeClass('magictime rotateUp')
    })
    $('.capa-promo').hover(function(e) {
        $(this).addClass('magictime rotateUp')
        $('.capa-evento').removeClass('magictime rotateUp')
    })
    $('.empty-box').click(function(e) {
        $(this).addClass('magictime rotateUp')
        $('.capa-evento').removeClass('magictime rotateUp')
    })

    // Cuenta regresiva

    $('.cuenta-regresiva').countdown('2018/05/27 00:00:00', function(event){
		$('.dias').html(event.strftime('%D'))
    })

    // Set lista - cuadricula

    $('#cuadricula').click(function(e){
        e.preventDefault()
        $(".set-cuadricula").removeClass("col-md-12").addClass("col-md-4")
        $(".set-cuadricula__img").removeClass("col-md-4").addClass("col-md-12")
        $(".set-cuadricula__evento").removeClass("col-md-6").addClass("col-md-12")
        $(".set-cuadricula__none").hide("slow")
    })
    $('#lista').click(function(e){
        e.preventDefault()
        $(".set-cuadricula").removeClass("col-md-4").addClass("col-md-12")
        $(".set-cuadricula__img").removeClass("col-md-12").addClass("col-md-4")
        $(".set-cuadricula__evento").removeClass("col-md-12").addClass("col-md-6")
        $(".set-cuadricula__none").show("slow")
    })

    // navegacion responsive

    $('#cuadricula').click(function(e){
        e.preventDefault()
        $(".set-cuadricula").removeClass("col-md-12").addClass("col-md-4")
        $(".set-cuadricula__img").removeClass("col-md-4").addClass("col-md-12")
        $(".set-cuadricula__evento").removeClass("col-md-6").addClass("col-md-12")
        $(".set-cuadricula__none").hide()
    })

    // Next step 
    $("#SaveAccount").click(function(e){
        e.preventDefault()  
    })

    $("#btnBuscar").on("click", function () {
        $("#aliadosFiltrados").removeClass("display-none");
    })

})
$(window).resize(function() {
	sizeWindow()
})
