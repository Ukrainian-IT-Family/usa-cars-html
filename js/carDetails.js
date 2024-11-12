document.addEventListener("DOMContentLoaded", function () {
  let swiperThumbs = new Swiper(".swiper-list", {
    loop: false,
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
      860: {
        slidesPerView: 4,
      },
      1060: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 6,
      },
    },
  });

  let mainSwiper = new Swiper(".main-swiper", {
    loop: false,
    spaceBetween: 20,
    navigation: {
      prevEl: ".swiper-button-prev-details--for-mobile",
      nextEl: ".swiper-button-next-details--for-mobile",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return number;
      },
      formatFractionTotal: function (number) {
        return number;
      },
    },
    thumbs: {
      swiper: swiperThumbs,
    },
    breakpoints: {
      767: {
        navigation: {
          prevEl: ".swiper-button-prev-details--for-desktop",
          nextEl: ".swiper-button-next-details--for-desktop",
        },
      },
    },
    on: {
      init: function () {
        toggleNavigationButtons.call(this);
      },
      slideChange: function () {
        toggleNavigationButtons.call(this);
      },
    },
  });

  function toggleNavigationButtons() {
    if (mainSwiper) {
      const prevButton = mainSwiper.el.querySelector(
        ".swiper-button-prev-details--for-desktop"
      );
      const nextButton = mainSwiper.el.querySelector(
        ".swiper-button-next-details--for-desktop"
      );

      if (prevButton && nextButton) {
        console.log(
          "isBeginning:",
          mainSwiper.isBeginning,
          "isEnd:",
          mainSwiper.isEnd
        );
        prevButton.classList.toggle(
          "swiper-button-disabled",
          mainSwiper.isBeginning
        );
        nextButton.classList.toggle("swiper-button-disabled", mainSwiper.isEnd);
      }
    }
  }

  swiperThumbs.init();
  mainSwiper.init();
});
