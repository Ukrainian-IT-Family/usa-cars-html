function submitForm() {
  document.getElementById("contactForm").style.display = "none";

  document.getElementById("successMessage").style.display = "block";
}

let currentSlide = 0;
const slides = document.querySelectorAll(".promotion-slide");
const totalSlides = slides.length;

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

setInterval(nextSlide, 5000);
