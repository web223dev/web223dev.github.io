 $('#myCarousel').carousel({
  interval: 3000,
 })
 
 $("#myCarousel").on("swiperight",function() {
  $(this).carousel('prev');
  $(this).carousel('next');
});


$('.dropdown-toggle').dropdown();

 $(document).ready(function () {
  $('.eventslider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },      
      767: {
        items: 2
      },
      1000: {
        items: 3
      }
    }

  });
    


  $('.bestslider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });

 });

var i = 0;

$( ".iconboxone3" ) .mouseover(function() {
    i += 1;
     $(".textone3" ).css( "opacity", "1" );
  })
  .mouseout(function() {
    
     $(".textone3",).css( "opacity", "0" );
});

var i = 0;

$( ".iconboxone2" ) .mouseover(function() {
    i += 1;
     $(".textone2" ).css( "opacity", "1" );
  })
  .mouseout(function() {
    
     $(".textone2",).css( "opacity", "0" );
});

$( ".iconboxone1" ) .mouseover(function() {
    i += 1;
     $(".textone1" ).css( "opacity", "1" );
  })
  .mouseout(function() {
    
     $(".textone1",).css( "opacity", "0" );
});

var n = 0;
$( ".iconboxtwo3" ).mouseover(function() {
    n += 1;
     $(".texttwo3").css( "opacity", "1" );
  })
  .mouseout(function() {
    
     $(".texttwo3").css( "opacity", "0" );
});
 

var n = 0;
$( ".iconboxtwo2" ).mouseover(function() {
    n += 1;
     $(".texttwo2").css( "opacity", "1" );
  })
  .mouseout(function() {
    
     $(".texttwo2").css( "opacity", "0" );
});
 

var n = 0;
$( ".iconboxtwo1" ).mouseover(function() {
    n += 1;
     $(".texttwo1").css( "opacity", "1" );
  })
  .mouseout(function() {
    
     $(".texttwo1").css( "opacity", "0" );
});



 