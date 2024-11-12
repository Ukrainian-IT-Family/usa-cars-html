document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const process = document.querySelector(".services");

  function setupScrollAnimation() {
    if (process) {
      let sections = gsap.utils.toArray(".services__item");
      let xPercentValue;

      if (window.innerWidth >= 1440) {
        xPercentValue = -95 * (sections.length - 4);
      } else if (window.innerWidth >= 1200) {
        xPercentValue = -85 * (sections.length - 3.5);
      } else if (window.innerWidth >= 1080) {
        xPercentValue = -85 * (sections.length - 3.0);
      } else if (window.innerWidth >= 1000) {
        xPercentValue = -85 * (sections.length - 2.7);
      } else if (window.innerWidth >= 760) {
        xPercentValue = -95 * (sections.length - 2.4);
      } else if (window.innerWidth >= 560) {
        xPercentValue = -95 * (sections.length - 2.2);
      } else if (window.innerWidth >= 400) {
        xPercentValue = -95 * (sections.length - 1.2);
      } else {
        xPercentValue = -95 * (sections.length - 1.05);
      }

      gsap.to(sections, {
        xPercent: xPercentValue,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: process,
          markers: false,
          scrub: 1,
          pin: true,
          start: "center center",
          end: () => "+=" + process.offsetWidth,
        },
      });
    }
  }

  setupScrollAnimation();

  window.addEventListener("resize", () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    setupScrollAnimation();
  });
});
