function menuBurgerPhone() {

	//Отображение меню гамбургера ==================================================
	
		let btnBurger = document.querySelector('.burger'),
				menuBurger = document.querySelector('.burger-menu');

				function activeMenuBurger() {
					btnBurger.classList.remove('btn_passive');
					btnBurger.classList.add('btn_active');
					menuBurger.style.display = 'block';
				}

				function passiveMenuBurger() {
					btnBurger.classList.remove('btn_active');
					btnBurger.classList.add('btn_passive');
					menuBurger.style.display = 'none';
				}

				passiveMenuBurger();

				btnBurger.addEventListener('click', (event) => {
					
					if (document.documentElement.clientWidth <= 991) {
						let target = event.target;

								while(target != btnBurger) {
									target = target.parentNode;
								}
						if (target && target.classList.contains('btn_passive')) {
							activeMenuBurger();
						} else if (target && target.classList.contains('btn_active')) {
							passiveMenuBurger();
						}
					}

				});
	
	//Отображение меню гамбургера ==================================================

}


module.exports = menuBurgerPhone;