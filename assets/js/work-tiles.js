(() => {
  const tiles = document.querySelectorAll(".work-tile-control");
  if (!tiles.length) return;

  document.documentElement.classList.add("work-tiles-ready");

  tiles.forEach((button) => {
    const front = button.querySelector(".work-tile-front");
    const back = button.querySelector(".work-tile-back");
    if (!back) return;

    let expanded = false;

    const setExpanded = (next) => {
      expanded = next;
      button.setAttribute("aria-expanded", String(expanded));
      back.setAttribute("aria-hidden", String(!expanded));
      back.toggleAttribute("inert", !expanded);
      if (front) {
        front.setAttribute("aria-hidden", String(expanded));
        front.toggleAttribute("inert", expanded);
      }
    };

    button.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "touch") return;
      setExpanded(true);
    });

    button.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "touch") return;
      setExpanded(false);
    });

    button.addEventListener("click", () => {
      setExpanded(!expanded);
    });

    button.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setExpanded(false);
    });

    button.addEventListener("focusout", (event) => {
      if (event.relatedTarget && button.contains(event.relatedTarget)) return;
      setExpanded(false);
    });

    document.addEventListener("pointerdown", (event) => {
      if (!button.contains(event.target)) setExpanded(false);
    });

    setExpanded(false);
  });
})();
