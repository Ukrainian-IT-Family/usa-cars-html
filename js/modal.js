document.addEventListener("DOMContentLoaded", function () {
  function openModal(modalId) {
    document.getElementById(modalId).classList.add("modal-overlay--active");
    document.body.classList.add("no-scroll");
  }

  function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("modal-overlay--active");
    document.body.classList.remove("no-scroll");
  }

  document.addEventListener("click", function (event) {
    const modalTrigger = event.target.closest("[data-modal-target]");
    if (modalTrigger) {
      const modalId = modalTrigger.getAttribute("data-modal-target");
      openModal(modalId);
    }

    const modalCloseTrigger = event.target.closest("[data-modal-close]");
    if (modalCloseTrigger) {
      const modalId = modalCloseTrigger.getAttribute("data-modal-close");
      closeModal(modalId);
    }
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        overlay.classList.remove("modal-overlay--active");
        document.body.classList.remove("no-scroll");
      }
    });
  });

  function toggleOptions(picker) {
    const isOpen = picker.classList.contains("open");
    const input = picker.querySelector(".modal__time-picker-input");

    document.querySelectorAll(".modal__time-picker").forEach((p) => {
      if (p !== picker) {
        p.classList.remove("open");
        p.querySelector(".modal__time-picker-input").setAttribute(
          "aria-expanded",
          "false"
        );
      }
    });

    if (isOpen) {
      picker.classList.remove("open");
      input.setAttribute("aria-expanded", "false");
    } else {
      picker.classList.add("open");
      input.setAttribute("aria-expanded", "true");
    }
  }

  function selectOption(element) {
    const picker = element.closest(".modal__time-picker");
    const input = picker.querySelector(".modal__time-picker-input");

    input.value = element.innerText;

    picker.classList.remove("open");
    input.setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("modal__time-picker-display") ||
      event.target.classList.contains("modal__time-picker-input") ||
      event.target.classList.contains("modal__time-picker-icon")
    ) {
      event.stopPropagation();
      toggleOptions(event.target.closest(".modal__time-picker"));
    } else if (event.target.classList.contains("modal__time-picker-option")) {
      event.stopPropagation();
      selectOption(event.target);
    } else {
      document.querySelectorAll(".modal__time-picker").forEach((picker) => {
        picker.classList.remove("open");
        picker
          .querySelector(".modal__time-picker-input")
          .setAttribute("aria-expanded", "false");
      });
    }
  });

  document.addEventListener("keydown", function (event) {
    const activeElement = document.activeElement;

    if (
      activeElement.classList.contains("modal__time-picker-display") ||
      activeElement.classList.contains("modal__time-picker-input")
    ) {
      if (
        event.key === "Enter" ||
        event.key === " " ||
        event.key === "ArrowDown"
      ) {
        event.preventDefault();
        toggleOptions(activeElement.closest(".modal__time-picker"));
      }
    } else if (activeElement.classList.contains("modal__time-picker-option")) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectOption(activeElement);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextOption = activeElement.nextElementSibling;
        if (nextOption) {
          nextOption.focus();
        }
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        const prevOption = activeElement.previousElementSibling;
        if (prevOption) {
          prevOption.focus();
        } else {
          const picker = activeElement.closest(".modal__time-picker");
          picker.querySelector(".modal__time-picker-display").focus();
        }
      } else if (event.key === "Escape") {
        event.preventDefault();
        const picker = activeElement.closest(".modal__time-picker");
        picker.classList.remove("open");
        picker
          .querySelector(".modal__time-picker-input")
          .setAttribute("aria-expanded", "false");
        picker.querySelector(".modal__time-picker-display").focus();
      }
    }
  });
});
