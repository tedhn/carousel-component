const nextButtonElement = document.querySelector(".nextButton");
const previousButtonElement = document.querySelector(".previousButton");

const imageCollection = document.querySelectorAll(".images");

let index = 0;

nextButtonElement.addEventListener("click", () => {
	imageCollection[index].classList.remove("visible");
	index = (index + 1) % 3;
	imageCollection[index].classList.add("visible");
});
previousButtonElement.addEventListener("click", () => {
	imageCollection[index].classList.remove("visible");
	index = index - 1 < 0 ? 2 : index - 1;
	imageCollection[index].classList.add("visible");
});
