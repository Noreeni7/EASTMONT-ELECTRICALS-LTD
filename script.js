function setHeroHeight() {
  const hero = document.querySelector('.hero-section');
  hero.style.height = `${window.innerHeight}px`;
}

window.addEventListener('resize', setHeroHeight);
window.addEventListener('load', setHeroHeight);


// Animation on Scoll (AOS)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    offset: 120,
    mirror: false
  });
});