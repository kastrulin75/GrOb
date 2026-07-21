(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (header && !header.classList.contains("site-header--static")) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  // Block Yandex/browser image hover widgets on all photos
  const shieldImage = (img) => {
    if (!(img instanceof HTMLImageElement) || img.dataset.shielded === "1") return;
    img.dataset.shielded = "1";
    img.setAttribute("draggable", "false");
    img.addEventListener("dragstart", (e) => e.preventDefault());

    const parent = img.parentElement;
    if (!parent || parent.closest("a")) return;

    const style = window.getComputedStyle(parent);
    if (style.position === "static") {
      parent.style.position = "relative";
    }

    if (!parent.querySelector(":scope > .img-hover-shield")) {
      const shield = document.createElement("span");
      shield.className = "img-hover-shield";
      shield.setAttribute("aria-hidden", "true");
      parent.appendChild(shield);
    }
  };

  const shieldAll = (root = document) => {
    root.querySelectorAll?.("img").forEach(shieldImage);
  };

  shieldAll();

  const mo = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        if (node.matches?.("img")) shieldImage(node);
        shieldAll(node);
      });
    });
  });

  mo.observe(document.body, { childList: true, subtree: true });
})();
