function openModal(modalId) {
  document.getElementById(modalId).classList.add("modal-overlay--active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("modal-overlay--active");
}

function handleClickOutside(event) {
  const modalOverlay = event.currentTarget;
  const modal = modalOverlay.querySelector(".modal");
  if (event.target === modalOverlay && !modal.contains(event.target)) {
    closeModal(modalOverlay.id);
  }
}

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", handleClickOutside);
});

function toggleDropdown(picker) {
  const isOpen = picker.classList.contains("open");

  document.querySelectorAll(".modal__time-picker").forEach((p) => {
    if (p !== picker) {
      p.classList.remove("open");
    }
  });

  if (isOpen) {
    picker.classList.remove("open");
  } else {
    picker.classList.add("open");
  }
}

function selectOption(element) {
  const picker = element.closest(".modal__time-picker");
  const selectedDisplay = picker.querySelector(".modal__time-picker-selected");

  selectedDisplay.innerText = element.innerText;

  picker.classList.remove("open");
}

document.addEventListener("click", function (event) {
  if (!event.target.closest(".modal__time-picker")) {
    document.querySelectorAll(".modal__time-picker").forEach((picker) => {
      picker.classList.remove("open");
    });
  }
});

document.querySelectorAll(".modal__time-picker-option").forEach((option) => {
  option.addEventListener("click", function (e) {
    e.stopPropagation();
    selectOption(this);
  });

  option.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectOption(this);
    }
  });
});

document.querySelectorAll(".modal__time-picker-toggle").forEach((toggle) => {
  toggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(this.parentElement);
    }
  });
});
