$(window).scroll(function(e) {
    parallax();
  })
  
  
  function parallax() {
    var scroll = $(window).scrollTop();
    var screenHeight = $(window).height();
  
    $('.parallax').each(function() {
      var offset = $(this).offset().top;
      var distanceFromBottom = offset - scroll - screenHeight
      
      if (offset > screenHeight && offset) {
        $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.25) +'px');
      } else {
        $(this).css('background-position', 'center ' + (( -scroll ) * 1) + 'px');
      }
    })
  }