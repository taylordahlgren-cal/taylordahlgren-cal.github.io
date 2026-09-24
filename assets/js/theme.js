(() => {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const storageKey = "taylor-portfolio-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (!button) return;

  let savedTheme = null;
  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch {
    // The system theme still works when storage is unavailable.
  }

  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  }

  const isDark = () => {
    if (root.dataset.theme) return root.dataset.theme === "dark";
    return systemTheme.matches;
  };

  const updateButton = () => {
    const dark = isDark();
    button.textContent = dark ? "Light mode" : "Dark mode";
    button.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
    button.setAttribute("aria-pressed", String(dark));
  };

  button.addEventListener("click", () => {
    const nextTheme = isDark() ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Theme changes remain active for this page when storage is unavailable.
    }
    updateButton();
  });

  systemTheme.addEventListener("change", () => {
    if (!root.dataset.theme) updateButton();
  });

  updateButton();
})();