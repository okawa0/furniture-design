/**
 * ヘッダーのハンバーガーメニュー開閉
 * load-layout.js でヘッダー挿入後に読み込まれることを想定
 */
(function () {
  var menuButton = document.getElementById("interior-store-index-header-nav");
  var overlay = document.getElementById("interior-store-index-overlay");
  var sideMenu = document.getElementById("interior-store-index-sideMenu");

  if (!menuButton || !overlay || !sideMenu) return;

  var isMenuOpen = false;

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
})();
