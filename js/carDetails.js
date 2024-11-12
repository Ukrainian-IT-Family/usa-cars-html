document.addEventListener("DOMContentLoaded", function () {
  let swiperThumbs = new Swiper(".swiper-list", {
    loop: false,
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
  });

  let mainSwiper = new Swiper(".main-swiper", {
    loop: false,
    spaceBetween: 20,
    navigation: {
      prevEl: ".swiper-button-prev-details",
      nextEl: ".swiper-button-next-details",
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
        ".swiper-button-prev-details"
      );
      const nextButton = mainSwiper.el.querySelector(
        ".swiper-button-next-details"
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
