function toggleDetails(button) {
  const details = button
    .closest(".process-steps__item")
    .querySelector(".process-steps__details");

  if (details.classList.contains("open")) {
    details.classList.remove("open");

    details.classList.add("closing");
    details.addEventListener("animationend", function handler() {
      details.classList.remove("closing");
      details.removeEventListener("animationend", handler);
    });
  } else {
    details.classList.add("open");
  }
  button.classList.toggle("open");
}
