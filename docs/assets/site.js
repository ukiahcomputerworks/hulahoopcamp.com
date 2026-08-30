const button = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-navigation]');

if (button && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  button.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });
}
