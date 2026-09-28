import "./style.css";

const menuButton = document.querySelector<HTMLButtonElement>("#menu-button");
const siteMenu = document.querySelector<HTMLElement>("#site-menu");

if (menuButton && siteMenu) {
  const openIcon = menuButton.querySelector("[data-icon='menu']");
  const closeIcon = menuButton.querySelector("[data-icon='close']");

  const setOpen = (open: boolean) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    siteMenu.dataset.open = String(open);
    openIcon?.classList.toggle("hidden", open);
    closeIcon?.classList.toggle("hidden", !open);
  };

  menuButton.addEventListener("click", () => {
    setOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });

  window.matchMedia("(min-width: 40rem)").addEventListener("change", (event) => {
    if (event.matches) {
      setOpen(false);
    }
  });
}
