document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container-for-comments", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    speed: 1400,
    loop: false,
    navigation: {
      nextEl: ".custom-button-next-for-comments",
      prevEl: ".custom-button-prev-for-comments",
    },
    on: {
      slideChange: function () {
        toggleNavigationButtons();
      },
    },
  });

  function toggleNavigationButtons() {
    const prevButton = document.querySelector(
      ".custom-button-prev-for-comments"
    );
    const nextButton = document.querySelector(
      ".custom-button-next-for-comments"
    );

    prevButton.classList.toggle("swiper-button-disabled", swiper.isBeginning);
    nextButton.classList.toggle("swiper-button-disabled", swiper.isEnd);
  }

  toggleNavigationButtons();
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container-for-car", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    speed: 1400,
    loop: false,
    navigation: {
      nextEl: ".custom-button-next-for-car",
      prevEl: ".custom-button-prev-for-car",
    },
    on: {
      slideChange: function () {
        toggleNavigationButtons();
      },
    },
  });

  function toggleNavigationButtons() {
    const prevButton = document.querySelector(".custom-button-prev-for-car");
    const nextButton = document.querySelector(".custom-button-next-for-car");

    prevButton.classList.toggle("swiper-button-disabled", swiper.isBeginning);
    nextButton.classList.toggle("swiper-button-disabled", swiper.isEnd);
  }

  toggleNavigationButtons();
});
