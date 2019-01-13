$.validator.setDefaults({
  submitHandler: function () {
    $('.modal-close').click()
    $('.submit-success').fadeIn()
    setTimeout(function () {
      $('.submit-success').fadeOut()
    }, 2000)
    $('.form-modal').find($('input')).val('')
  }
})

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

  // Adding styles for centering 
  $('.slider__img-wrap').css({
    "display": "flex",
    "align-tems": "center"
  })
  // --- Slider end --- \\




  // --- Popup --- \\
  var modal = document.getElementById('popup-modal');
  //  var btn = document.getElementById("open-popup-modal");
  //  var span = document.getElementsByClassName("modal-close")[0];
  //  btn.onclick = function () {
  //    modal.style.display = "block";
  //  }
  //  span.onclick = function () {
  //    modal.style.display = "none";
  //  }
  //  window.onload = function () {
  //    setTimeout(function () {
  //      modal.style.display = 'block';
  //    }, 3000);
  //  }

  $('#open-popup-modal').on('click', function (e) {
    $('#popup-modal').fadeIn(400)
  })

  $('.modal-close').on('click', function (e) {
    $('#popup-modal').fadeOut(400)
  })

  window.onclick = function (event) {
    if (event.target == modal) {
      $('#popup-modal').fadeOut(400)
    }
  }
  // --- Popup end --- \\



  // --- Feedback validate --- \\
  $.validator.setDefaults({
    highlight: function (element) {
      if ($(element).hasClass('valid')) {
        $(element).removeClass('valid')
      }
      $(element)
        .addClass('invalid')
      $(element).change(function (e) {
        $(element).next().text('')
      })
    },
    unhighlight: function (element) {
      if ($(element).hasClass('invalid')) {
        $(element).removeClass('invalid')
      }
      $(element).addClass('valid')
    }
  })

  $('.form-modal').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 40
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: 'Поле обязательно для заполнения',
        email: 'Введите корректный email'
      },
      name: {
        required: 'Поле обязательно для заполнения',
        minlength: 'Введите хотя бы 2 символа'
      },
      phone: {
        required: 'Поле обязательно для заполнения',
        maxlength: 13
      }
    }
  })
  // --- Feedback validate end --- \\



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
