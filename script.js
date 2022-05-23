const btnMobile = document.getElementById('btn-mobile');


function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}



btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
















		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 3,
			spaceBetween: 30,
			slidesPerGroup: 3,
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
		  });