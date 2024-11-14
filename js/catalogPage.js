document
  .getElementById("gridViewButton")
  .classList.add("cars__catalog-filters__item--active");
document.querySelector(".cars__catalog-list--grid").style.display = "grid";
document.querySelector(".cars__catalog-list--list").style.display = "none";

document
  .getElementById("listViewButton")
  .addEventListener("click", function () {
    document
      .getElementById("listViewButton")
      .classList.add("cars__catalog-filters__item--active");
    document
      .getElementById("gridViewButton")
      .classList.remove("cars__catalog-filters__item--active");

    document.querySelector(".cars__catalog-list--list").style.display = "flex";
    document.querySelector(".cars__catalog-list--grid").style.display = "none";
  });

document
  .getElementById("gridViewButton")
  .addEventListener("click", function () {
    document
      .getElementById("gridViewButton")
      .classList.add("cars__catalog-filters__item--active");
    document
      .getElementById("listViewButton")
      .classList.remove("cars__catalog-filters__item--active");

    document.querySelector(".cars__catalog-list--grid").style.display = "grid";
    document.querySelector(".cars__catalog-list--list").style.display = "none";
  });

document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const yearLists = document.querySelectorAll(".selector__list--years");

  yearLists.forEach((yearList) => {
    for (let year = 1980; year <= currentYear; year++) {
      const listItem = document.createElement("li");
      listItem.className = "selector__item";
      listItem.textContent = year;
      listItem.setAttribute("data-value", year);
      yearList.appendChild(listItem);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sortFilter = {
    value: "",
    displayText: "",
    placeholder: "Сортування",
    selectorId: "sortFilter",
  };

  function initSortFilter() {
    const selector = document.getElementById(sortFilter.selectorId);
    const button = selector.querySelector(".selector__button");
    const input = selector.querySelector(".selector__input");
    const items = Array.from(selector.querySelectorAll(".selector__item"));

    input.placeholder = sortFilter.placeholder;

    button.addEventListener("click", function () {
      selector.classList.toggle("selector--open");
      if (selector.classList.contains("selector--open")) {
        input.placeholder = sortFilter.displayText || sortFilter.placeholder;
        input.removeAttribute("readonly");
        input.focus();
      } else {
        closeDropdown();
      }
    });

    input.addEventListener("input", function () {
      const filter = input.value.toLowerCase();
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "block" : "none";
      });
    });

    items.forEach((item) => {
      item.addEventListener("click", function () {
        sortFilter.value = item.getAttribute("data-value");
        sortFilter.displayText = item.textContent.trim();
        input.value = "";
        input.placeholder = sortFilter.displayText;
        closeDropdown();
      });
    });

    document.addEventListener("click", function (event) {
      if (!selector.contains(event.target)) {
        closeDropdown();
      }
    });

    function closeDropdown() {
      selector.classList.remove("selector--open");
      input.setAttribute("readonly", true);
      input.value = "";
      input.placeholder = sortFilter.displayText || sortFilter.placeholder;
      items.forEach((item) => (item.style.display = "block"));
    }
  }

  initSortFilter();
});

document.addEventListener("DOMContentLoaded", function () {
  const filters = {
    brand: { value: "", selectorId: "brandSelector", placeholder: "Оберіть" },
    model: { value: "", selectorId: "modelSelector", placeholder: "Оберіть" },
    yearFrom: { value: "", selectorId: "yearFromSelector", placeholder: "Від" },
    yearTo: { value: "", selectorId: "yearToSelector", placeholder: "До" },
    priceFrom: {
      value: "",
      selectorId: "priceFromSelector",
      placeholder: "Від",
    },
    priceTo: { value: "", selectorId: "priceToSelector", placeholder: "До" },
    mileageFrom: {
      value: "",
      selectorId: "mileageFromSelector",
      placeholder: "Від",
    },
    mileageTo: {
      value: "",
      selectorId: "mileageToSelector",
      placeholder: "До",
    },
    engineVolumeFrom: {
      value: "",
      selectorId: "engineVolumeFromSelector",
      placeholder: "Від",
    },
    engineVolumeTo: {
      value: "",
      selectorId: "engineVolumeToSelector",
      placeholder: "До",
    },
    sort: { value: "", selectorId: "sortSelector", placeholder: "Звичайне" },
    transmission: {
      values: [],
      ids: ["transmissionManual", "transmissionAutomatic"],
    },
    carStatus: { values: [], ids: ["allCars", "inStock", "inTransit"] },
    driveType: { values: [], ids: ["driveFront", "driveRear", "driveFull"] },
    fuelType: {
      values: [],
      ids: [
        "fuelBenzine",
        "fuelGas",
        "fuelHybrid",
        "fuelDiesel",
        "fuelElectric",
      ],
    },
  };

  function initCheckboxFilter(filterKey) {
    filters[filterKey].ids.forEach((id) => {
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.addEventListener("change", function () {
          const value = checkbox.getAttribute("data-value");
          if (checkbox.checked) {
            filters[filterKey].values.push(value);
          } else {
            filters[filterKey].values = filters[filterKey].values.filter(
              (val) => val !== value
            );
          }
          console.log(
            `${filterKey} filter updated:`,
            filters[filterKey].values
          );
        });
      }
    });
  }

  function initSelector(selectorId, filterKey) {
    const selector = document.getElementById(selectorId);
    const button = selector.querySelector(".selector__button");
    const input = selector.querySelector(".selector__input");
    const items = selector.querySelectorAll(".selector__item");

    input.placeholder = filters[filterKey].placeholder.trim();

    button.addEventListener("click", function () {
      selector.classList.toggle("selector--open");
      if (selector.classList.contains("selector--open")) {
        input.placeholder = (
          filters[filterKey].displayText || filters[filterKey].placeholder
        ).trim();
        input.removeAttribute("readonly");
        input.focus();
      } else {
        input.setAttribute("readonly", true);
        input.placeholder = (
          filters[filterKey].displayText || filters[filterKey].placeholder
        ).trim();
        input.value = "";
      }
    });

    items.forEach((item) => {
      item.addEventListener("click", function () {
        filters[filterKey].value = item.getAttribute("data-value");
        filters[filterKey].displayText = item.textContent.trim();
        input.value = "";
        input.placeholder = filters[filterKey].displayText;
        selector.classList.remove("selector--open");
        input.setAttribute("readonly", true);

        items.forEach((item) => {
          item.style.display = "flex";
        });
      });
    });

    input.addEventListener("input", function () {
      const filter = input.value.toLowerCase();
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "block" : "none";
      });
    });

    document.addEventListener("click", function (event) {
      if (!selector.contains(event.target)) {
        selector.classList.remove("selector--open");
        input.setAttribute("readonly", true);
        input.value = "";
        input.placeholder = (
          filters[filterKey].displayText || filters[filterKey].placeholder
        ).trim();
      }
    });
  }

  initSelector("brandSelector", "brand");
  initSelector("modelSelector", "model");
  initSelector("yearFromSelector", "yearFrom");
  initSelector("yearToSelector", "yearTo");
  initSelector("priceFromSelector", "priceFrom");
  initSelector("priceToSelector", "priceTo");
  initSelector("mileageFromSelector", "mileageFrom");
  initSelector("mileageToSelector", "mileageTo");
  initSelector("engineVolumeFromSelector", "engineVolumeFrom");
  initSelector("engineVolumeToSelector", "engineVolumeTo");
  initSelector("sortSelector", "sort");

  initCheckboxFilter("transmission");
  initCheckboxFilter("fuelType");
  initCheckboxFilter("driveType");
  initCheckboxFilter("carStatus");

  const filterButton = document.querySelector(".selector__filter-button");
  const modalPanel = document.querySelector(".cars__catalog-left-panel");
  const catalogListContainer = document.querySelector(
    ".cars__catalog-list-container"
  );
  const catalogHeader = document.querySelector(".cars__catalog-header");

  function isMobileView() {
    return window.innerWidth <= 768;
  }

  function initializeModalDisplay() {
    if (isMobileView()) {
      modalPanel.style.display = "none";
    } else {
      modalPanel.style.display = "";
    }
  }
  initializeModalDisplay();

  filterButton.addEventListener("click", function () {
    if (isMobileView()) {
      modalPanel.style.display = "flex";
      catalogListContainer.style.display = "none";
      catalogHeader.style.display = "none";
    }
  });

  const applyButton = document.getElementById("applyFilters");
  if (applyButton) {
    applyButton.addEventListener("click", function () {
      if (isMobileView()) {
        modalPanel.style.display = "none";
        catalogListContainer.style.display = "flex";
        catalogHeader.style.display = "flex";
      }

      const appliedFilters = {};
      for (const key in filters) {
        appliedFilters[key] = {
          value: filters[key].value || filters[key].values || [],
          displayText: filters[key].displayText || undefined,
        };
      }
      console.log("Filters applied:", appliedFilters);
    });
  }

  const resetButton = document.getElementById("resetFilters");
  if (resetButton) {
    resetButton.addEventListener("click", function () {
      for (const key in filters) {
        filters[key].value = "";
        filters[key].displayText = "";
        filters[key].values = [];
        const selector = document.getElementById(filters[key].selectorId);
        if (selector) {
          const input = selector.querySelector(".selector__input");
          input.placeholder = filters[key].placeholder.trim();
          input.value = "";
        }
      }

      document
        .querySelectorAll("input[type='checkbox']")
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
      console.log("Filters reset:", filters);

      if (isMobileView()) {
        modalPanel.style.display = "none";
        catalogListContainer.style.display = "flex";
        catalogHeader.style.display = "flex";
      }
    });
  }

  window.addEventListener("resize", function () {
    if (!isMobileView()) {
      modalPanel.style.display = "";
      catalogListContainer.style.display = "";
      catalogHeader.style.display = "";
    }
  });
});
