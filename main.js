$(document).ready(function () {
  var $sections = $('.info');

  $(window).scroll(function () {

    var currentScroll = $(this).scrollTop();

    var $currentSection 

    $sections.each(function () {
      var divPosition = $(this).offset().top;

      if (divPosition - 1 < currentScroll) {
        $currentSection = $(this);

      }


      var id = $currentSection.attr('id');
      $('a').removeClass('active');
      $("[href=#" + id + "]").addClass('active');

    })

  });
});