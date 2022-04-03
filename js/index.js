let slideIndex = 1;
let remainingTime = 70000;

function setSlide(input, index) {
  slideIndex = index;
  let element = document.querySelector(`#${input}`);

  let slides = [...document.querySelector(".slides").children];

  slides.forEach((slide) => {
    slide.classList.remove("slide-item-active");
  });

  element.classList.add("slide-item-active");
}

function setTime() {
  if (remainingTime == 0) return;
  let hour = Math.floor(remainingTime / 3600);
  let minute = Math.floor((remainingTime % 3600) / 60);
  let second = (remainingTime % 3600) % 60;

  document.querySelector("#hour").innerHTML = hour < 10 ? `0${hour}` : hour;
  document.querySelector("#minute").innerHTML =
    minute < 10 ? `0${minute}` : minute;
  document.querySelector("#second").innerHTML =
    second < 10 ? `0${second}` : second;
}

setInterval(() => {
  slideIndex += 1;
  if (slideIndex == 4) slideIndex = 1;
  setSlide(`slide-${slideIndex}`, slideIndex);
}, 4000);

setInterval(() => {
  remainingTime -= 1;
  setTime();
}, 1000);
