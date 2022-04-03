let slideIndex = 1;

function setSlide(input, index) {
  slideIndex = index;
  let element = document.querySelector(`#${input}`);

  let slides = [...document.querySelector(".slides").children];

  slides.forEach((slide) => {
    slide.classList.remove("slide-item-active");
  });

  element.classList.add("slide-item-active");
}

setInterval(() => {
  slideIndex += 1;
  if (slideIndex == 4) slideIndex = 1;
  setSlide(`slide-${slideIndex}`, slideIndex);
}, 4000);
