// console.log("hello world");

$(document).ready(function(e){
    // console.log("hellow jquery");
    $(window).scroll(function(e){
        // console.log();
        let getscrollval = $(this).scrollTop();
        if(getscrollval > 400) {
            $("nav").addClass("active");
        }else {
            $("nav").removeClass("active");

        }
    })

})

// Start Preloader
$(window).on("load",function(){
    $("#preloader").delay("600").fadeOut("slow");
    $(".pyramid-loader").delay("400").fadeOut();
})

// End Preloader


