function moreInfo() {

	//Подгружаемая информация при клике на кнопку "Посмотреть больше стилей" =======

	let btnMoreStyle = document.querySelector('.button-styles'),
		contentStyles = document.querySelectorAll('.styles-2');

	btnMoreStyle.addEventListener('click', () => {
		btnMoreStyle.style.display = 'none';
		contentStyles.forEach((item) => {
			if (window.innerWidth >= 768) {
				item.classList.remove('hidden-lg');
				item.classList.remove('hidden-md');
				item.classList.add('fadeInLeft');
				item.style.cssText = 'animation-duration: 1s';
			} else {
				item.classList.remove('hidden-sm');
				item.classList.remove('hidden-xs');
			}
		});
	});

	//Подгружаемая информация при клике на кнопку "Посмотреть больше стилей" =======

}


module.exports = moreInfo;