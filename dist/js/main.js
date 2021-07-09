$( document ).ready(function() {

    // Burger menu
    
    $('.sidebar__mobile').click(function(){
        $('.burger').toggleClass('open');
        $('.sidebar').toggleClass('sidebar--open');    
    });

    //navigation
    $('.sidebar__li').click(function(){
    	$('.burger').removeClass('open');
        $('.sidebar').removeClass('sidebar--open');
    	let link = $(this).data('link');
    	let sidebarHeight = $('.sidebar').outerHeight();
    	
    	if ($(window).width() < 768) {
   			$('html, body').animate({
        		scrollTop: $(`#${link}`).offset().top - sidebarHeight - 20
    		}, 400);
		}
		else {
   			$('html, body').animate({
        		scrollTop: $(`#${link}`).offset().top - 80
    		}, 400);
		}

    });

    const blocks = gsap.utils.toArray('.main-content__block');
	blocks.forEach(block => {
        gsap.to(block, { 
            y: -20,
            opacity:1,
            duration: 0.4,
            scrollTrigger: {
              trigger: block,
              start: "top 70%",
            }
        });

        // gsap.to(block, { 
        //     scrollTrigger: {
        //       trigger: block,
        //       //scrub: true,
        //       start: "top center",
        //       // end: "bottom"
        //       markers: true,
        //       onEnter: function() {
        //         let section = block.id;
        //         console.log(section);
        //         },
        //       onEnterBack: function() {
        //         let section = block.id;
        //         console.log(section);
        //         },
        //     }
        // });
	});

});// end of document ready