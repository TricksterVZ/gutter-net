// ===============================
// Mobile Menu Toggle
// ===============================

const mobileBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// ===============================
// Random Glitch Button (optional)
// ===============================

const glitchBtn = document.querySelector(".btn-ghost");

if (glitchBtn) {
  glitchBtn.addEventListener("click", () => {
    document.body.classList.add("glitch-mode");
    setTimeout(() => {
      document.body.classList.remove("glitch-mode");
    }, 500);
  });
}
