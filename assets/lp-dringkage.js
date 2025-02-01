var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 2.2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    this.parentElement.classList.toggle('active');

    var pannel = this.nextElementSibling;

    if (pannel.style.display === 'block') {
      pannel.style.display = 'none';
    } else {
      pannel.style.display = 'block';
    }
  });
}

/*
var acc = document.getElementsByClassName('cart_box');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    this.parentElement.classList.toggle('active');
    // console.log(nextElementSibling)
    // var overlay_box = this.nextElementSibling;

    // // console.log(overlay_box)
    // var overlay_box = document.getElementsByClassName("overlay_box");
    // console.log(overlay_box)

    // if (overlay_box.style.display === "block") {
    //     overlay_box.style.display = "none";
    // } else {
    //     overlay_box.style.display = "block";
    // }
  });
}
*/
