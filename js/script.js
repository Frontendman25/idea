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
//window.onload = function () {
//  setTimeout(function () {
//    modal.style.display = 'block';
//  }, 3000);
//}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// --- Popup end --- \\
