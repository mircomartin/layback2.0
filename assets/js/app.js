$(document).ready(function () {
    
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if(scrollTop >= 165 ) {
            $("#float-header").addClass("show");
        }else{
            $("#float-header").removeClass("show");
        }
    });

    $("#btn-menu").click(function (e) { 
        e.preventDefault();
        $("#mobileNav").addClass("show-mobile");
    });

    $("#btn-close").click(function (e) { 
        e.preventDefault();
        $("#mobileNav").removeClass("show-mobile");
    });

});