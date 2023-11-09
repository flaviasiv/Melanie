//navlinks menu mobile
let menu_icon_box = document.querySelector(".btn-toggle");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

//swiper responsive

const swiperEl = document.querySelector('.mySwiper2')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();
