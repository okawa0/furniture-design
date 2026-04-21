// fetchによるヘッダーとフッターの共通化
async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// ヘッダーとフッターを並行して読み込む
Promise.all([
  loadComponent('header', '/furniture-design/header.html'),
  loadComponent('footer', '/furniture-design/footer.html'),
]).then(() => {
  initHamburger();
});

// ハンバーガーメニュー
function initHamburger() {
const menuButton = document.getElementById("interior-store-index-header-nav");
  const overlay = document.getElementById("interior-store-index-overlay");
  const sideMenu = document.getElementById("interior-store-index-sideMenu");

  if (!menuButton || !overlay || !sideMenu) return;

  let isMenuOpen = false;

  function openMenu() {
    menuButton.classList.add("active");
    overlay.classList.add("active");
    sideMenu.classList.add("active");
    document.body.style.overflow = "hidden";
    isMenuOpen = true;
  }

  function closeMenu() {
    menuButton.classList.remove("active");
    overlay.classList.remove("active");
    sideMenu.classList.remove("active");
    document.body.style.overflow = "";
    isMenuOpen = false;
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuButton.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });
}