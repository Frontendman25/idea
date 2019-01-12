$(function () {

  // --- Slider --- \\
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: false,
    prevArrow: '<img class="slider__arrow slider__arrow_left" src="img/arrow-left.jpg" />',
    nextArrow: '<img class="slider__arrow slider__arrow_right" src="img/arrow-right.jpg" />',
    autoplay: true,
    autoplaySpeed: 4000
  });

  // Addin styles for centering 
  $('.slider__img-wrap').css({
    "display": "flex",
    "align-tems": "center"
  })
  // --- Slider end --- \\



  // --- Popup --- \\
  var modal = document.getElementById('popup-modal');
  var btn = document.getElementById("open-popup-modal");
  var span = document.getElementsByClassName("modal-close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  //  window.onload = function () {
  //    setTimeout(function () {
  //      modal.style.display = 'block';
  //    }, 3000);
  //  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // --- Popup end --- \\



  // --- Toggle menu --- \\
  $("#burger-menu").on("click", function (e) {
    $('.nav__item').stop().slideToggle('400')
  });
  // --- Toggle menu end --- \\



  // --- Phones toggle --- \\
  $('.fa-phone-volume').on('click', function (e) {
    $('.feedback__wrap-phones').stop().slideToggle('400')
  })
  // --- Phones toggle end --- \\



  // --- Settings for slideToggle --- \\
  $(window).resize(function () {
    if ($(window).width() > 768 || $(window).width() > 576) {
      $('.nav__item').removeAttr('style');
      $('.feedback__wrap-phones').removeAttr('style');
    }
  })
  // --- Settings for slideToggle end --- \\



  // --- Footer to bottom --- \\
  if ($('html').height() < $(window).height()) {
    $(".footer-wrap").addClass("fixed-bottom");
  }
})
