export function filters() {
	let filtersButton = document.querySelector(".filters__button");
	let filtersItem = document.querySelectorAll(".products__item");
	let filtersText = document.querySelectorAll(".products__text");
	let filtersCheckbox = document.querySelector(".filters__fillers");
	let filtersSorting = document.querySelector('[name="sorting"]');
	let filtersPrice = document.querySelectorAll(".products__price");

	if (filtersCheckbox) {
	let filtersInputCheckbox = filtersCheckbox.querySelectorAll('[type="checkbox"]');
	let filtersLabelCheckbox = filtersCheckbox.querySelectorAll('label');
	let filtersOption = filtersSorting.querySelectorAll('option');


	for (let i = 0; i < filtersItem.length; i++) {
		filtersItem[i].classList.add("js-show");
				
	}
	
	
	
	filtersButton.addEventListener("click", function(evt) {
		evt.preventDefault();

		function filtersDelete() {
			for (let i = 0; i < filtersItem.length; i++) {
				filtersItem[i].classList.remove("js-show");
			}
		}

		filtersDelete();
		

		if (filtersInputCheckbox[0].checked) {
			for (let i = 0; i < filtersText.length; i++) {
				if (filtersText[i].innerHTML.match(/шоколад/g) != null) {
					filtersItem[i].classList.add("js-show");
				}
					
			}
		}
		if (filtersInputCheckbox[1].checked) {
			for (let i = 0; i < filtersText.length; i++) {
				if (filtersText[i].innerHTML.match(/присыпк/g) != null) {
					filtersItem[i].classList.add("js-show");
				}
					
			}	
		}
		if (filtersInputCheckbox[2].checked) {
			for (let i = 0; i < filtersText.length; i++) {
				if (filtersText[i].innerHTML.match(/цельн/g) != null) {
					filtersItem[i].classList.add("js-show");
				}
					
			}	
		}
		if (filtersInputCheckbox[3].checked) {
			for (let i = 0; i < filtersText.length; i++) {
				if (filtersText[i].innerHTML.match(/сироп/g) != null) {
					filtersItem[i].classList.add("js-show");
				}
					
			}	
		}
		if (filtersInputCheckbox[4].checked) {
			for (let i = 0; i < filtersText.length; i++) {
				if (filtersText[i].innerHTML.match(/джем/g) != null) {
					filtersItem[i].classList.add("js-show");
				}
					
			}	
		}
		if (!filtersInputCheckbox[0].checked &&
			!filtersInputCheckbox[1].checked &&
			!filtersInputCheckbox[2].checked &&
			!filtersInputCheckbox[3].checked &&
			!filtersInputCheckbox[4].checked) {
				for (let i = 0; i < filtersItem.length; i++) {
					filtersItem[i].classList.add("js-show");
				
				}
		}


		// if (filtersSorting.value == "по популярности") {
			
		// }

		// if (filtersSorting.value == "сначала недорогие") {
		// 	function filtersCheap() {
				
		// 		for (let i = 0; i < filtersText.length; i++) {
		// 			if (getComputedStyle(filtersItem[i]).display != "none") {
		// 				console.log(parseInt(filtersPrice[i].innerHTML));

		// 			}
		// 		}
		// 	}
			
		// 	filtersCheap();
		// }

		// if (filtersSorting.value == "сначала дорогие") {
			
		// }

		// if (filtersSorting.value == "по жирности") {
			
		// }
	})
	}
}