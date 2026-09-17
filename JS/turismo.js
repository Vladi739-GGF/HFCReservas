const lugares = [
    { nombre: "El Tunco", lugar: "La Libertad", tipo: "playa", imagen: "images_turismo/El_tunco.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/El_Tunco_Beach_El_Salvador.jpg/1280px-El_Tunco_Beach_El_Salvador.jpg", descripcion: "Playa famosa por el surf y sus hermosos atardeceres.", precio: "$0 – $35", llevar: "Traje de baño", idealPara: "Surfistas y parejas", mejorEpoca: "Nov. a Abr.", actividades: "Surf, paseo y atardeceres" },
    { nombre: "El Zonte", lugar: "La Libertad", tipo: "playa", imagen: "images_turismo/El_zonte.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Beach_of_El_Zonte.jpg/1280px-Beach_of_El_Zonte.jpg", descripcion: "Destino costero conocido por el surf y su ambiente tranquilo.", precio: "$0 – $40", llevar: "Protector solar", idealPara: "Relax y surf", mejorEpoca: "Dic. a Mayo", actividades: "Surf, tomar sol y bares" },
    { nombre: "Volcán de Santa Ana", lugar: "Santa Ana", tipo: "volcan", imagen: "images_turismo/Volcan_de_Santa_Ana.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Volc%C3%A1n_de_Santa_Ana.jpg/1280px-Volc%C3%A1n_de_Santa_Ana.jpg", descripcion: "Volcán conocido por su impresionante cráter.", precio: "$3 – $15", llevar: "Agua y zapatos", idealPara: "Aventureros", mejorEpoca: "Ene. a Abr.", actividades: "Senderismo y vista panorámica" },
    { nombre: "Volcán de Izalco", lugar: "Sonsonate", tipo: "volcan", imagen: "images_turismo/Volcan_de_Izalco.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Izalco_Volcano.jpg/1280px-Izalco_Volcano.jpg", descripcion: "Uno de los volcanes más representativos del país.", precio: "$3 – $20", llevar: "Calzado cómodo", idealPara: "Excursiones", mejorEpoca: "Nov. a Abr.", actividades: "Treking y fotos" },
    { nombre: "Lago de Coatepeque", lugar: "Santa Ana", tipo: "naturaleza", imagen: "images_turismo/lago_de_Coatepeque.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lago_de_Coatepeque_El_Salvador.jpg/1280px-Lago_de_Coatepeque_El_Salvador.jpg", descripcion: "Lago de origen volcánico rodeado de hermosos paisajes.", precio: "$0 – $30", llevar: "Traje de baño", idealPara: "Familias y grupos", mejorEpoca: "Todo el año", actividades: "Recreación y descanso" },
    { nombre: "Suchitoto", lugar: "Cuscatlán", tipo: "cultura", imagen: "images_turismo/Suchitoto.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Suchitoto.jpg/1280px-Suchitoto.jpg", descripcion: "Pueblo histórico con calles empedradas y arquitectura.", precio: "$5 – $50", llevar: "Cámara y zapatos cómodos", idealPara: "Turistas culturales", mejorEpoca: "Ene. a Mar.", actividades: "Recorridos, arte y gastronomía" },
    { nombre: "Playa Los Cóbanos", lugar: "Sonsonate", tipo: "playa", imagen: "images_turismo/Playa_los_cobanos.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Los_Cobanos_El_Salvador.jpg/640px-Los_Cobanos_El_Salvador.jpg", descripcion: "Arrecifes de coral y aguas tranquilas ideales para el buceo.", precio: "$5 – $60", llevar: "Equipo de snorkel", idealPara: "Buceo y descanso", mejorEpoca: "Nov. a May.", actividades: "Snorkel, caminatas y fotos" },
    { nombre: "Parque Nacional El Imposible", lugar: "Ahuachapán", tipo: "naturaleza", imagen: "images_turismo/Parque_Nacional_El_Imposible.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/El_Imposible_National_Park.jpg/1280px-El_Imposible_National_Park.jpg", descripcion: "Bosque tropical de montaña con una biodiversidad increíble.", precio: "$6 – $25", llevar: "Repelente y agua", idealPara: "Naturaleza", mejorEpoca: "Dic. a Abr.", actividades: "Senderismo y avistamiento" },
    { nombre: "Joya de Cerén", lugar: "La Libertad", tipo: "cultura", imagen: "images_turismo/Joya_de_ceren.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Joya_de_Ceren_01.jpg/640px-Joya_de_Ceren_01.jpg", descripcion: "Sitio arqueológico conocido como la Pompeya de América.", precio: "$1 – $10", llevar: "Bloqueador solar", idealPara: "Historia y cultura", mejorEpoca: "Todo el año", actividades: "Tours arqueológicos" },
    { nombre: "Volcán de San Salvador", lugar: "San Salvador", tipo: "volcan", imagen: "images_turismo/Volcan_de_san_salvador.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Boqueron_volcano.jpg/640px-Boqueron_volcano.jpg", descripcion: "Impresionante cráter conocido como El Boquerón.", precio: "$2 – $15", llevar: "Chaqueta ligera", idealPara: "Paisajes y vistas", mejorEpoca: "Nov. a Mar.", actividades: "Miradores y senderos" },
    { nombre: "Costa del Sol", lugar: "La Paz", tipo: "playa", imagen: "images_turismo/Costa_del_sol.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costa_del_Sol_El_Salvador.jpg/1280px-Costa_del_Sol_El_Salvador.jpg", descripcion: "Extensa playa ideal para descansar y disfrutar del sol.", precio: "$0 – $50", llevar: "Toalla y lentes", idealPara: "Familias y descanso", mejorEpoca: "Nov. a Abr.", actividades: "Playas, paseo y comida" },
    { nombre: "Ruta de las Flores", lugar: "Ahuachapán/Sonsonate", tipo: "cultura", imagen: "images_turismo/Ruta_de_las_flores.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ataco_El_Salvador.jpg/1280px-Ataco_El_Salvador.jpg", descripcion: "Pueblos pintorescos con gastronomía y artesanías locales.", precio: "$10 – $70", llevar: "Cámara fotográfica", idealPara: "Turistas culturales", mejorEpoca: "Dic. a Abr.", actividades: "Gastronomía, artesanía y pueblos" }
];

function mostrar(lista) {
    const contenedor = document.getElementById("cards");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    lista.forEach((lugar) => {
        const imagenInicial = lugar.imagen || lugar.fallback || "";
        const fallbackImagen = lugar.fallback || "";
        const resumen = lugar.resumen || "Destino ideal para pasar un momento relajado y disfrutar de la naturaleza local.";

        contenedor.innerHTML += `
            <article class="card" tabindex="0" data-nombre="${lugar.nombre}" data-tipo="${lugar.tipo}" data-lugar="${lugar.lugar}" data-descripcion="${lugar.descripcion}" data-precio="${lugar.precio}" data-llevar="${lugar.llevar}" data-imagen="${imagenInicial}" data-resumen="${resumen}" data-ideal="${lugar.idealPara || "Todo tipo de viajeros"}" data-epoca="${lugar.mejorEpoca || "Todo el año"}" data-actividades="${lugar.actividades || "Exploración y descanso"}" aria-label="Información sobre ${lugar.nombre}">
                <img src="${imagenInicial}" alt="${lugar.nombre}" onerror="this.onerror=null; this.src='${fallbackImagen}';">
                <div class="info">
                    <small>${lugar.tipo.toUpperCase()}</small>
                    <h3>${lugar.nombre}</h3>
                    <p>${lugar.lugar}</p>
                    <p>${lugar.descripcion}</p>

                    <div class="card-extra">
                        <span>Información breve</span>
                        <p>${resumen}</p>
                        <ul class="card-meta">
                            <li><strong>Ideal para:</strong> ${lugar.idealPara || "Todo tipo de viajeros"}</li>
                            <li><strong>Mejor época:</strong> ${lugar.mejorEpoca || "Todo el año"}</li>
                            <li><strong>Actividades:</strong> ${lugar.actividades || "Exploración y descanso"}</li>
                        </ul>
                    </div>

                    <div class="details">
                        <div>
                            <b>Precio</b><br>
                            <span class="price">${lugar.precio}</span>
                        </div>
                        <div>
                            <b>Llevar</b><br>
                            ${lugar.llevar}
                        </div>
                    </div>
                </div>
            </article>
        `;
    });

    document.querySelectorAll(".card").forEach((card) => {
        const abrirModal = () => {
            const modal = document.getElementById("modalLugar");
            const imagen = document.getElementById("modalImagen");
            const tipo = document.getElementById("modalTipo");
            const titulo = document.getElementById("modalTitulo");
            const ubicacion = document.getElementById("modalUbicacion");
            const descripcion = document.getElementById("modalDescripcion");
            const precio = document.getElementById("modalPrecio");
            const llevar = document.getElementById("modalLlevar");

            const src = card.dataset.imagen || card.querySelector("img").src;
            const nombre = card.dataset.nombre || "Lugar";
            const tipoLugar = (card.dataset.tipo || "").toUpperCase();

            imagen.src = src;
            imagen.alt = nombre;
            tipo.textContent = tipoLugar;
            titulo.textContent = nombre;
            ubicacion.textContent = card.dataset.lugar || "Ubicación";
            descripcion.textContent = card.dataset.resumen || "Destino ideal para disfrutar de la experiencia local.";
            precio.textContent = card.dataset.precio || "$0";
            llevar.textContent = card.dataset.llevar || "Recomendado";

            modal.classList.remove("hidden");
            modal.setAttribute("aria-hidden", "false");
        };

        card.addEventListener("click", abrirModal);
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                abrirModal();
            }
        });
    });

    const modal = document.getElementById("modalLugar");
    const cerrar = modal?.querySelector(".modal-close");

    cerrar?.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
    });

    modal?.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
            modal.setAttribute("aria-hidden", "true");
        }
    });
}

function filtrar(tipo, boton) {
    const botones = document.querySelectorAll(".categories button");
    botones.forEach((b) => b.classList.remove("active"));

    if (boton) boton.classList.add("active");

    const lista = tipo === "todos" ? lugares : lugares.filter((lugar) => lugar.tipo === tipo);
    mostrar(lista);
}

function aplicarFiltroDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    const tipoFiltro = params.get("tipo");
    const tiposPermitidos = ["playa", "volcan", "naturaleza", "cultura"];

    const botones = document.querySelectorAll(".categories button");
    const botonSeleccionado = [...botones].find((boton) => boton.dataset.tipo === (tipoFiltro || "todos"));

    if (tipoFiltro && tiposPermitidos.includes(tipoFiltro)) {
        const boton = document.querySelector(`.categories button[data-tipo="${tipoFiltro}"]`);
        filtrar(tipoFiltro, boton);
    } else {
        const boton = document.querySelector('.categories button[data-tipo="todos"]');
        filtrar("todos", boton);
    }

    if (botonSeleccionado) {
        botones.forEach((boton) => boton.classList.toggle("active", boton === botonSeleccionado));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".categories button");

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const tipo = boton.dataset.tipo;
            const nuevaURL = new URL(window.location.href);

            if (tipo === "todos") {
                nuevaURL.searchParams.delete("tipo");
            } else {
                nuevaURL.searchParams.set("tipo", tipo);
            }

            window.history.replaceState({}, "", nuevaURL);
            filtrar(tipo, boton);
        });
    });

    aplicarFiltroDesdeURL();
});

