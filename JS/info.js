document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-btn');

    if (!backButton) return;

    const isIndexPage = window.location.pathname.endsWith('/index.html') || window.location.pathname === '/' || window.location.pathname === '';

    if (isIndexPage) {
        backButton.style.display = 'none';
        return;
    }

    backButton.style.display = 'inline-flex';
    backButton.addEventListener('click', () => {
        window.location.href = './index.html';
    });
});
