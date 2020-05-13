export function slider() {
	let sliderLink = document.querySelectorAll(".slider__radio");
	let body = document.querySelector("body");
	let sliderPopup = document.querySelectorAll(".slider__slide");

	if (sliderLink[0]) {
		sliderPopup[0].classList.add("js-show");
		for (let i = 0; i < sliderLink.length; i++) {
			sliderLink[i].addEventListener("click", function(evt) {
				if (sliderPopup[0]) {
					sliderPopup[0].classList.remove("js-show");
				}
				if (sliderPopup[sliderLink.length - 1]) {
					sliderPopup[sliderLink.length - 1].classList.remove("js-show");
				}
				if (sliderPopup[i-1] ) {
					sliderPopup[i-1].classList.remove("js-show");
				}
				if (sliderPopup[i+1] ) {
					sliderPopup[i+1].classList.remove("js-show");
				}
				// if (sliderPopup[i+1].classList.contains("js-show")) {
				// 	sliderPopup[i+1].classList.remove("js-show");
				// }
				sliderPopup[i].classList.add("js-show");
				if (sliderPopup[0].classList.contains("js-show")) {
					body.style.backgroundColor = "#849d8f";
				}
				if (sliderPopup[1].classList.contains("js-show")) {
					body.style.backgroundColor = "#96a4b4";
				}
				if (sliderPopup[2].classList.contains("js-show")) {
					body.style.backgroundColor = "#a18f88";
				}

			})
		}
	}
}