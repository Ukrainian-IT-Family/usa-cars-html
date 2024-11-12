function submitForm() {
  document.getElementById("contactForm").style.display = "none";

  document.getElementById("successMessage").style.display = "block";
}

document
  .querySelector(".header__burger")
  .addEventListener("click", function () {
    document.getElementById("menuOverlay").classList.add("active");
    document.body.classList.add("no-scroll");
  });

document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("menuOverlay").classList.remove("active");
  document.body.classList.remove("no-scroll");
});

let currentSlide = 0;
const slides = document.querySelectorAll(".promotion-slide");
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function startSlider() {
  if (window.innerWidth >= 768) {
    slideInterval = setInterval(nextSlide, 5000);
  }
}

function stopSlider() {
  clearInterval(slideInterval);
}

function handleResize() {
  if (window.innerWidth < 768) {
    stopSlider();
  } else {
    stopSlider();
    startSlider();
  }
}

startSlider();

window.addEventListener("resize", handleResize);
