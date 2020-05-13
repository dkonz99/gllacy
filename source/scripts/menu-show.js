export function menuShow() {
	let catalogLink = document.querySelector(".main-header__sections");
	let searchLink = document.querySelector(".main-header__search");
	let entranceLink = document.querySelector(".main-header__entrance");
	let basketLink = document.querySelector(".main-header__basket--catalog");
	let catalogPopup = document.querySelector(".catalog-form");
	let searchPopup = document.querySelector(".search-popup");
	let entrancePopup = document.querySelector(".entrance-popup");
	let basketPopup = document.querySelector(".basket-products");

	if (catalogLink) {
		catalogLink.addEventListener("click", function(evt) {
			evt.preventDefault();
			catalogPopup.classList.toggle("js-show");
		});
		searchLink.addEventListener("click", function(evt) {
			evt.preventDefault();
			searchPopup.classList.toggle("js-show");
		});
		entranceLink.addEventListener("click", function(evt) {
			evt.preventDefault();
			entrancePopup.classList.toggle("js-show");
		});
		window.addEventListener("keydown", function(evt) {
			if(evt.keyCode === 27) {
				evt.preventDefault();
				catalogPopup.classList.remove("js-show");
				searchPopup.classList.remove("js-show");
				entrancePopup.classList.remove("js-show");
			}
		});
	}
	if (basketLink) {
		basketLink.addEventListener("click", function(evt) {
			evt.preventDefault();
			basketPopup.classList.toggle("js-show");
		});
		window.addEventListener("keydown", function(evt) {
			if(evt.keyCode === 27) {
				evt.preventDefault();
				basketPopup.classList.remove("js-show");
			}
		});
	}
}