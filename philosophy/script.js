(() => {
  const reveals = document.querySelectorAll(".reveal");

  document.querySelectorAll(".photo-slot img").forEach((img) => {
    const markMissing = () => img.classList.add("is-missing");
    if (img.complete) {
      if (!img.naturalWidth) markMissing();
    } else {
      img.addEventListener("error", markMissing);
      img.addEventListener("load", () => img.classList.remove("is-missing"));
    }
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
})();
