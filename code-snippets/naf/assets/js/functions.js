$(document).ready(function() {
  smoothScrool(1000);
  workBelt();
  workLoad();
  mobileNav();
});

function smoothScrool (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if (target.length) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);


      }

  });

}

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function() {
    var status = $(this).hasClass('is-open');
    if(status) { $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }

  });

}

function workBelt() {
  $('.thumb-unit').click(function() {
    $('.work-belt').css('left','-100%');
    $('.work-container').show();

  });

  $('.work-return').click(function() {
    $('.work-belt').css('left','0%');
    $('.work-container').hide(800);
  });
}

function workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-unit').click(function() {

    var $this = $(this),
    newTitle = $this.find('strong').text(),
    newFolder = $this.data('folder'),
    spinner = '<div class="loader">Loading...</div>',
    newHTML = 'work/'+ newFolder +'.html';

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 1000);


  });
}
