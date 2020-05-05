function reviewSlider() {

	//Слайдер с отзывами ===========================================================
		
		let slideNumber = 1,
				slidesItems = document.querySelectorAll('.feedback-slider-item'),
				prev = document.querySelector('.main-prev-btn'),
				next = document.querySelector('.main-next-btn');

				let id = setInterval(() => {
					incrSlides(1);
				}, 5000);

				animateSliderNext(slideNumber);

				function incrSlides(n) {
					if (n == -1) {
						animateSliderPrev(slideNumber += n);
					} else {
						animateSliderNext(slideNumber += n);
					}
				}

				prev.addEventListener('click', () => {
					incrSlides(-1);
				});
				next.addEventListener('click', () => {
					incrSlides(1);
				});

				function animateSliderPrev(n) {

					if (n > slidesItems.length) {
						slideNumber = 1;
					}
					if (n < 1) {
						slideNumber = slidesItems.length;
					}

					slidesItems.forEach((item) => item.style.display = 'none');
					slidesItems[slideNumber - 1].classList.remove('fadeInLeft');
					slidesItems[slideNumber - 1].classList.add('fadeInRight');
					slidesItems[slideNumber - 1].style.cssText = 'animation-duration: 1s';
					slidesItems[slideNumber - 1].style.display = 'block';

				}

				function animateSliderNext(n) {
					if (n > slidesItems.length) {
						slideNumber = 1;
					}
					if (n < 1) {
						slideNumber = slidesItems.length;
					}

					slidesItems.forEach((item) => item.style.display = 'none');
					slidesItems[slideNumber - 1].classList.remove('fadeInRight');
					slidesItems[slideNumber - 1].classList.add('fadeInLeft');
					slidesItems[slideNumber - 1].style.cssText = 'animation-duration: 1s';
					slidesItems[slideNumber - 1].style.display = 'block';

				}


	//Слайдер с отзывами ===========================================================
	
}


module.exports = reviewSlider;