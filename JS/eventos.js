function filterEvents() {
    const input = document.getElementById('searchInput');
    const cards = document.getElementsByClassName('event-card');

    if (!input) return;

    const value = input.value.toLowerCase().trim();

    for (const card of cards) {
        const title = card.querySelector('.event-title')?.textContent.toLowerCase() ?? '';
        const place = card.querySelector('.event-place')?.textContent.toLowerCase() ?? '';

        const matches = title.includes(value) || place.includes(value);
        card.style.display = matches || !value ? '' : 'none';
    }
}

function openModal(eventName, tiers) {
    const modal = document.getElementById('bookingModal');
    const modalTitle = document.getElementById('modalTitle');
    const select = document.getElementById('ticketTier');

    if (!modal || !modalTitle || !select) return;

    modalTitle.textContent = 'Reservar para: ' + eventName;
    select.innerHTML = '';

    tiers.forEach((tier) => {
        const option = document.createElement('option');
        option.value = tier;
        option.textContent = tier;
        select.appendChild(option);
    });

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function confirmBooking(event) {
    event.preventDefault();
    alert('¡Reserva completada con éxito! Te enviaremos los detalles al correo.');
    closeModal();
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterEvents);
    }

    document.querySelectorAll('.btn-tickets').forEach((button) => {
        button.addEventListener('click', () => {
            const eventName = button.dataset.eventName || 'Evento';
            const tiers = (button.dataset.tiers || '')
                .split(',')
                .map((tier) => tier.trim())
                .filter(Boolean);

            openModal(eventName, tiers);
        });
    });

    const closeButton = document.querySelector('.close-modal');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', confirmBooking);
    }
});
