document.addEventListener("DOMContentLoaded", function () {
  let swiperComments;

  function initializeSwiperComments() {
    swiperComments = new Swiper(".swiper-container-for-comments", {
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
          toggleNavigationButtonsComments();
        },
      },
    });

    toggleNavigationButtonsComments();
  }

  function toggleNavigationButtonsComments() {
    if (swiperComments) {
      const prevButton = document.querySelector(
        ".custom-button-prev-for-comments"
      );
      const nextButton = document.querySelector(
        ".custom-button-next-for-comments"
      );

      prevButton.classList.toggle(
        "swiper-button-disabled",
        swiperComments.isBeginning
      );
      nextButton.classList.toggle(
        "swiper-button-disabled",
        swiperComments.isEnd
      );
    }
  }

  function checkCommentsOverflow() {
    const commentTexts = document.querySelectorAll(
      ".comments__user-comment-text"
    );
    commentTexts.forEach(function (text) {
      const link = text.nextElementSibling;

      text.classList.remove("expanded");

      if (text.scrollHeight > text.clientHeight + 1) {
        link.style.display = "block";
      } else {
        link.style.display = "none";
      }
    });
  }

  function toggleComment(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const commentText = link.previousElementSibling;

    const isExpanded = commentText.classList.toggle("expanded");
    link.textContent = isExpanded ? "Приховати" : "Читати більше";
    link.setAttribute("aria-expanded", isExpanded);
  }

  function addCommentLinkListeners() {
    const commentLinks = document.querySelectorAll(
      ".comments__user-comment-link"
    );
    commentLinks.forEach(function (link) {
      link.addEventListener("click", toggleComment);
    });
  }

  function initializeComponents() {
    initializeSwiperComments();
    addCommentLinkListeners();
    checkCommentsOverflow();
  }

  function handleResize() {
    checkCommentsOverflow();
  }

  initializeComponents();

  window.addEventListener("resize", handleResize);
});
