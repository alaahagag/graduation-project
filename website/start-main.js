$(function () {
  'use strict';
  // Adjust Slider Height
  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - ( upperH + navH ));

  // relaeted epilepsy topics
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs .col-md').css('opacity', 1);
    } else {
      $('.shuffle-imgs .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });
  $("upper-bar,.btn-outline-success").mouseenter(function()
  {
    $(this).css("background-color","#bb0f14");
    $(this).css("border-color","#bb0f14");

  })
  $("upper-bar,.btn-outline-success").mouseleave(function()
  {
    $(this).css("background-color","transparent");

  });
  $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});
