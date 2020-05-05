function accordionSection() {

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

	accordionWrapper.addEventListener('click', (event) => {
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

}


module.exports = accordionSection;