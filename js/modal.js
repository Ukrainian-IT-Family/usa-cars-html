// Open modal by ID
function openModal(modalId) {
  document.getElementById(modalId).classList.add("modal-overlay--active");
}

// Close modal by ID
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("modal-overlay--active");
}

// Handle click outside modal to close
function handleClickOutside(event) {
  const modalOverlay = event.currentTarget;
  const modal = modalOverlay.querySelector(".modal");
  if (event.target === modalOverlay && !modal.contains(event.target)) {
    closeModal(modalOverlay.id);
  }
}

// Add event listeners to all modal overlays
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", handleClickOutside);
});

// Функция для переключения раскрытия дропдауна
function toggleDropdown(picker) {
  const isOpen = picker.classList.contains("open");

  // Закрываем все другие открытые дропдауны
  document.querySelectorAll(".modal__time-picker").forEach((p) => {
    if (p !== picker) {
      p.classList.remove("open");
    }
  });

  // Переключаем текущий дропдаун
  if (isOpen) {
    picker.classList.remove("open");
  } else {
    picker.classList.add("open");
  }
}

// Функция для выбора опции
function selectOption(element) {
  const picker = element.closest(".modal__time-picker");
  const selectedDisplay = picker.querySelector(".modal__time-picker-selected");

  // Обновляем выбранное значение
  selectedDisplay.innerText = element.innerText;

  // Закрываем дропдаун
  picker.classList.remove("open");
}

// Закрытие дропдаунов при клике вне
document.addEventListener("click", function (event) {
  if (!event.target.closest(".modal__time-picker")) {
    document.querySelectorAll(".modal__time-picker").forEach((picker) => {
      picker.classList.remove("open");
    });
  }
});

// Добавление обработчиков событий к опциям
document.querySelectorAll(".modal__time-picker-option").forEach((option) => {
  option.addEventListener("click", function (e) {
    e.stopPropagation(); // Предотвращаем всплытие события
    selectOption(this);
  });

  // Обработка клавиатуры для опций
  option.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectOption(this);
    }
  });
});

// Добавление обработчиков для клавиатуры на тогглы
document.querySelectorAll(".modal__time-picker-toggle").forEach((toggle) => {
  toggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(this.parentElement);
    }
  });
});
