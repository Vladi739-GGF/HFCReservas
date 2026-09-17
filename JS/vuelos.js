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
});
