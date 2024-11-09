document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const process = document.querySelector(".services");
  if (process) {
    let sections = gsap.utils.toArray(".services__item");
    gsap.to(sections, {
      xPercent: -95 * (sections.length - 4),
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
});
