function mainSlider() {

	//Слайдер главного экрана =========================================

		let mainSlideItems = document.querySelectorAll('.main-slider-item'),
				slideIndex = 0,
				tracking = 0;

				function showSlideMain() {

					if (slideIndex == 1) {
						slideIndex = 0;
						mainSlideItems[slideIndex + 1].style.cssText = 'display: none';
						mainSlideItems[slideIndex].style.cssText = 'display: block';
						mainSlideItems[slideIndex].style.cssText = 'animation-duration: 1.5s';
					} else if (slideIndex == 0) {
						slideIndex = 1;
						mainSlideItems[slideIndex - 1].style.cssText = 'display: none';
						mainSlideItems[slideIndex].style.cssText = 'display: block';
						mainSlideItems[slideIndex].style.cssText = 'animation-duration: 1.5s';
					}

				}

				function currentSlide(n) {
					if(n == 0) {
						mainSlideItems.forEach((item) => item.classList.add('slideInDown'));
						mainSlideItems[n].style.cssText = 'animation-duration: 1.5s';
						mainSlideItems[n + 1].style.cssText = 'display: none';
						slideIndex = 0;
					}
					if(n == 1) {
						mainSlideItems.forEach((item) => item.classList.add('slideInDown'));
						mainSlideItems[n].style.cssText = 'animation-duration: 1.5s';
						mainSlideItems[n - 1].style.cssText = 'display: none';
						slideIndex = 1;
					}

				}
				currentSlide(0);

				setInterval(showSlideMain, 3000);

	//Слайдер главного экрана ==================================================

}

module.exports = mainSlider;