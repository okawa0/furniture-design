/**
 * 共通レイアウト（ヘッダー・フッター）の読み込みとメニュースクリプトの初期化
 * ページの階層に応じて相対パスを解決する
 */
(function () {
  const isInProducts = window.location.pathname.includes("/products/") || window.location.pathname.endsWith("/products.html") || window.location.pathname.endsWith("/products2.html");
  const basePath = isInProducts ? "../" : "";

  const headerPath = basePath + "header.html";
  const footerPath = basePath + "footer.html";
  const scriptPath = basePath + "assets/js/script.js";

  function applyLinkPrefix(container) {
    if (!container) return;
    const links = container.querySelectorAll("a[href]");
    links.forEach(function (link) {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("#")) {
        link.setAttribute("href", basePath + href.replace(/^\//, ""));
      }
    });
  }

  function loadScript(src, callback) {
    const s = document.createElement("script");
    s.src = src;
    s.onload = callback || function () {};
    document.body.appendChild(s);
  }

  Promise.all([
    fetch(headerPath).then(function (res) { return res.text(); }),
    fetch(footerPath).then(function (res) { return res.text(); }),
  ])
    .then(function (results) {
      const headerEl = document.getElementById("header");
      const footerEl = document.getElementById("footer");
      if (headerEl) {
        headerEl.innerHTML = results[0];
        applyLinkPrefix(headerEl);
      }
      if (footerEl) {
        footerEl.innerHTML = results[1];
      }
      loadScript(scriptPath);
    })
    .catch(function (err) {
      console.error("Failed to load layout:", err);
    });
})();
