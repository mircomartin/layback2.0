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

});