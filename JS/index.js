document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  const setMenuState = (item, isOpen) => {
    item.classList.toggle('open', isOpen);
    const button = item.querySelector('.nav-summary');
    if (button) {
      button.setAttribute('aria-expanded', String(isOpen));
    }
  };

  const closeAllMenus = (currentItem = null) => {
    navItems.forEach((item) => {
      if (item !== currentItem) {
        setMenuState(item, false);
      }
    });
  };

  navItems.forEach((item) => {
    const button = item.querySelector('.nav-summary');
    const submenu = item.querySelector('.submenu');
    let closeTimer = null;

    const cancelClose = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    };

    const scheduleClose = () => {
      cancelClose();
      closeTimer = setTimeout(() => {
        const pointerStillInside = item.matches(':hover') || (submenu && submenu.matches(':hover'));
        if (!pointerStillInside && !item.contains(document.activeElement)) {
          setMenuState(item, false);
        }
      }, 260);
    };

    if (!button) return;

    button.addEventListener('click', (event) => {
      if (button.tagName === 'A') {
        return;
      }

      event.stopPropagation();
      const isOpen = item.classList.contains('open');
      closeAllMenus();
      setMenuState(item, !isOpen);
    });

    item.addEventListener('mouseenter', () => {
      cancelClose();
      closeAllMenus(item);
      setMenuState(item, true);
    });

    item.addEventListener('mouseleave', () => {
      if (!item.contains(document.activeElement)) {
        scheduleClose();
      }
    });

    if (submenu) {
      submenu.addEventListener('mouseenter', () => cancelClose());
      submenu.addEventListener('mouseleave', () => scheduleClose());
    }

    item.addEventListener('focusin', () => {
      cancelClose();
      closeAllMenus(item);
      setMenuState(item, true);
    });

    item.addEventListener('focusout', (event) => {
      if (!item.contains(event.relatedTarget)) {
        scheduleClose();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-item')) {
      closeAllMenus();
    }
  });

  // Toggle menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const globalNav = document.querySelector('.global-nav');

  if (menuToggle && globalNav) {
    menuToggle.addEventListener('click', (e) => {
      const isOpen = globalNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // En pantallas pequeñas, permitir que los enlaces con submenú actúen como toggles
    const handleSmallScreenLinks = () => {
      const isMobile = window.matchMedia('(max-width: 820px)').matches;
      navItems.forEach((item) => {
        const btn = item.querySelector('.nav-summary');
        const link = item.querySelector('.nav-summary');
        const submenu = item.querySelector('.submenu');
        if (!btn || !submenu) return;

        // si es enlace (<a>), interceptar en móvil
        if (link.tagName === 'A') {
          link.addEventListener('click', function mobileIntercept(ev) {
            if (isMobile) {
              ev.preventDefault();
              const open = item.classList.toggle('open');
              link.setAttribute('aria-expanded', String(open));
            }
          });
        }
      });
    };

    handleSmallScreenLinks();
    window.addEventListener('resize', () => {
      // cerrar menú y submenús al cambiar de tamaño
      globalNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      closeAllMenus();
    });
  }
});

  // Marcar item activo en la navegación según la URL
  const setActiveNav = () => {
    const path = window.location.pathname.split('/').pop().toLowerCase();
    const normalizedPath = path === '' ? 'index.html' : path;

    const navLinks = document.querySelectorAll('.global-link, .nav-summary');
    navLinks.forEach((link) => {
      if (link.tagName !== 'A') return;
      const href = link.getAttribute('href') ? link.getAttribute('href').split('/').pop().toLowerCase() : '';
      if (!href) return;

      if (href === normalizedPath || (href === 'index.html' && normalizedPath === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  };

  setActiveNav();
