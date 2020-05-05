window.addEventListener('DOMContentLoaded', function () {
	'use strick';


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




	//Модальное окно design ====================================================

		let popupDesign = document.querySelector('.popup-design');

				function showPopupDesign() {
					popupDesign.classList.add('fadeInLeft');
					popupDesign.style.cssText = 'animation-duration: 1s';
					popupDesign.style.display = 'block';
				}

				function closePopupDesign() {
					popupDesign.classList.remove('fadeInLeft');
					popupDesign.style.display = 'none';
					inputFormsDesign[1].style.marginBottom = '15px';
					inputFormsDesign[2].style.marginBottom = '15px';
					inputFormsDesign[3].style.marginBottom = '15px';
					mesStatusName.innerHTML = '';
					mesStatusPhone.innerHTML = '';
					mesStatusMail.innerHTML = '';
					fileImg.children[1].innerText = 'Файл не выбран';
					fileImg.children[1].classList.remove('novalidate');
					fileImg.children[1].classList.remove('validate');
					clearInputs();
					clearTextAreas();
					clearFormCalculation();
					clearFormFooter();
				}
		
				document.body.addEventListener('click',  (event) => {
					if(event.target && event.target.classList.contains('button-design')) {
						showPopupDesign();
						tracking++;
					}
				});

				popupDesign.addEventListener('click', (event) => {
					if(event.target.classList.contains('popup-design') || event.target.classList.contains('popup-close')) {
						closePopupDesign();
					}
				});
	
	//Модальное окно design ==========================================================


	//Модальное окно consultation ====================================================

		let popupConsultation = document.querySelector('.popup-consultation');

				function showPopupConsultation() {
					popupConsultation.classList.add('fadeInRight');
					popupConsultation.style.cssText = 'animation-duration: 1s';
					popupConsultation.style.display = 'block';
				}

				function closePopupConsultation() {
					popupConsultation.classList.remove('fadeInRight');
					popupConsultation.style.display = 'none';
					inputFormsformsConsultation[0].style.marginBottom = '15px';
					inputFormsformsConsultation[1].style.marginBottom = '15px';
					mesStatusNameCons.innerHTML = '';
					mesStatusPhoneCons.innerHTML = '';
					clearInputs();
					clearFormCalculation();
					clearFormFooter();
				}

				document.body.addEventListener('click', (event) => {
					if (event.target && event.target.classList.contains('button-consultation')) {
						showPopupConsultation();
						tracking++;
					}
				});

				popupConsultation.addEventListener('click', (event) => {
					if (event.target.classList.contains('popup-close') || event.target.classList.contains('popup-consultation')) {
						closePopupConsultation();
					}
				});
	//Модальное окно consultation ====================================================


	//Модальное окно gift ============================================================

		let btnPopupGift = document.querySelector('.fixed-gift'),
				popupGift = document.querySelector('.popup-gift');

				function showPopupGift() {
					popupGift.classList.add('zoomIn');
					popupGift.style.cssText = 'animation-duration: 1s';
					popupGift.style.display = 'block';
					btnPopupGift.style.display = 'none';
				}

				function closePopupGift() {
					popupGift.classList.remove('zoomIn');
					popupGift.style.display = 'none';
				}
		
				btnPopupGift.addEventListener('click', () => {
					showPopupGift();
					tracking++;
				});

				popupGift.addEventListener('click', (event) => {
					if (event.target.classList.contains('popup-close') || event.target.classList.contains('popup-gift')) {
						closePopupGift();
					}
				});

	//Модальное окно gift ==========================================================
	

	//Появление модального окна consultation через 1 минуту ========================

				setTimeout( () => {
					if (getComputedStyle(popupGift).display == 'none' && getComputedStyle(popupConsultation).display == 'none' && getComputedStyle(popupDesign).display == 'none') {
						showPopupConsultation();
					}
				}, 60000);

	//Появление модального окна consultation  через 1 минуту =======================


	//Появление модального окна, если не нажата ни одна кнопка =====================

				window.addEventListener('scroll', () => {
					if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && getComputedStyle(popupGift).display == 'none' && getComputedStyle(popupConsultation).display == 'none' && getComputedStyle(popupDesign).display == 'none' && tracking == 0) {
						showPopupGift();
						tracking++;
					}
				});			

	//Появление модального окна, если не нажата ни одна кнопка =====================


	//Формы отправки ===============================================================

		//Форма "Заказать дизайн портрета" ===============================

				let message = {
					loadind: "img/loading.gif",
					success: "img/success.png",
					failure: "img/error.jpg"
				};
		
				let formsDesign = document.querySelector('.form-design'),
						inputs = document.querySelectorAll('input'),
						textAreas = document.querySelectorAll('textarea'),
						inputFormsDesign = formsDesign.querySelectorAll('input'),
						fileImg = document.querySelector('.file_uploa'),
						messageStatus = document.createElement('div');
						
						messageStatus.classList.add('status');
						messageStatus.classList.add('fadeInUp');
						
						//Валидация загрузки изображения
						function validateInputImg(t) {
							if(!t.value == "") {
								fileImg.children[1].classList.remove('novalidate');
								fileImg.children[1].classList.add('validate');
								fileImg.children[1].innerText = 'Файл загружен';
							} else {
								fileImg.children[1].classList.remove('validate');
								fileImg.children[1].classList.add('novalidate');
							}
						}
						//Валидация загрузки изображения

						//Валидация имени пользователя
							let mesStatusName = document.createElement('div');
									document.querySelectorAll('.form')[2].appendChild(mesStatusName);
									document.querySelectorAll('.form')[2].insertBefore(mesStatusName, inputFormsDesign[2]);

						function validateInputName(t) {
							if(t.value.length < 3) {
								t.style.marginBottom = 0;
								mesStatusName.classList.remove('validate');
								mesStatusName.classList.add('novalidate');
								mesStatusName.innerHTML = 'Имя должно быть не менее 3 букв';
							} else {
								t.style.marginBottom = 0;
								mesStatusName.classList.remove('novalidate');
								mesStatusName.classList.add('validate');
								mesStatusName.innerHTML = 'Готово';	
							}
						}
						//Валидация имени пользователя

						//Валидация номера телефона
						let mesStatusPhone = document.createElement('div');
								document.querySelectorAll('.form')[2].appendChild(mesStatusPhone);
								document.querySelectorAll('.form')[2].insertBefore(mesStatusPhone, inputFormsDesign[3]);

						function validateInputPhone(t) {
							if (t.value.lastIndexOf('_') != -1 || t.value == '') {
								t.style.marginBottom = 0;
								mesStatusPhone.classList.remove('validate');
								mesStatusPhone.classList.add('novalidate');
								mesStatusPhone.innerHTML = 'Заполните маску номера телефона';
							} else {
								t.style.marginBottom = 0;
								mesStatusPhone.classList.remove('novalidate');
								mesStatusPhone.classList.add('validate');
								mesStatusPhone.innerHTML = 'Готово';
							}
						}
						//Валидация номера телефона

						//Функция маски номера телефона
						function maskInput(a) {
							let matrix = a.defaultValue,
								i = 0,
								def = matrix.replace(/\D/g, ""),
								val = a.value.replace(/\D/g, "");
							if (def.length >= val.length) {
								val = def;
							}
							matrix = matrix.replace(/[_\d]/g, function (a) {
								if (val.charAt(i) == "") {
									return "_";
								}
								return val.charAt(i++);
							});
							a.value = matrix;
							if (i == 11) {
								i = 15;
							} else {
								i = matrix.lastIndexOf(val.substr(-1));
							}
							if (i < matrix.length && matrix != a.defaultValue) {
								i++;
							} else {
								i = matrix.indexOf("_");
							}
							setCursorPosition(i, a);
						}

						//Функция определения позиции курсора в поле ввода
						function setCursorPosition(pos, elem) {
							if (pos == 15) {
								return false;
							} else {
								elem.focus();
								if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
								else if (elem.createTextRange) {
									let range = elem.createTextRange();
									range.collapse(true);
									range.moveEnd("character", pos);
									range.moveStart("character", pos);
									range.select();
								}
							}
						}
						//Функция маски номера телефона

						//Валидация почты
							let mesStatusMail = document.createElement('div');
									document.querySelectorAll('.form')[2].appendChild(mesStatusMail);
									document.querySelectorAll('.form')[2].insertBefore(mesStatusMail, textAreas[0]);

							function validateInputMail(t) {
								let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
										if (!pattern.test(t.value)) {
											t.style.marginBottom = 0;
											mesStatusMail.classList.remove('validate');
											mesStatusMail.classList.add('novalidate');
											mesStatusMail.innerHTML = 'Введите корректный почтовый адрес';
										} else {
											t.style.marginBottom = 0;
											mesStatusMail.classList.remove('novalidate');
											mesStatusMail.classList.add('validate');
											mesStatusMail.innerHTML = 'Готово';
										}
							}		
						//Валидация почты
						

						//Функция отправки формы
						function sendingForms (t) {
							
							let request = new XMLHttpRequest();

							request.open('POST', 'server.php');
							request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

							let formData_1 = new FormData(t),
								obj_1 = {};

							formData_1.forEach((value, key) => {
								obj_1[key] = value;
							});

							let json = JSON.stringify(obj_1);

							request.send(json);

							request.addEventListener('readystatechange', () => {
								t.appendChild(messageStatus);
								if (request.readyState < 4) {
									messageStatus.innerHTML = `<img src="${message.loadind}" /> <h4>Идёт загрузка ...</h4>`;
								} else if (request.readyState === 4 && request.status == 200) {
									messageStatus.style.cssText = 'z-index: 10';
									messageStatus.innerHTML = `<img src="${message.success}" /> <h4>Спасибо Вам за пользование нашими услугами!</h4>`;
									messageStatus.style.cssText = 'animation-duration: 1s';
								} else {
									messageStatus.style.cssText = 'z-index: 10';
									messageStatus.innerHTML = `<img src="${message.failure}" /> <h4>Произошла непредвиденная ошибка</h4>`;
									messageStatus.style.cssText = 'animation-duration: 1s';
								}
								setTimeout(() => {
									messageStatus.innerHTML = '';
									messageStatus.style.cssText = 'z-index: -1; opacity: 0;';
									closePopupDesign();
									closePopupConsultation();
									clearFormCalculation();
									clearFormFooter();
								}, 2500);
							});
						}
						//Функция отправки формы

						function clearInputs() {
							for (let i = 0; i < inputs.length; i++) {
								inputs[i].value = "";
							}
						}

						function clearTextAreas() {
							for (let i = 0; i < textAreas.length; i++) {
								textAreas[i].value = "";
							}
						}

						//Событие submit при отправки формы
						formsDesign.addEventListener('submit', (event) => {
							event.preventDefault();
							if (fileImg.children[2].value == "" || inputFormsDesign[1].value.length < 3 || inputFormsDesign[2].value.lastIndexOf('_') != -1 || !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(inputFormsDesign[3].value)) {
								validateInputImg(inputFormsDesign[0]);
								validateInputName(inputFormsDesign[1]);
								validateInputPhone(inputFormsDesign[2]);
								validateInputMail(inputFormsDesign[3]);
							} else {
								sendingForms(event.target);
							}
						});
						//Событие submit при отправки формы

						//Событие инпут в поле загрузки картинки
						inputFormsDesign[0].addEventListener('input', (event) => {
							validateInputImg(event.target);
						});
						//Событие инпут в поле загрузки картинки

						//Событие инпут поля имени
						inputFormsDesign[1].addEventListener('input', (event) => {
							validateInputName(event.target);
						});
						inputFormsDesign[1].onkeypress = (event) => {
							let pattern = /[^а-яА-я]/ig;
									if(pattern.test(event.key)) {
										return false;
									}
						};
						//Событие инпут поля имени

						//Событие интуп поля номера телефона
						inputFormsDesign[2].addEventListener('input', (event) => {
							maskInput(event.target);
							validateInputPhone(event.target);
						});
						//Событие интуп поля номера телефона

						//Событие интуп поля с почтой
						inputFormsDesign[3].addEventListener('input', (event) => {
							validateInputMail(event.target);
						});
						//Событие интуп поля с почтой

						//Валидация комментария
						textAreas[0].onkeypress = (event) => {
							let pattern = /[^а-яА-я]/ig;
							if (pattern.test(event.key)) {
								return false;
							}
						};
						//Валидация комментария

						clearInputs();
						clearTextAreas();

		//Форма "Заказать дизайн портрета" ===============================
		

		//Форма "Остались вопросы" =======================================

			let formsConsultation = document.querySelector('.form-questions'),
					inputFormsformsConsultation = formsConsultation.querySelectorAll('input');

			//Валидация имени пользователя
			let mesStatusNameCons = document.createElement('div');
					formsConsultation.appendChild(mesStatusNameCons);
					formsConsultation.insertBefore(mesStatusNameCons, inputFormsformsConsultation[1]);

					function validateInputNameCons(t) {
						if (t.value.length < 3) {
							t.style.marginBottom = 0;
							mesStatusNameCons.classList.remove('validate');
							mesStatusNameCons.classList.add('novalidate');
							mesStatusNameCons.innerHTML = 'Имя должно быть не менее 3 букв';
						} else {
							t.style.marginBottom = 0;
							mesStatusNameCons.classList.remove('novalidate');
							mesStatusNameCons.classList.add('validate');
							mesStatusNameCons.innerHTML = 'Готово';
						}
					}
			//Валидация имени пользователя

			//Валидация номера телефона
			let mesStatusPhoneCons = document.createElement('div');
					formsConsultation.appendChild(mesStatusPhoneCons);
					formsConsultation.insertBefore(mesStatusPhoneCons, formsConsultation.children[3]);

					function validateInputPhoneCons(t) {
						if (t.value.lastIndexOf('_') != -1 || t.value == '') {
							t.style.marginBottom = 0;
							mesStatusPhoneCons.classList.remove('validate');
							mesStatusPhoneCons.classList.add('novalidate');
							mesStatusPhoneCons.innerHTML = 'Заполните маску номера телефона';
						} else {
							t.style.marginBottom = 0;
							mesStatusPhoneCons.classList.remove('novalidate');
							mesStatusPhoneCons.classList.add('validate');
							mesStatusPhoneCons.innerHTML = 'Готово';
						}
					}
			//Валидация номера телефона

			//Событие submit при отправки формы
			formsConsultation.addEventListener('submit', (event) => {
				event.preventDefault();
				if (inputFormsformsConsultation[0].value.length < 3 || inputFormsformsConsultation[1].value.lastIndexOf('_') != -1) {
					validateInputNameCons(inputFormsformsConsultation[0]);
					validateInputPhoneCons(inputFormsformsConsultation[1]);
				} else {
					sendingForms(event.target);
				}
			});
			//Событие submit при отправки формы

			//Событие инпут поля имени
			inputFormsformsConsultation[0].addEventListener('input', (event) => {
				validateInputNameCons(event.target);
			});
			inputFormsformsConsultation[0].onkeypress = (event) => {
				let pattern = /[^а-яА-я]/ig;
				if (pattern.test(event.key)) {
					return false;
				}
			};
			//Событие инпут поля имени

			//Событие интуп поля номера телефона
			inputFormsformsConsultation[1].addEventListener('input', (event) => {
				maskInput(event.target);
				validateInputPhoneCons(event.target);
			});
			//Событие интуп поля номера телефона

		//Форма "Остались вопросы" =======================================

	//Формы отправки ===============================================================


	//Калькулятор ==================================================================

		let selectSize = document.querySelector('#size'),
				selectMaterial = document.querySelector('#material'),
				selectOptions = document.querySelector('#options'),
				inputPromoCode = document.querySelector('.promocode'),
				imgFileUpload = document.querySelector('.file_upload'),
				calcPrice = document.querySelector('.calc-price'),
				summPrice = 0;

				function validateSelectSize(a) {
					if (a.options[a.selectedIndex].value != 0 && selectMaterial.options[selectMaterial.selectedIndex].value == 0) {
						calcPrice.classList.remove('validate');
						calcPrice.classList.add('novalidate');
						calcPrice.innerHTML = 'Выберите материал картинки';
					} else if (a.options[a.selectedIndex].value == 0 && selectMaterial.options[selectMaterial.selectedIndex].value != 0) {
						calcPrice.classList.remove('validate');
						calcPrice.classList.add('novalidate');
						calcPrice.innerHTML = 'Выберите размер картинки';
					} else if (a.options[a.selectedIndex].value != 0 && selectMaterial.options[selectMaterial.selectedIndex].value != 0) {
						let promCode;
							if (/IWANTPOPART/i.test(inputPromoCode.value)) {
								promCode = 70;
							} else {
								promCode = 100;
							}
						summPrice = (((+a.options[a.selectedIndex].value * +selectMaterial.options[selectMaterial.selectedIndex].value) * +selectOptions.options[selectOptions.selectedIndex].value) / 100) * promCode;
						calcPrice.classList.remove('novalidate');
						calcPrice.classList.add('validate');
						calcPrice.innerHTML = `Стоимость вашего фото: ${Math.round(summPrice)} рублей`;
					} else if (a.options[a.selectedIndex].value == 0 && selectMaterial.options[selectMaterial.selectedIndex].value == 0) {
						calcPrice.classList.remove('validate');
						calcPrice.classList.add('novalidate');
						calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
					}
				}

				function validateSelectMateriale(a) {
					if (a.options[a.selectedIndex].value != 0 && selectSize.options[selectSize.selectedIndex].value == 0) {
						calcPrice.classList.remove('validate');
						calcPrice.classList.add('novalidate');
						calcPrice.innerHTML = 'Выберите размер картинки';
					} else if (a.options[a.selectedIndex].value == 0 && selectSize.options[selectSize.selectedIndex].value != 0) {
						calcPrice.classList.remove('validate');
						calcPrice.classList.add('novalidate');
						calcPrice.innerHTML = 'Выберите материал картинки';
					}	else if (a.options[a.selectedIndex].value != 0 && selectSize.options[selectSize.selectedIndex].value != 0) {
						let promCode;
							if (/IWANTPOPART/i.test(inputPromoCode.value)) {
								promCode = 70;
							} else {
								promCode = 100;
							}
						summPrice = (((+a.options[a.selectedIndex].value * +selectSize.options[selectSize.selectedIndex].value) * +selectOptions.options[selectOptions.selectedIndex].value) / 100) * promCode;
						calcPrice.classList.remove('novalidate');
						calcPrice.classList.add('validate');
						calcPrice.innerHTML = `Стоимость вашего фото: ${Math.round(summPrice)} рублей`;
					} else if (a.options[a.selectedIndex].value == 0 && selectSize.options[selectSize.selectedIndex].value == 0) {
						calcPrice.classList.remove('validate');
						calcPrice.classList.add('novalidate');
						calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
					}
				}

				function validateSelectOptions (a) {
					if (selectSize.options[selectSize.selectedIndex].value != 0 && selectMaterial.options[selectMaterial.selectedIndex].value != 0) {
						let promCode;
						if (/IWANTPOPART/i.test(inputPromoCode.value)) {
							promCode = 70;
						} else {
							promCode = 100;
						}
						summPrice = (((+selectMaterial.options[selectMaterial.selectedIndex].value * +selectSize.options[selectSize.selectedIndex].value) * +a.options[a.selectedIndex].value) / 100) * promCode;
						calcPrice.classList.remove('novalidate');
						calcPrice.classList.add('validate');
						calcPrice.innerHTML = `Стоимость вашего фото: ${Math.round(summPrice)} рублей`;
					}
				}

				function validatePromoCode(a) {
					let pattern = /IWANTPOPART/i;
						if(pattern.test(a.value)) {
							summPrice = (((+selectMaterial.options[selectMaterial.selectedIndex].value * +selectSize.options[selectSize.selectedIndex].value) * +selectOptions.options[selectOptions.selectedIndex].value)/100) * 70;
							calcPrice.classList.remove('novalidate');
							calcPrice.classList.add('validate');
							calcPrice.innerHTML = `Стоимость вашего фото: ${Math.round(summPrice)} рублей`;
						} else {
							summPrice = ((+selectMaterial.options[selectMaterial.selectedIndex].value * +selectSize.options[selectSize.selectedIndex].value) * +selectOptions.options[selectOptions.selectedIndex].value);
							calcPrice.classList.remove('novalidate');
							calcPrice.classList.add('validate');
							calcPrice.innerHTML = `Стоимость вашего фото: ${Math.round(summPrice)} рублей`;
						}
				}

				selectSize.addEventListener('change', (event) => {
					validateSelectSize(event.target);
				});

				selectMaterial.addEventListener('change', (event) => {
					validateSelectMateriale(event.target);
				});

				selectOptions.addEventListener('change', (event) => {
					validateSelectOptions(event.target);
				});

				inputPromoCode.addEventListener('input', (event) => {
					validatePromoCode(event.target);
				});

		//Форма с калькулятором =======================================
			
			let formCalculation = document.querySelector('.form-calc');
 
			//Валидация загрузки изображения
			function validateInputImgCalc(t) {
				if (!t.value == "") {
					imgFileUpload.children[1].classList.remove('novalidate');
					imgFileUpload.children[1].classList.add('validate');
					imgFileUpload.children[1].innerText = 'Файл загружен';
				} else {
					imgFileUpload.children[1].classList.remove('validate');
					imgFileUpload.children[1].classList.add('novalidate');
				}
			}
			//Валидация загрузки изображения

			//Очистка формы после отправки
			function clearFormCalculation() {
				imgFileUpload.children[1].classList.remove('validate');
				imgFileUpload.children[1].classList.remove('novalidate');
				imgFileUpload.children[1].innerText = 'Файл не выбран';
				calcPrice.classList.remove('validate');
				calcPrice.classList.remove('novalidate');
				calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
				selectSize[0].selected = true;
				selectMaterial[0].selected = true;
				selectOptions[0].selected = true;
			}
			//Очистка формы после отправки

			//Событие инпут в поле загрузки картинки
			imgFileUpload.children[2].addEventListener('input', (event) => {
				validateInputImgCalc(event.target);
			});
			//Событие инпут в поле загрузки картинки

			//Событие submit при отправки формы
			formCalculation.addEventListener('submit', (event) => {
				event.preventDefault();
				if (selectSize.options[selectSize.selectedIndex].value == 0 || selectMaterial.options[selectMaterial.selectedIndex].value == 0 || imgFileUpload.children[2].value == '') {
					validateInputImgCalc(imgFileUpload.children[2]);
					validateSelectSize(selectSize);
					validateSelectMateriale(selectMaterial);
				} else {
					sendingForms(event.target);
				}
			});
			//Событие submit при отправки формы

		//Форма с калькулятором =======================================

	//Калькулятор ==================================================================


	//Форма с консультацией художника ==============================================

		let formFooter = document.querySelector('.form-footer'),
				inputFormFooter = formFooter.querySelectorAll('input'),
				inputFormFooterWrapper = document.querySelector('.input-wrapper');

			//Валидация имени пользователя
			let mesStatusNameFooter = document.createElement('div');
					inputFormFooterWrapper.appendChild(mesStatusNameFooter);
					inputFormFooterWrapper.insertBefore(mesStatusNameFooter, inputFormFooter[1]);

			function validateInputNameFooter(t) {
				if (t.value.length < 3) {
					mesStatusNameFooter.classList.remove('validate');
					mesStatusNameFooter.classList.remove('validate-input_position__name');
					mesStatusNameFooter.classList.add('novalidate');
					mesStatusNameFooter.classList.add('novalidate-input_position__name');
					mesStatusNameFooter.innerHTML = 'Имя должно быть не менее 3 букв';
				} else {
					mesStatusNameFooter.classList.remove('novalidate');
					mesStatusNameFooter.classList.remove('novalidate-input_position__name');
					mesStatusNameFooter.classList.add('validate');
					mesStatusNameFooter.classList.add('validate-input_position__name');
					mesStatusNameFooter.innerHTML = 'Готово';
				}
			}
			//Валидация имени пользователя

			//Валидация номера телефона
			let mesStatusPhoneFooter = document.createElement('div');
					inputFormFooterWrapper.appendChild(mesStatusPhoneFooter);
					inputFormFooterWrapper.insertBefore(mesStatusPhoneFooter, inputFormFooter[2]);

			function validateInputPhoneFooter(t) {
				if (t.value.lastIndexOf('_') != -1 || t.value == '') {
					mesStatusPhoneFooter.classList.remove('validate');
					mesStatusPhoneFooter.classList.remove('validate-input_position__phone');
					mesStatusPhoneFooter.classList.add('novalidate');
					mesStatusPhoneFooter.classList.add('novalidate-input_position__phone');
					mesStatusPhoneFooter.innerHTML = 'Заполните маску номера телефона';
				} else {
					mesStatusPhoneFooter.classList.remove('novalidate');
					mesStatusPhoneFooter.classList.remove('novalidate-input_position__phone');
					mesStatusPhoneFooter.classList.add('validate');
					mesStatusPhoneFooter.classList.add('validate-input_position__phone');
					mesStatusPhoneFooter.innerHTML = 'Готово';
				}
			}
			//Валидация номера телефона


			//Валидация почты
			let mesStatusMailFooter = document.createElement('div');
					inputFormFooterWrapper.appendChild(mesStatusMailFooter);
					inputFormFooterWrapper.insertBefore(mesStatusMailFooter, inputFormFooter[3]);

			function validateInputMailFooter(t) {
				let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if (!pattern.test(t.value)) {
					mesStatusMailFooter.classList.remove('validate');
					mesStatusMailFooter.classList.remove('validate-input_position__mail');
					mesStatusMailFooter.classList.add('novalidate');
					mesStatusMailFooter.classList.add('novalidate-input_position__mail');
					mesStatusMailFooter.innerHTML = 'Введите корректный почтовый адрес';
				} else {
					mesStatusMailFooter.classList.remove('novalidate');
					mesStatusMailFooter.classList.remove('novalidate-input_position__mail');
					mesStatusMailFooter.classList.add('validate');
					mesStatusMailFooter.classList.add('validate-input_position__mail');
					mesStatusMailFooter.innerHTML = 'Готово';
				}
			}
			//Валидация почты

			//Очистка формы после отправки
			function clearFormFooter() {
				mesStatusNameFooter.classList.remove('validate');
				mesStatusPhoneFooter.classList.remove('validate');
				mesStatusMailFooter.classList.remove('validate');
				mesStatusNameFooter.innerHTML = '';
				mesStatusPhoneFooter.innerHTML = '';
				mesStatusMailFooter.innerHTML = '';
			}
			//Очистка формы после отправки

			//Событие submit при отправки формы
			formFooter.addEventListener('submit', (event) => {
				event.preventDefault();
				if (inputFormFooter[0].value.length < 3 || inputFormFooter[1].value.lastIndexOf('_') != -1 || !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(inputFormFooter[2].value)) {
					validateInputNameFooter(inputFormFooter[0]);
					validateInputPhoneFooter(inputFormFooter[1]);
					validateInputMailFooter(inputFormFooter[2]);
				} else {
					sendingForms(event.target);
				}
			});
			//Событие submit при отправки формы

			//Событие инпут поля имени
			inputFormFooter[0].addEventListener('input', (event) => {
				validateInputNameFooter(event.target);
			});
			inputFormFooter[0].onkeypress = (event) => {
				let pattern = /[^а-яА-я]/ig;
				if (pattern.test(event.key)) {
					return false;
				}
			};
			//Событие инпут поля имени

			//Событие интуп поля номера телефона
			inputFormFooter[1].addEventListener('input', (event) => {
				maskInput(event.target);
				validateInputPhoneFooter(event.target);
			});
			//Событие интуп поля номера телефона

			//Событие интуп поля с почтой
			inputFormFooter[2].addEventListener('input', (event) => {
				validateInputMailFooter(event.target);
			});
			//Событие интуп поля с почтой

			//Валидация комментария
			inputFormFooter[3].onkeypress = (event) => {
				let pattern = /[^а-яА-я]/ig;
				if (pattern.test(event.key)) {
					return false;
				}
			};
			//Валидация комментария


	//Форма с консультацией художника ==============================================



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


	//Аккордеон ====================================================================

		let accordionWrapper = document.querySelector('#accordion'),
				accordionItems = accordionWrapper.querySelectorAll('.accordion-heading'),
				accordionContent = accordionWrapper.querySelectorAll('.accordion-block');

				function hideAccordionContent(a) {
					for (let i = a; i < accordionContent.length; i++) {
						accordionContent[i].style.display = 'none';
					}
				}

				hideAccordionContent(0);

				function passiveAccordionItems(b) {
					for (let i = b; i < accordionItems.length; i++) {
						accordionItems[i].classList.remove('active-accordion');
					}
				}

				passiveAccordionItems(0);

				accordionWrapper.addEventListener('click', (event) =>{
					let target = event.target;
					if (!target.classList.contains('accordion-heading')) {
						target = target.parentNode;
					}
					if (target && target.classList.contains('active-accordion')) {
							passiveAccordionItems(0);
							hideAccordionContent(0);
					} else if (target && target.classList.contains('accordion-heading')) {
						for (let i = 0; i < accordionItems.length; i++) {
							if (target == accordionItems[i]) {
								passiveAccordionItems(0);
								hideAccordionContent(0);
								accordionItems[i].classList.add('active-accordion');
								accordionContent[i].classList.add('fadeInDown');
								accordionContent[i].style.cssText = 'animation-duration: 1s';
								accordionContent[i].style.display = 'block';
							}
						}
					}
				});

	//Аккордеон ====================================================================


	//Подгружаемая информация при клике на кнопку "Посмотреть больше стилей" =======

		let btnMoreStyle = document.querySelector('.button-styles'),
				contentStyles = document.querySelectorAll('.styles-2');

				btnMoreStyle.addEventListener('click', () => {
					btnMoreStyle.style.display = 'none';
					contentStyles.forEach((item) => {
						if(window.innerWidth >= 768) {
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


});