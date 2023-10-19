//navlinks menu mobile
const toggleButton = document.getElementsByClassName('btn-toggle')[0]
const navbarLinks = document.getElementsByClassName('menu-links', 'menusocial')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//slider
//const wrapper = document.querySelector(".container");
//const carousel = document.querySelector(".slider");
//const arrowsBtns = document.querySelectorAll(".arrow"); //botoes
//const firstCardWidth = carousel.querySelector(".card img").offsetWidth;
//const carouselChildrens = [...carousel.children];
//
//let isDragging = false, startX, startScrollLeft, timeoutId;
//
//let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
//
//carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
//    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
//});
//
//carouselChildrens.slice(0, cardPerView).forEach(card =>{
//    carousel.insertAdjacentHTML("beforeEnd", card.outerHTML);
//});
//
//arrowsBtns.forEach(btn => {
//    btn.addEventListener("click", () => {
//        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
//    })
//});
//
//const dragStart = (e) => {
//    isDragging = true;
//    carousel.classList.add("dragging");
//    startX = e.pageX;
//    startScrollLeft = carousel.scrollLeft;
//};
//
//const dragging = (e) => {
//    if(!isDragging) return;
//    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
//};
//
//const dragStop = () => {
//    isDragging = false;
//    carousel.classList.remove("dragging");
//
//};
//
//const autoPlay = () => {
//    if(window.innerWidth < 800) return; //retorna se window for menor que 800
//    //autoplay carrosel acada 2000ms
//    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2000)
//
//}
//autoPlay();
//
//const infiniteScroll = () => {
//    if(carousel.scrollLeft === 0) {
//        carousel.classList.add("no-transition");
//        carousel.scrollLeft = carousel.scrollWidth - ( 1 * carousel.offsetWidth);
//        carousel.classList.remove("no-transition");
//    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
//        carousel.classList.add("no-transition");
//        carousel.scrollLeft = carousel.offsetWidth;
//        carousel.classList.remove("no-transition");
//    } 
//
//    clearTimeout(timeoutId);
//    if(!wrapper.matches(":hover")) autoPlay();
//};
//
//carousel.addEventListener("mousedown", dragStart);
//carousel.addEventListener("mousemove", dragging);
//document.addEventListener("mouseup", dragStop);
//carousel.addEventListener("scroll", infiniteScroll);
//wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
//wrapper.addEventListener("mouseleave", autoPlay);
//

//swiper