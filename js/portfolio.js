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


    // Start Footer Instagram
    // $('.insta_img').magnificPopup({
    //     type: 'image',
    //     mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    //     gallery : {
    //         enable : true
    //     },
      
    //     zoom: {
    //       enabled: true, // By default it's false, so don't forget to enable it
      
    //       duration: 300, // duration of the effect, in milliseconds
    //       easing: 'ease-in-out', // CSS transition easing function
      
    //       // The "opener" function should return the element from which popup will be zoomed in
    //       // and to which popup will be scaled down
    //       // By defailt it looks for an image tag:
    //       opener: function(openerElement) {
    //         // openerElement is the element on which popup was initialized, in this case its <a> tag
    //         // you don't need to add "opener" option if this code matches your needs, it's defailt one.
    //         return openerElement.is('img') ? openerElement : openerElement.find('img');
    //       }
    //     }
      
    //   });
    // End Footer Instagram
})

// Start Preloader
$(window).on("load",function(){
    $("#preloader").delay("600").fadeOut("slow");
    $(".pyramid-loader").delay("400").fadeOut();
})

// End Preloader

