$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    // Changes the navbar color
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll <300) {
      $('.fixed-top').css('background', 'transparent')
  } else {
      $('.fixed-top').css('background', 'rgba(57, 58, 60)')
  }
})
// Closes navbar on click
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
$("form#contact-form").submit(function(e){
  })
  })


  