function filtersElements() {

	//Фильтр элементов =============================================================

		let menuWrapper = document.querySelector('.portfolio-menu'),
				filters = menuWrapper.querySelectorAll('li'),
				filterContent = document.querySelectorAll('.portfolio-block'),
				portfolioNun = document.querySelector('.portfolio-no');

		let hidemenuContent = (a) => {
			for (let i = a; i < filters.length; i++) {
				filters[i].classList.remove('active');
			}
		};

		menuWrapper.addEventListener('click', (event) => {
			let target = event.target;
			if(target && target.tagName == 'LI') {
				for (let i = 0; i < filters.length; i++) {
					if(filters[i] == target) {
						hidemenuContent(0);
						filters[i].classList.add('active');
						if (filters[i].classList[0].indexOf('grandmother') != -1 || filters[i].classList[0].indexOf('granddad') != -1) {
							portfolioNun.style.display = 'block';
						} else {
							portfolioNun.style.display = 'none';
						}
						for (let j = 0; j < filterContent.length; j++) {
							if (filterContent[j].classList.value.indexOf(filters[i].classList[0]) != -1) {
								filterContent[j].style.display = 'block';
							} else {
								filterContent[j].style.display = 'none';
							}
						}
					}
				}
			}
		});


	//Фильтр элементов =============================================================

}

module.exports = filtersElements;