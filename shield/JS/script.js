const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// ************************************************************************

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#ff1b6b ${scrollValue}%,#d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// ************************************************************************

const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const numItems = carouselItems.length;
const buffer = Array.from(carouselItems).concat(Array.from(carouselItems));
let currentIndex = 0;
let isPaused = false;

function showSlide(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }
  carousel.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function autoSlide() {
  if (!isPaused) {
    showSlide(currentIndex + 1);
  }
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + numItems * 2) % (numItems * 2);
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % (numItems * 2);
  showSlide(currentIndex);
});

carousel.addEventListener("mouseover", () => {
  isPaused = true;
});

carousel.addEventListener("mouseout", () => {
  isPaused = false;
});

setInterval(autoSlide, 3000);
// ********************************************************
const botObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("show");
    } else {
      entries[0].target.classList.remove("show");
    }
  });
});

const bottomElements = document.querySelectorAll(".bottomAnim");
bottomElements.forEach((el) => botObserver.observe(el));
