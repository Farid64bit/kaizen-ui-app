
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function loadTab(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById("tab-content").innerHTML = html;
    });
}

// Load default tab
window.onload = () => loadTab('tabs/dashboard.html');
