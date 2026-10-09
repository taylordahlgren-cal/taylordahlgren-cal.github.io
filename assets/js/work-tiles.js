(() => {
  const tiles = document.querySelectorAll(".work-tile-control");
  if (!tiles.length) return;

  document.documentElement.classList.add("work-tiles-ready");

  tiles.forEach((button) => {
    const back = button.querySelector(".work-tile-back");
    if (!back) return;

    let pinnedOpen = false;
    let pointerOver = false;

    const renderState = () => {
      const expanded = pinnedOpen || pointerOver;
      button.setAttribute("aria-expanded", String(expanded));
      back.setAttribute("aria-hidden", String(!expanded));
      back.toggleAttribute("inert", !expanded);
    };

    button.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "touch") return;
      pointerOver = true;
      renderState();
    });

    button.addEventListener("pointerleave", () => {
      pointerOver = false;
      renderState();
    });

    button.addEventListener("click", () => {
      pinnedOpen = !pinnedOpen;
      renderState();
    });

    button.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      pinnedOpen = false;
      pointerOver = false;
      renderState();
    });

    button.addEventListener("focusout", (event) => {
      if (event.relatedTarget && button.contains(event.relatedTarget)) return;
      if (!pointerOver) {
        pinnedOpen = false;
        renderState();
      }
    });

    renderState();
  });
})();
