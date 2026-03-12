
        $(window).on('scroll', function() {

            var st = $(this).scrollTop();

            $(".contain").css({ 
                'transform' : "translate3d(0px,"+(st/2)+"px, 0px)",
                'opacity' : 1 - st/700
            });
            $(".main-card").css({ 
                'transform' : "translate3d(0px,"+(st/5)+"px, 0px)",
            });
        });
$('.dropdown-button').dropdown({
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
    }
  );
$(".button-collapse").sideNav();
        /* ---- particles.js config ---- */
