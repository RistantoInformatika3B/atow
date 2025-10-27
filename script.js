// =============================
// FUNGSI UNTUK WARNA LATAR
// =============================
function generateRandomColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

// =============================
// FUNGSI PESAN SAMBUTAN (MODERN POPUP)
// =============================
function showWelcomeMessage() {
  // Buat elemen popup
  const popup = document.createElement("div");
  popup.textContent =
    "Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.";

  // Gaya popup biar muncul di tengah
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "rgba(0, 0, 0, 0.8)";
  popup.style.color = "white";
  popup.style.padding = "20px 30px";
  popup.style.borderRadius = "12px";
  popup.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
  popup.style.fontSize = "18px";
  popup.style.textAlign = "center";
  popup.style.zIndex = "9999";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 0.5s ease";

  // Tambahkan ke body
  document.body.appendChild(popup);

  // Animasi muncul
  setTimeout(() => {
    popup.style.opacity = "1";
  }, 100);

  // Hilang otomatis setelah 3 detik
  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => {
      popup.remove();
    }, 500);
  }, 4000);
}

// =============================
// FUNGSI UNTUK MENAMPILKAN PROJEK
// =============================
function displayProjects() {
  const projectSection = document.createElement("section");
  projectSection.innerHTML = `
    <h2>Projek Saya</h2>
    <ul>
      <li>Website Portofolio Pribadi</li>
      <li>Aplikasi Cuaca dengan API</li>
      <li>Landing Page Produk Kuliner</li>
    </ul>
  `;
  document.body.appendChild(projectSection);
}

// =============================
// FUNGSI UNTUK MENAMPILKAN PENGALAMAN
// =============================
function displayExperience() {
  const expSection = document.createElement("section");
  expSection.innerHTML = `
    <h2>Pengalaman</h2>
    <p>Saya telah mengerjakan berbagai proyek front-end dan belajar integrasi API publik.</p>
  `;
  document.body.appendChild(expSection);
}

// =============================
// SAAT HALAMAN SELESAI DIMUAT
// =============================
window.onload = function () {
  changeBackgroundColor();
  showWelcomeMessage();
  displayProjects();
  displayExperience();
};

// =============================
// TOMBOL UNTUK GANTI WARNA MANUAL
// =============================
document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.textContent = "Ganti Warna Latar";
  button.style.padding = "10px 20px";
  button.style.margin = "20px";
  button.style.cursor = "pointer";
  button.onclick = changeBackgroundColor;
  document.body.appendChild(button);
});
