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
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      660: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      880: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      1060: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 70,
      },
      1220: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
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
  let swiper;

  function initializeSwiper() {
    swiper = new Swiper(".swiper-container-for-car", {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      speed: 1400,
      loop: false,
      navigation: {
        nextEl: ".custom-button-next-for-car",
        prevEl: ".custom-button-prev-for-car",
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        860: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
        },
      },
      on: {
        slideChange: function () {
          toggleNavigationButtons();
        },
      },
    });

    toggleNavigationButtons();
  }

  function toggleNavigationButtons() {
    if (swiper) {
      const prevButton = document.querySelector(".custom-button-prev-for-car");
      const nextButton = document.querySelector(".custom-button-next-for-car");

      prevButton.classList.toggle("swiper-button-disabled", swiper.isBeginning);
      nextButton.classList.toggle("swiper-button-disabled", swiper.isEnd);
    }
  }

  function handleResize() {
    if (window.innerWidth > 599) {
      if (!swiper) initializeSwiper();
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);
});
