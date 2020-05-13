export function feedback() {

let feedbackLink = document.querySelector(".map-address__button");
let feedbackPopup = document.querySelector(".feedback");
let feedbackClose = document.querySelector(".feedback__close");
let feedbackWrapper = document.querySelector(".modal-wrapper");

if (feedbackLink) {
    feedbackLink.addEventListener("click", function(evt) {
	evt.preventDefault();
    feedbackPopup.classList.add("js-show");
    feedbackWrapper.classList.add("js-show");

    });
    feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("js-show");
    feedbackWrapper.classList.remove("js-show");

    });
    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            evt.preventDefault();
            feedbackPopup.classList.remove("js-show");
            feedbackWrapper.classList.remove("js-show");
        }
    

    });
}
}