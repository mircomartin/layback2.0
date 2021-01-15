$(document).ready(function () {
    
    /* Menu Flotante Mostrarse y Ocultarse */
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if(scrollTop >= 165 ) {
            $("#float-header").addClass("show");
        }else{
            $("#float-header").removeClass("show");
        }
    });

    /* Menu Mobile Abrir Cerrar */
    $("#btn-menu").click(function (e) { 
        e.preventDefault();
        $("#mobileNav").addClass("show-mobile");
    });

    $("#btn-close").click(function (e) { 
        e.preventDefault();
        $("#mobileNav").removeClass("show-mobile");
    });

    /* Back to TOP */
    $("#backTop").click(function (e) { 
        e.preventDefault();
        $(window).scrollTop(0);

    });

    /* Button Load More */
    $('.elm-button-text').prepend('<i class="fas fa-chevron-down icon"></i>');
    $('.elm-button-text').append('<i class="fas fa-chevron-down icon"></i>');

});