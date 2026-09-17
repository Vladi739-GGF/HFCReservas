const placeholderHotelImage = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#edf5ff"/>
        <stop offset="100%" stop-color="#dae9ff"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="900" fill="url(#bg)"/>
    <rect x="110" y="120" width="980" height="660" rx="28" fill="rgba(255,255,255,0.4)" stroke="rgba(47,94,168,0.25)"/>
    <text x="600" y="470" text-anchor="middle" font-size="42" font-family="Arial, sans-serif" fill="#254b80" font-weight="700">Imagen disponible pronto</text>
  </svg>
`);

const hotelImages = [
  { name: 'Barceló 4', image: 'images_hoteles/Barccelo%204.jpg', price: 170, location: 'San Salvador', rating: 4.8, description: 'Hotel urbano con ambiente relajado, ideal para viajes de trabajo o escapadas breves con buena conectividad.' },
  { name: 'Barceló 2', image: 'images_hoteles/Barcelo%202.jpg', price: 180, location: 'Antiguo Cuscatlán', rating: 4.7, description: 'Estilo moderno y atención personalizada para quienes buscan comfort cerca de restaurantes y centros de negocios.' },
  { name: 'Barceló 3', image: 'images_hoteles/Barcelo%203.jpg', price: 175, location: 'San Salvador', rating: 4.8, description: 'Habitaciones funcionales y una ubicación estratégica para explorar la ciudad sin largas distancias.' },
  { name: 'Barceló 5', image: 'images_hoteles/Barcelo%205.jpg', price: 195, location: 'San Salvador', rating: 4.9, description: 'Experiencia premium con detalles contemporáneos y una atmosfera muy acogedora para estadías cómodas.' },
  { name: 'Barceló Hotel', image: 'images_hoteles/Barcelo%20hotel.jpg', price: 190, location: 'Antiguo Cuscatlán', rating: 4.8, description: 'Alojamiento elegante con servicios prácticos y mejor opción para una estancia tranquila en la zona central.' },
  { name: 'Fairfield by Marriott', image: 'images_hoteles/fairfield%20by%20marriott.jpg', price: 170, location: 'San Salvador', rating: 4.7, description: 'Ideal para viajeros que buscan comodidad y orden en una propiedad acogedora y bien ubicada.' },
  { name: 'Fairfield 2', image: 'images_hoteles/fairfield%20by%20marriott%202.jpg', price: 180, location: 'San Salvador', rating: 4.7, description: 'Habitaciones despejadas y servicio atento para quienes prefieren una estadía sin complicaciones.' },
  { name: 'Fairfield 3', image: 'images_hoteles/fairfield%20by%20marriott%203.jpg', price: 185, location: 'San Salvador', rating: 4.8, description: 'Combinación de diseño sobrio y amenidades útiles para estadías cortas o largas en la capital.' },
  { name: 'Fairfield 4', image: 'images_hoteles/fairfield%20by%20marriott%204.jpg', price: 175, location: 'San Salvador', rating: 4.6, description: 'Opción balanceada para descansar con buen servicio y una ubicación cómoda para cada jornada.' },
  { name: 'Fairfield 5', image: 'images_hoteles/fairfield%20by%20marriott%205.jpg', price: 195, location: 'San Salvador', rating: 4.9, description: 'Elegancia discreta, atención de calidad y un ambiente ideal para relajarse tras el día.' },
  { name: 'Hotel Mirador Plaza', image: 'images_hoteles/hotel%20mirador%20plaza.jpg', price: 145, location: 'San Salvador', rating: 4.8, description: 'Hotel familiar con ambiente familiar, áreas comunes cómodas y buena relación calidad-precio.' },
  { name: 'Mirador Plaza 2', image: 'images_hoteles/hotel%20mirador%20plaza%202.jpg', price: 150, location: 'San Salvador', rating: 4.8, description: 'Espacios acogedores y atención cálida para pasar unos días tranquilos con la familia.' },
  { name: 'Mirador Plaza 3', image: 'images_hoteles/hotel%20mirador%20plaza%203.jpg', price: 155, location: 'San Salvador', rating: 4.8, description: 'Perfecto para quienes buscan tranquilidad sin alejarse del centro urbano.' },
  { name: 'Mirador Plaza 4', image: 'images_hoteles/hotel%20mirador%20plaza%204.jpg', price: 160, location: 'San Salvador', rating: 4.9, description: 'Estadía cómoda con espacios cómodos y una propuesta práctica para familias o viajeros frecuentes.' },
  { name: 'Mirador Plaza 5', image: 'images_hoteles/hotel%20mirador%20plaza%205.jpg', price: 165, location: 'San Salvador', rating: 4.9, description: 'Excelente opción para descansar con calma y disfrutar de un servicio cercano y eficiente.' },
  { name: 'Hotel Villa Serena', image: 'images_hoteles/hotel%20villa%20serena.jpg', price: 155, location: 'La Libertad', rating: 4.7, description: 'Estilo sereno y vista agradable para quienes desean relajarse cerca de la costa salvadoreña.' },
  { name: 'Villa Serena 2', image: 'images_hoteles/hotel%20villa%20serena%202.jpg', price: 165, location: 'La Libertad', rating: 4.7, description: 'Opción ideal para disfrutar de la playa con comodidad y un ambiente más cálido y familiar.' },
  { name: 'Villa Serena 3', image: 'images_hoteles/hotel%20villa%20serena%203.jpg', price: 170, location: 'La Libertad', rating: 4.8, description: 'Hotel relajante con ambiente tropical y servicios útiles para escapadas cortas o largas.' },
  { name: 'Villa Serena 4', image: 'images_hoteles/hotel%20villa%20serena%204.jpg', price: 180, location: 'La Libertad', rating: 4.9, description: 'Acogedor, bien cuidado y excelente para combinar descanso y vistas frente al mar.' },
  { name: 'Villa Serena 5', image: 'images_hoteles/hotel%20villa%20serena%205.jpg', price: 185, location: 'La Libertad', rating: 4.9, description: 'Muy buena alternativa para familias y parejas que buscan un destino tranquilo y lleno de calma.' },
  { name: 'Hyatt Centric', image: 'images_hoteles/hyatt%20centric.jpg', price: 210, location: 'San Salvador', rating: 4.9, description: 'Hotel de diseño premium con atención de alto nivel y una experiencia más refinada.' },
  { name: 'Hyatt Centric 2', image: 'images_hoteles/hyatt%20centric%202.jpg', price: 215, location: 'San Salvador', rating: 5, description: 'Una propuesta sofisticada para estadías con estilo, confort y servicio impecable en la ciudad.' },
  { name: 'Hyatt Centric 3', image: 'images_hoteles/hyatt%20centric%203.jpg', price: 220, location: 'San Salvador', rating: 5, description: 'Refinamiento, comodidad y elegancia en una ubicación ideal para viajes de negocios o placer.' },
  { name: 'Hyatt Centric 4', image: 'images_hoteles/hyatt%20centric%204.jpg', price: 230, location: 'San Salvador', rating: 5, description: 'Experiencia premium con espacios modernos y detalles pensados para una visita memorable.' },
  { name: 'Hyatt Centric 5', image: 'images_hoteles/hyatt%20centric%205.jpg', price: 240, location: 'San Salvador', rating: 5, description: 'Lujoso y muy bien servido, perfecto para quienes buscan una estancia destacada y confortable.' },
  { name: 'Hotel Los Mangos', image: 'images_hoteles/hotel%20los%20mangos.jpg', price: 125, location: 'La Libertad', rating: 4.6, description: 'Hotel sencillo y acogedor, perfecto para viajeros que buscan descanso a buen precio cerca de la costa.' },
  { name: 'Los Mangos 2', image: 'images_hoteles/hotel%20los%20mangos%202.jpg', price: 135, location: 'La Libertad', rating: 4.7, description: 'Bien ubicado y con ambiente relajado para quienes quieren pasar unos días tranquilos junto al mar.' },
  { name: 'Los Mangos 3', image: 'images_hoteles/hotel%20los%20mangos%203.jpg', price: 140, location: 'La Libertad', rating: 4.8, description: 'Ideal para familias y parejas que buscan comodidad, cercanía y un ambiente calmo.' },
  { name: 'Los Mangos 4', image: 'images_hoteles/hotel%20los%20mangos%204.jpg', price: 145, location: 'La Libertad', rating: 4.8, description: 'Alojamiento accesible con buena atención y una experiencia agradable para descansar.' },
  { name: 'Los Mangos 5', image: 'images_hoteles/hotel%20los%20mangos%205.jpg', price: 150, location: 'La Libertad', rating: 4.8, description: 'Perfecto para una escapada costera con ambiente familiar y servicio amable.' },
  { name: 'Royal Decameron', image: 'images_hoteles/royal%20decameron%20salinitas.jpg', price: 260, location: 'Playa El Tunco', rating: 4.9, description: 'Resort tropical con ambiente playero y excelente oferta para descansar al lado del mar.' },
  { name: 'Royal Decameron 2', image: 'images_hoteles/royal%20decameron%20salinitas%202.jpg', price: 270, location: 'Playa El Tunco', rating: 4.9, description: 'Lugares amplios, cercanía a la playa y una experiencia muy completa para familias o parejas.' },
  { name: 'Royal Decameron 3', image: 'images_hoteles/royal%20decameron%20salinitas%203.jpg', price: 275, location: 'Playa El Tunco', rating: 5, description: 'Una gran opción para disfrutar de sol, ocio y comodidad en un destino muy popular del país.' },
  { name: 'Royal Decameron 4', image: 'images_hoteles/royal%20decameron%20salinitas%204.jpg', price: 280, location: 'Playa El Tunco', rating: 5, description: 'Resort con ambiente de descanso total y servicios pensados para toda la familia.' },
  { name: 'Royal Decameron 5', image: 'images_hoteles/royal%20decameron%20salinitas%205.jpg', price: 290, location: 'Playa El Tunco', rating: 5, description: 'Estadía premium frente al mar con excelente atención y una experiencia muy completa.' },
  { name: 'Sheraton Presidente', image: 'images_hoteles/sheraton%20presidente.jpg', price: 200, location: 'San Salvador', rating: 4.8, description: 'Hotel de prestigio con servicio sofisticado y ambiente ideal para viajes de negocios o placer.' },
  { name: 'Sheraton 2', image: 'images_hoteles/sheraton%20presidente%202.jpg', price: 210, location: 'San Salvador', rating: 4.8, description: 'Habitaciones cómodas y una atención muy cuidada para quienes buscan tranquilidad y estilo.' },
  { name: 'Sheraton 3', image: 'images_hoteles/sheraton%20presidente%203.jpg', price: 220, location: 'San Salvador', rating: 4.9, description: 'Estadía elegante con espacios confortables y gran atención en una zona muy accesible.' },
  { name: 'Sheraton 4', image: 'images_hoteles/sheraton%20presidente%204.jpg', price: 225, location: 'San Salvador', rating: 4.9, description: 'Perfecto para combinar descanso, profesionalismo y buena ubicación en la capital.' },
  { name: 'Sheraton 5', image: 'images_hoteles/sheraton%20presidente%205.jpg', price: 235, location: 'San Salvador', rating: 5, description: 'Experiencia premium con atención cuidadosa y ambiente muy agradable para cualquier tipo de viaje.' },
  { name: 'Mizata by Antiresort', image: 'images_hoteles/mizata%20by%20antiresort.jpg', price: 160, location: 'Mizata', rating: 4.8, description: 'Hotel con personalidad propia, ideal para desconectarse y disfrutar de una costa más tranquila.' },
  { name: 'Mizata 2', image: 'images_hoteles/mizata%20by%20antiresort%202.jpg', price: 170, location: 'Mizata', rating: 4.8, description: 'Ambiente sereno y cercana a la playa para quienes quieren relajarse sin prisas.' },
  { name: 'Mizata 3', image: 'images_hoteles/mizata%20by%20antiresort%203.jpg', price: 175, location: 'Mizata', rating: 4.8, description: 'Muy buena opción para escapadas de fin de semana con naturaleza, paz y buen servicio.' },
  { name: 'Mizata 4', image: 'images_hoteles/mizata%20by%20antiresort%204.jpg', price: 180, location: 'Mizata', rating: 4.9, description: 'Elegancia tranquila y perspectivas de descanso total con una vista muy agradable.' },
  { name: 'Mizata 5', image: 'images_hoteles/mizata%20by%20antiresort%205.jpg', price: 190, location: 'Mizata', rating: 4.9, description: 'Resort relajante para parejas o familias que desean disfrutar del mar con calma.' },
  { name: 'Hotel Intercontinental', image: 'images_hoteles/Hotel%20inter%20continental.jpg', price: 250, location: 'San Salvador', rating: 4.9, description: 'Hotel exclusivo con espacios amplios y servicios de alto nivel para una estadía memorable.' },
  { name: 'Intercontinental 2', image: 'images_hoteles/intercontinental-san-salvador-6860687004-2x1.avif', price: 255, location: 'San Salvador', rating: 4.9, description: 'Estilo contemporáneo y atención premium para quienes buscan confort y distinción en la ciudad.' },
  { name: 'Intercontinental 3', image: 'images_hoteles/intercontinental-san-salvador-9890674201-2x1.avif', price: 265, location: 'San Salvador', rating: 5, description: 'Experiencia de lujo con detalles cuidadosamente diseñados para una estancia exquisita.' },
  { name: 'Intercontinental Piscina', image: 'images_hoteles/Intercontinental%20picsina.jpg', price: 270, location: 'San Salvador', rating: 5, description: 'Perfecto para descansar con piscinas, comodidad y un servicio que se siente premium.' },
  { name: 'Continental Interior', image: 'images_hoteles/Continental%20Interior.webp', price: 240, location: 'San Salvador', rating: 4.8, description: 'Hotel elegante con ambiente sobrio y opción muy versátil para viajes de trabajo o placer.' },
  { name: 'Hotel Family Garden Resort', image: 'images_hoteles/Family_garden.jpg', price: 130, location: 'La Libertad, El Salvador', rating: 4.6, description: 'Espacio familiar con ambiente tranquilo y áreas cómodas para disfrutar con niños y adultos.' },
  { name: 'Hotel Parque del Sol Family', image: 'images_hoteles/hotel-parque-del-sol.jpg', price: 145, location: 'San Salvador, El Salvador', rating: 4.7, description: 'Ideal para familias que buscan comodidad, seguridad y una visita relajada en la capital.' },
  { name: 'Hotel Casa de los Pinos', image: 'images_hoteles/Casa_los_pinos.avif', price: 155, location: 'Suchitoto, El Salvador', rating: 4.8, description: 'Alojamiento con encanto local y ambiente sereno para desconectarse y disfrutar del paisaje.' },
  { name: 'Hotel Termales La Montaña', image: 'images_hoteles/termales%20la%20montaña.jpg', price: 160, location: 'Ahuachapán, El Salvador', rating: 4.7, description: 'Experiencia muy relajante con ambiente natural y espacios pensados para descansar en familia.' },
  { name: 'Hotel Wellness Spa Retreat', image: 'images_hoteles/Hotel_wellness_spa_Retreat.jpg', price: 220, location: 'Santa Tecla, El Salvador', rating: 4.9, description: 'Refugio de bienestar con tratamientos relajantes y un ambiente ideal para recargar energías.' },
  { name: 'Hotel Bahía del Sol', image: 'images_hoteles/Hotel_bahia_del_sol.jpg', price: 240, location: 'La Libertad, El Salvador', rating: 5, description: 'Hotel con enfoque de descanso total, piscinas y una experiencia muy relajante frente al mar.' }
];

const restaurantPlaceholder = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg2" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#fff1e7"/>
        <stop offset="100%" stop-color="#ffe3c2"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="900" fill="url(#bg2)"/>
    <rect x="110" y="120" width="980" height="660" rx="28" fill="rgba(255,255,255,0.38)" stroke="rgba(146,92,25,0.25)"/>
    <text x="600" y="470" text-anchor="middle" font-size="42" font-family="Arial, sans-serif" fill="#7b4a18" font-weight="700">Espacio para imagen</text>
  </svg>
`);

const restaurantData = [
  {
    name: 'La Pampa Grill',
    image: 'images_hoteles/La_pampa_grill.jpg',
    location: 'San Salvador',
    specialty: 'Parrilla',
    description: 'Carnes a la parrilla, ambiente relajado y una selección ideal para reuniones con amigos.'
  },
  {
    name: 'Bistro del Mar',
    image: 'images_hoteles/Bistro del mar.jpg',
    location: 'La Libertad',
    specialty: 'Mariscos',
    description: 'Platos frescos con vista costera y una propuesta moderna para cenas memorables.'
  },
  {
    name: 'Cocina Colonial',
    image: 'images_hoteles/Cocina_coloniak.jpg',
    location: 'Suchitoto',
    specialty: 'Tradicional',
    description: 'Sabores locales con recetas caseras y un ambiente lleno de color y cultura visual.'
  },
  {
    name: 'Sabor del Volcán',
    image: 'images_hoteles/Sabor del Volcan.jpg',
    location: 'Santa Ana',
    specialty: 'Regional',
    description: 'Una experiencia gastronómica con ingredientes locales y platos con identidad salvadoreña.'
  },
  {
    name: 'La Casona',
    image: 'images_hoteles/La_casona.jpg',
    location: 'Antiguo Cuscatlán',
    specialty: 'Internacional',
    description: 'Ambiente elegante para cenas íntimas con una carta variada y atención de primer nivel.'
  },
  {
    name: 'El Patio Verde',
    image: 'images_hoteles/El_patio_verde.jpg',
    location: 'La Libertad',
    specialty: 'Fusión',
    description: 'Espacio con estilo tropical, sabores innovadores y una propuesta casual pero premium.'
  },
  {
    name: 'Don Tomás',
    image: 'images_hoteles/Don_tomas.jpg',
    location: 'San Miguel',
    specialty: 'Casero',
    description: 'Comida tradicional bien servida en un ambiente cálido y muy familiar para toda la familia.'
  },
  {
    name: 'Vista Azul',
    image: 'images_hoteles/Vista_azul.jpg',
    location: 'Santa Tecla',
    specialty: 'Mar y tierra',
    description: 'Platos creativos, mesas con estilo y una experiencia gastronómica muy destacada.'
  }
];

const modal = document.getElementById('bookingModal');
const modalTitle = document.getElementById('modalHotelTitle');
const closeModalBtn = document.querySelector('.modal-close');
const bookingForm = document.getElementById('bookingForm');

const getHotelCategory = (hotel) => {
  const text = `${hotel.name} ${hotel.location}`.toLowerCase();

  if (/(spa|wellness|serenity|relax|termales|balneario|thermal|sauna)/.test(text)) return 'spa';
  if (/(family|familia|parque del sol|casa de los pinos|jardines|termales la montaña|garden)/.test(text)) return 'familia';
  if (/(royal|mizata|tunco|playa|sol)/.test(text)) return 'playas';
  if (/(hyatt|intercontinental|sheraton|barcelo|fairfield|mirador|san salvador|antiguo|cuscatlán)/.test(text)) return 'ciudad';

  return 'ciudad';
};

const formatStars = (rating) => {
  const full = '★'.repeat(Math.round(rating));
  const empty = '☆'.repeat(5 - Math.round(rating));
  return `${full}${empty}`;
};

const createHotelCard = ({ name, image, price, location, rating, description }) => {
  const article = document.createElement('article');
  article.className = 'hotel-card';
  article.dataset.hotel = name;
  article.dataset.price = price;

  const imageSrc = image || placeholderHotelImage;

  article.innerHTML = `
    <img src="${imageSrc}" alt="${name}">
    <div class="hotel-card-body">
      <div class="hotel-card-top">
        <div>
          <div class="hotel-rating">${formatStars(rating)} <span>${rating.toFixed(1)}</span></div>
          <h2>${name}</h2>
        </div>
        <div class="hotel-price">$${price}<span>/noche</span></div>
      </div>
      <p class="hotel-location">📍 ${location}</p>
      <p class="hotel-description">${description}</p>
      <ul class="hotel-features">
        <li>Wi‑Fi gratis</li>
        <li>Vista premium</li>
        <li>Desayuno</li>
      </ul>
      <button type="button" class="book-btn" data-hotel="${name}">Reservar</button>
    </div>
  `;

  return article;
};

const renderHotels = (filter = 'all') => {
  const grid = document.getElementById('hotelGrid');
  if (!grid) return;

  const filteredHotels = hotelImages.filter((hotel) => {
    if (filter === 'all') return true;
    return getHotelCategory(hotel) === filter;
  });

  grid.innerHTML = '';

  if (filteredHotels.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No hay hoteles en esta categoría.';
    grid.appendChild(emptyState);
    return;
  }

  const cards = filteredHotels.map(createHotelCard);
  cards.forEach((card) => grid.appendChild(card));

  document.querySelectorAll('.book-btn').forEach((button) => {
    button.addEventListener('click', () => {
      openModal(button.dataset.hotel || 'Hotel');
    });
  });
};

const createRestaurantCard = ({ name, image, location, specialty, description }) => {
  const card = document.createElement('article');
  card.className = 'restaurant-card';

  card.innerHTML = `
    <img src="${image}" alt="${name}">
    <div class="restaurant-card-body">
      <h2>${name}</h2>
      <p>${description}</p>
      <div class="restaurant-meta">
        <span>${specialty}</span>
        <span>${location}</span>
      </div>
    </div>
  `;

  return card;
};

const renderRestaurants = () => {
  const grid = document.getElementById('restaurantGrid');
  if (!grid) return;

  grid.innerHTML = '';
  restaurantData.forEach((restaurant) => {
    grid.appendChild(createRestaurantCard(restaurant));
  });
};

const openModal = (hotelName) => {
  if (!modal || !modalTitle) return;
  modalTitle.textContent = `Reservar: ${hotelName}`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
};

document.addEventListener('DOMContentLoaded', () => {
  let currentFilter = 'all';

  const getHashFilter = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();

    if (hash === 'paquetes') return 'familia';
    if (hash === 'ofertas') return 'spa';
    return 'all';
  };

  const setActiveFilter = (filter) => {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle('active', isActive);
    });
    renderHotels(filter);
  };

  const syncHashFilter = () => {
    const nextFilter = getHashFilter();
    setActiveFilter(nextFilter);
  };

  const toggleView = (view) => {
    const hotelsView = document.getElementById('hotelsView');
    const restaurantsView = document.getElementById('restaurantsView');
    const viewButtons = document.querySelectorAll('.view-btn');

    viewButtons.forEach((button) => {
      const isActive = button.dataset.view === view;
      button.classList.toggle('active', isActive);
    });

    if (hotelsView) {
      hotelsView.classList.toggle('active', view === 'hoteles');
    }

    if (restaurantsView) {
      restaurantsView.classList.toggle('active', view === 'restaurantes');
    }
  };

  syncHashFilter();
  renderRestaurants();

  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter || 'all';
      window.history.replaceState(null, '', `#${selectedFilter === 'all' ? 'hoteles' : selectedFilter === 'familia' ? 'paquetes' : selectedFilter === 'spa' ? 'ofertas' : 'hoteles'}`);
      setActiveFilter(selectedFilter);
    });
  });

  window.addEventListener('hashchange', syncHashFilter);

  document.querySelectorAll('.view-btn').forEach((button) => {
    button.addEventListener('click', () => toggleView(button.dataset.view || 'hoteles'));
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const guestName = document.getElementById('guestName').value.trim() || 'Cliente';
      alert(`Reserva confirmada para ${guestName}. Te enviaremos los detalles al correo.`);
      bookingForm.reset();
      closeModal();
    });
  }
});
