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
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

let cap = document.querySelector( '.cap' )
let shirt = document.querySelector( '.shirt' )
let  bag = document.querySelector( '.bag' )
let cafe = document.querySelector( '.cafe' )
IO.observe( cap );
IO.observe( shirt );
IO.observe( bag );
IO.observe( cafe );
