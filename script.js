function setHeroHeight() {
  const hero = document.querySelector('.hero-section');
  hero.style.height = `${window.innerHeight}px`;
}

window.addEventListener('resize', setHeroHeight);
window.addEventListener('load', setHeroHeight);
