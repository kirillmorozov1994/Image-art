function hoverImgAndTouchPhone() {

	//Наведение на картинки и тач на телефоне ======================================
	
		let imgWrapper = document.querySelector('.sizes-wrapper'),
				sizeBlocks = document.querySelectorAll('.sizes-block');

				imgWrapper.addEventListener('mouseover', (event) => {
					showImgSize(event.target);
				});

				imgWrapper.addEventListener('mouseout', (event) => {
					hideImgSize(event.target);
				});

				document.body.addEventListener('touchstart', () => {
					if (event.target && !event.target.classList.contains('sizes-block') && !event.target.classList.contains('size') && !event.target.classList.contains('starting-price') && !event.target.classList.contains('final-price') && !event.target.classList.contains('size-1') && !event.target.classList.contains('size-2') && !event.target.classList.contains('size-3') && !event.target.classList.contains('size-4')) {
						for(let i = 0; i < 4; i++) {
							if(i == 0) {
								showContent(sizeBlocks[i]);
								sizeBlocks[i].children[0].setAttribute('src', 'img/sizes-1.png');
							}
							if(i == 1) {
								showContent(sizeBlocks[i]);
								sizeBlocks[i].children[0].setAttribute('src', 'img/sizes-2.png');
							}
							if(i == 2) {
								showContent(sizeBlocks[i]);
								sizeBlocks[i].children[0].setAttribute('src', 'img/sizes-3.png');
							}
							if(i == 3) {
								showContent(sizeBlocks[i]);
								sizeBlocks[i].children[0].setAttribute('src', 'img/sizes-4.png');
							}
						}
					} else {
						tabsPhone(event.target);
					}
				});


				function hideContent(n) {
					n.children[0].style.cssText = 'z-index: 10';
					n.children[1].style.cssText = 'z-index: -1';
					n.children[2].style.cssText = 'z-index: -1';
					n.children[3].style.cssText = 'z-index: -1';
				}

				function showContent(n) {
					n.children[0].style.cssText = 'z-index: -1';
					n.children[1].style.cssText = 'z-index: 10';
					n.children[2].style.cssText = 'z-index: 10';
					n.children[3].style.cssText = 'z-index: 10';
				}

				function showImgSize(t) {
					if (!t.classList.contains('sizes-wrapper')) {
						while (!t.classList.contains('sizes-block')) {
							t = t.parentNode;
						}
					} else {
						return false;
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-1.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-1-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-2.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-2-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-3.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-3-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-4.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-4-1.png');
					}
				}

				function hideImgSize(t) {
					if (!t.classList.contains('sizes-wrapper')) {
						while (!t.classList.contains('sizes-block')) {
							t = t.parentNode;
						}
					} else {
						return false;
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-1-1.png') {
						showContent(t);
						t.children[0].setAttribute('src', 'img/sizes-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-2-1.png') {
						showContent(t);
						t.children[0].setAttribute('src', 'img/sizes-2.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-3-1.png') {
						showContent(t);
						t.children[0].setAttribute('src', 'img/sizes-3.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-4-1.png') {
						showContent(t);
						t.children[0].setAttribute('src', 'img/sizes-4.png');
					}
				}

				function tabsPhone(t) {
					if(!t.classList.contains('sizes-wrapper')) {
						while (!t.classList.contains('sizes-block')) {
							t = t.parentNode;
						}
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-1.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-1-1.png');
					}
					if (t && t.children[0].getAttribute('src') == 'img/sizes-2.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-2-1.png');
					} 
					if (t && t.children[0].getAttribute('src') == 'img/sizes-3.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-3-1.png');
					} 
					if (t && t.children[0].getAttribute('src') == 'img/sizes-4.png') {
						hideContent(t);
						t.children[0].setAttribute('src', 'img/sizes-4-1.png');
					}
				}
	
	//Наведение на картинки и тач на телефоне ======================================

}


module.exports = hoverImgAndTouchPhone;