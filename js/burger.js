(function () {
  'use strict';

  var btn = document.getElementById('burgerBtn');
  var menu = document.getElementById('burgerMenu');
  var closeBtn = document.getElementById('burgerClose');

  if (!btn || !menu || !closeBtn) return;

  function openMenu() {
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollbarWidth + 'px';
    menu.hidden = false;
    menu.classList.add('burger-menu--open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeMenu() {
    menu.classList.remove('burger-menu--open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setTimeout(function () {
      menu.hidden = true;
    }, 300);
    btn.focus();
  }

  btn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // Close on overlay click (outside menu content)
  menu.addEventListener('click', function (e) {
    if (e.target === menu) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) closeMenu();
  });

  // Close burger menu links
  var links = menu.querySelectorAll('.burger-menu__link');
  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();
