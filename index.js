const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

hamburgerBtn.addEventListener('click', function () {
  const isOpen = mobileNav.classList.toggle('open');
  hamburgerBtn.classList.toggle('open', isOpen);
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
  mobileNav.setAttribute('aria-hidden', !isOpen);
});

// Close mobile nav when clicking outside
document.addEventListener('click', function (e) {
  if (!hamburgerBtn.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }
});

// Close mobile nav on resize to desktop
window.addEventListener('resize', function () {
  if (window.innerWidth > 1200) {
    mobileNav.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }
});
