function toggleDetails(button) {
  const item = button.closest(".process-steps__item");
  const details = item.querySelector(".process-steps__details");

  const isMobile = window.innerWidth <= 768;

  if (
    details.classList.contains("open") ||
    details.classList.contains("open-mobile")
  ) {
    if (isMobile) {
      details.classList.remove("open-mobile");
      details.classList.add("closing-mobile");
    } else {
      details.classList.remove("open");
      details.classList.add("closing");
    }

    details.addEventListener("animationend", function handler() {
      if (isMobile) {
        details.classList.remove("closing-mobile");
      } else {
        details.classList.remove("closing");
      }
      details.removeEventListener("animationend", handler);
    });
  } else {
    if (isMobile) {
      details.classList.add("open-mobile");
    } else {
      details.classList.add("open");
    }
  }
  button.querySelector(".process-steps__toggle").classList.toggle("open");
}
