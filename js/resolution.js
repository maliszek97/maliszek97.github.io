$(window).on("load", function(){
    var width =$(window).width();
    if(width < 576){
        $('body').removeClass();
        $('body').addClass('body-xs');
    }
    else if (width < 768 && width>=576){
        $('body').removeClass();
        $('body').addClass('body-sm');
    }
    else if(width < 992 && width>=768){
        $('body').removeClass();
        $('body').addClass('body-md');
    }
    else if(width < 1200 && width>=992){
        $('body').removeClass();
        $('body').addClass('body-lg');
    }
    else{
        $('body').removeClass();
        $('body').addClass('body-xl');
    }
})
