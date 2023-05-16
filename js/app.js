/*change navlinks*/
$(document).ready(function(){
  $('.nav-link').hover(function(){
      $(this).css('color', 'white');
  }, function(){
      $(this).css('color', '');
  });
});