const API_BASE_URL = 'https://movgr.apis.mianfg.me';

// --- DATA DE CALLES ORA (COMPLETA) ---
const ORA_DATA = [
    {
        title: "ZONA ROJA (195 Plazas)", color: "text-red-600", border: "border-red-200", bg: "bg-red-50",
        subzones: [
            { name: "Zona 3", streets: [["Carril del Picón", 35], ["Gran Capitán", 60], ["San Juan de Dios", 7]] },
            { name: "Zona 4", streets: [["Plaza de Gracia", 1], ["Obispo Hurtado (1-17 y 2-14)", 41], ["Seminario", 8], ["Solarillo de Gracia", 10], ["Casillas de Prats", 33]] }
        ]
    },
    {
        title: "ZONA AZUL (4.003 Plazas)", color: "text-blue-600", border: "border-blue-200", bg: "bg-blue-50",
        subzones: [
            { name: "Zona 1", streets: [["Manuel Gómez Moreno", 23], ["María Luisa de Dios", 30], ["Fray Leopoldo de Alpandeire", 48], ["Rector Marín Ocete", 49], ["Santa Bárbara", 67], ["Acera de Canasteros", 30], ["Almona de San Juan de Dios", 14], ["Gonzalo Gallas", 119], ["Pérez Galdós", 34], ["Julio Verne", 19], ["Arabial (100-136 y 99-125)", 60], ["Faisán (1-47 y 2-34)", 30], ["Cisne", 30], ["Mirlo", 10], ["Ruiseñor", 33], ["Tórtola", 33], ["Halcón", 10], ["Pz Madre de los Ferroviarios", 40]] },
            { name: "Zona 2", streets: [["Ancha de Capuchinos", 41], ["Avda. Capitán Moreno", 28], ["Avda. del Hospicio", 34], ["Isaac Albéniz", 22], ["Avenida de Madrid", 50], ["Acera de San Ildefonso", 46], ["Doctor Oloriz", 44], ["Doctor Guirao Gea", 114], ["Doctor Azpitarte", 42], ["Doctor Marañón", 38], ["Doctor Fermín Garrido", 37], ["Real de Cartuja", 26], ["Cristo de la Yedra", 37]] },
            { name: "Zona 3", streets: [["Emperatriz Eugenia", 47], ["Martínez de la Rosa", 40], ["Melchor Almagro", 49], ["Pintor López Mezquita", 51], ["Pintor Rodríguez Acosta", 33], ["Pintor Velázquez", 17], ["Sol", 70], ["Trajano", 27], ["San Jerónimo", 26], ["Profesor Motos Guirao", 24], ["Profesor Sainz Cantero", 33], ["Trinidad Morcillo", 27], ["Goya", 26]] },
            { name: "Zona 4", streets: [["Ancha de Gracia", 26], ["Músico Vicente Zarzo", 16], ["Pedro Antonio de Alarcón (31-93 y 32-88)", 106], ["Sócrates", 35], ["General Narváez", 4], ["Lope de Vega", 30], ["Cristo de Medinaceli", 37], ["Camino de Purchil (1-7 y 2-8)", 30], ["Marqués Don Gonzalo", 49], ["Azorín", 41], ["Angel Barrios", 32], ["José Recuerda", 35], ["Arabial (47-59 y 36-63)", 68]] },
            { name: "Zona 5", streets: [["Alhamar", 58], ["Luis Braille", 20], ["Manuel de Falla", 60], ["Martínez Campos", 31], ["Pedro Antonio de Alarcón (1-29 y 2-30)", 41], ["Tejeiro", 58], ["Doctor Martín Lagos", 7], ["Arabial (1-47 y 2-34)", 14], ["Marqués de la Ensenada", 17], ["Las Flores", 17], ["Profesor García Gómez", 26], ["Agustina de Aragón", 90], ["Maestro Vives", 11], ["Pintor Zuloaga", 60], ["Mulhacén", 12]] },
            { name: "Zona 6", streets: [["Avda. Don Bosco (41-43 y 44-46)", 80], ["Avd. Dilar (27-127 y 12-136)", 116], ["Avda. Barcelona", 44], ["Palencia (1-23 y 2-22)", 28]] },
            { name: "Zona 7", streets: [["Paseo de la Bomba", 16], ["Paseo del Salón", 6], ["Paseo de los Basilios", 46], ["Poeta Manuel de Góngora", 30], ["SOS del Rey Católico", 58], ["Avda Pablo Picasso (14-32 y 15-35)", 81], ["Andrés Segovia (1-41 y 2-44)", 65], ["Agustín Lara", 75], ["Carretera de la Sierra (16-60 y 9-61)", 93]] },
            { name: "Zona 8", streets: [["Avenida de la Ciencia", 71], ["Paseo Jardín de la Reina", 43], ["Doctor Alejandro Otero", 10]] },
            { name: "Zona 9", streets: [["Carmen de Burgos", 67], ["Torre de la Pólvora", 55], ["Torre de Comares", 12], ["Paseo del Emperador Carlos V", 210], ["Avda de la Ilustración", 58]] },
        ]
    },
    {
        title: "ZONA VERDE (303 Plazas)", color: "text-green-600", border: "border-green-200", bg: "bg-green-50",
        subzones: [
            { name: "Zona 7", streets: [["Callejón del Pretorio", 39], ["Profesor Albareda", 24]] },
            { name: "Zona 8", streets: [["Los Juncos", 85]] },
            { name: "Zona 9", streets: [["Avenida del Conocimiento", 155]] }
        ]
    },
    {
        title: "R. ESPECIAL (36 Plazas)", color: "text-purple-600", border: "border-purple-200", bg: "bg-purple-50",
        subzones: [ { name: "Zona 10", streets: [["Paseo de los Mártires", 36]] } ]
    }
];

// --- FUNCIONES ORA ---
window.renderOraStreets = function() {
    const container = document.getElementById('ora-streets-container');
    if (container && container.children.length > 0) return;
    
    let html = "";
    ORA_DATA.forEach(zone => {
        html += `<div class="mb-6"><h4 class="${zone.color} font-bold border-b-2 ${zone.border} pb-1 mb-2 sticky top-0 bg-white z-10">${zone.title}</h4>`;
        zone.subzones.forEach(sub => {
            html += `<p class="font-bold text-gray-700 mt-2 mb-1 text-xs uppercase ${zone.bg} p-1 rounded">${sub.name}</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600 mb-3">`;
            sub.streets.forEach(st => {
                html += `<div class="flex justify-between"><span>${st[0]}</span> <span class="font-mono text-xs bg-gray-100 px-1 rounded">${st[1]}</span></div>`;
            });
            html += `</div>`;
        });
        html += `</div>`;
    });
    if(container) container.innerHTML = html;
}

window.switchOraMap = function(type) {
    const btnVias = document.getElementById('btn-map-vias');
    const btnParq = document.getElementById('btn-map-parq');
    const mapVias = document.getElementById('map-vias');
    const mapParq = document.getElementById('map-parquimetros');

    if (type === 'vias') {
        btnVias.className = "px-6 py-2 rounded-lg text-sm font-bold transition-all shadow bg-white text-blue-600";
        btnParq.className = "px-6 py-2 rounded-lg text-sm font-bold text-gray-500 hover:text-gray-700 transition-all";
        mapVias.classList.remove('hidden');
        mapParq.classList.add('hidden');
    } else {
        btnVias.className = "px-6 py-2 rounded-lg text-sm font-bold text-gray-500 hover:text-gray-700 transition-all";
        btnParq.className = "px-6 py-2 rounded-lg text-sm font-bold transition-all shadow bg-white text-blue-600";
        mapVias.classList.add('hidden');
        mapParq.classList.remove('hidden');
    }
}

// --- NAVEGACIÓN ---
window.navigateTo = function(viewId) {
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active');
    });
    
    const view = document.getElementById(viewId + '-view');
    if (view) view.classList.add('active');

    if (viewId === 'transporte') {
        const select = document.getElementById('metro-stop-select');
        if (select && select.options.length <= 1) loadMetroStops();
    }
    if (viewId === 'ora') {
        renderOraStreets();
    }
    if (viewId === 'cortes') {
        initCortesMap();
    }
}

// --- LÓGICA MAPA ZBE (MODAL PANTALLA COMPLETA) ---
let modalState = {
    scale: 0.25,
    pX: 0,
    pY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    initialDist: 0,
    initialScale: 0.25
};

let isTicking = false;

window.openZbeModal = function() {
    const modal = document.getElementById('zbe-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
    });
    resetModalState();
}

window.closeZbeModal = function() {
    const modal = document.getElementById('zbe-modal');
    if (!modal) return;
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function resetModalState() {
    const zoomInicial = 0.5;
    modalState = { 
        scale: zoomInicial, 
        pX: 0, 
        pY: 0, 
        isDragging: false, 
        startX: 0, 
        startY: 0, 
        lastX: 0, 
        lastY: 0, 
        initialDist: 0, 
        initialScale: zoomInicial 
    };
    requestUpdate();
}

function requestUpdate() {
    if (!isTicking) {
        requestAnimationFrame(updateModalTransform);
        isTicking = true;
    }
}

function updateModalTransform() {
    const modalImg = document.getElementById('zbe-modal-img');
    if (modalImg) {
        modalImg.style.transform = `translate3d(${modalState.pX}px, ${modalState.pY}px, 0) scale(${modalState.scale})`;
    }
    isTicking = false;
}

// --- LÓGICA TRANSPORTE ---
const METRO_NAMES = { "3_1116": "M-156", "3_1117": "M-157", "3_644": "0111", "3_701": "0256", "3_739": "0305" };

const BUS_COLORS = {
    '4': 'bg-red-600', '8': 'bg-red-700', '11': 'bg-orange-500', '21': 'bg-red-700', '33': 'bg-red-800',
    '9': 'bg-blue-500', '5': 'bg-purple-600', '13': 'bg-pink-600', '25': 'bg-indigo-500',
    'C30': 'bg-amber-600', 'C31': 'bg-yellow-600 text-black', 'C32': 'bg-amber-700', 'C34': 'bg-orange-700', 'C5': 'bg-red-900',
    'U1': 'bg-yellow-500 text-black', 'U2': 'bg-yellow-600 text-black', 'U3': 'bg-yellow-700',
    'N1': 'bg-cyan-600', 'N3': 'bg-cyan-700', 'N4': 'bg-cyan-800', 'N5': 'bg-blue-600', 'N6': 'bg-blue-800', 'N8': 'bg-indigo-700', 'N9': 'bg-indigo-800',
    'S0': 'bg-emerald-600', 'S2': 'bg-teal-600',
    'Metro': 'bg-lime-600'
};

function getLineColor(id) { 
    if (id.startsWith('M') || (!isNaN(id) && id.length >= 3 && id !== '111' && id !== '121')) return 'bg-green-600'; 
    return BUS_COLORS[id] || 'bg-gray-600';
}

function isNight() { const h = new Date().getHours(); return (h >= 0 && h < 6) || (h === 23 && new Date().getMinutes() >= 30); }

// --- GESTIÓN DE FAVORITOS ---

function getFavorites(type) {
    const key = type === 'bus' ? 'fav_bus' : 'fav_metro';
    return JSON.parse(localStorage.getItem(key)) || [];
}

function toggleFavorite(type, id, name) {
    const key = type === 'bus' ? 'fav_bus' : 'fav_metro';
    let favs = getFavorites(type);
    const exists = favs.find(f => f.id === id);

    if (exists) {
        favs = favs.filter(f => f.id !== id); // Eliminar
    } else {
        favs.push({ id, name }); // Añadir
    }

    localStorage.setItem(key, JSON.stringify(favs));
    
    // Actualizar UI
    renderFavorites(type);
    
    // Actualizar icono de estrella si hay una búsqueda activa
    const btnIcon = document.getElementById(`fav-btn-icon-${type}`);
    if (btnIcon) {
        updateStarIcon(btnIcon, !exists);
    }
}

function updateStarIcon(element, isFav) {
    if (isFav) {
        // Estrella Rellena (Solid)
        element.innerHTML = '<path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>';
        element.classList.add('text-yellow-400');
        element.classList.remove('text-gray-400');
    } else {
        // Estrella Borde (Outline)
        element.innerHTML = '<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.85L7 14.14 2 9.27l6.91-1.01L12 2z"/>';
        element.classList.add('text-gray-400');
        element.classList.remove('text-yellow-400');
    }
}

function renderFavorites(type) {
    const container = document.getElementById(type === 'bus' ? 'bus-favorites' : 'metro-favorites');
    if (!container) return;

    const favs = getFavorites(type);
    container.innerHTML = '';

    favs.forEach(fav => {
        const btn = document.createElement('div');
        
        // CORRECCIÓN: 'overflow-hidden' en el botón contenedor
        btn.className = `cursor-pointer text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 transition-all shadow-sm border border-gray-200 max-w-full overflow-hidden
            ${type === 'bus' 
                ? 'bg-red-50 text-red-700 hover:bg-red-100 border-red-100' 
                : 'bg-green-50 text-green-700 hover:bg-green-100 border-green-100'}`;
        
        // CORRECCIÓN CRÍTICA:
        // 1. 'block': Para que el width funcione.
        // 2. 'truncate': Para los puntos suspensivos.
        // 3. 'max-w-[120px]': Un límite FÍSICO en píxeles. Esto asegura que en un móvil pequeño el texto no empuje el ancho total.
        btn.innerHTML = `<span class="truncate block max-w-[120px] sm:max-w-[200px]">★ ${fav.name}</span>`; 
        
        btn.onclick = () => {
            if (type === 'bus') {
                document.getElementById('stop-code').value = fav.id;
                searchStop();
            } else {
                document.getElementById('metro-stop-select').value = fav.id;
                searchMetroStop();
            }
        };
        container.appendChild(btn);
    });
}


// --- BÚSQUEDA BUS ACTUALIZADA ---
window.searchStop = async function() {
    const stopCode = document.getElementById('stop-code').value.trim();
    const resEl = document.getElementById('bus-results');
    
    if (!stopCode) return resEl.innerHTML = '<p class="text-red-500 mt-2 text-center text-sm">Introduce código.</p>';
    resEl.innerHTML = '<div class="text-center py-4"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div></div>';
    
    try {
        const res = await fetch(`${API_BASE_URL}/bus/llegadas/${stopCode}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        
        const nombreParada = data.parada?.nombre || `Parada ${stopCode}`;
        
        const isFav = getFavorites('bus').some(f => f.id === stopCode);
        const starPath = isFav 
            ? '<path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>' 
            : '<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.85L7 14.14 2 9.27l6.91-1.01L12 2z"/>'; 
        const starClass = isFav ? 'text-yellow-400' : 'text-gray-400';

        // HEADER: 'flex-1 min-w-0 overflow-hidden' en el contenedor del texto.
        // Esto es esencial para que el texto se corte antes de expandir el div padre.
        const headerHtml = `
            <div class="bg-gray-50 p-3 flex justify-between items-center border-b border-gray-100 max-w-full">
                <div class="flex-1 min-w-0 pr-2 overflow-hidden">
                    <p class="font-bold text-gray-700 text-xs uppercase tracking-wide truncate block">
                        ${nombreParada}
                    </p>
                </div>
                <button onclick="toggleFavorite('bus', '${stopCode}', '${nombreParada}')" class="p-1 hover:bg-gray-200 rounded-full transition shrink-0">
                    <svg id="fav-btn-icon-bus" class="w-6 h-6 ${starClass}" viewBox="0 0 24 24">
                        ${starPath}
                    </svg>
                </button>
            </div>`;

        if (!data?.proximos?.length) {
            resEl.innerHTML = `<div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm w-full max-w-full">
                ${headerHtml}
                <div class="p-4 text-center text-gray-500 text-sm">Sin estimaciones.</div>
            </div>`;
            return;
        }
        
        const list = data.proximos.map(p => {
            const line = METRO_NAMES[p.linea?.id] || p.linea?.id || '?';
            const time = p.minutos === 0 
                ? '<span class="text-red-600 font-black animate-pulse whitespace-nowrap">LLEGANDO</span>' 
                : `<span class="text-blue-600 font-bold whitespace-nowrap">${p.minutos} min</span>`;

            let destinoClean = p.destino;
            const regexRedundancy = new RegExp(`^(L[íi]nea\\s+)?${line}\\s*[-]?\\s*`, 'i');
            destinoClean = destinoClean.replace(regexRedundancy, '').trim();

            // LISTA: Usamos 'div' en lugar de span para el contenedor del texto,
            // y aplicamos 'block' al texto truncado.
            return `
            <li class="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 w-full max-w-full">
                <div class="flex items-center gap-3 flex-1 overflow-hidden min-w-0">
                    <span class="text-white text-xs font-bold px-2 py-1 rounded ${getLineColor(line)} min-w-[2.5rem] text-center shadow-sm shrink-0">
                        ${line}
                    </span>
                    <div class="flex-1 min-w-0 overflow-hidden">
                        <p class="font-medium text-gray-700 text-sm leading-tight truncate block">
                            ${destinoClean}
                        </p>
                    </div>
                </div>
                <div class="ml-3 shrink-0">
                    ${time}
                </div>
            </li>`;
        }).join('');
        
        resEl.innerHTML = `<div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm w-full max-w-full">${headerHtml}<ul class="px-3 pb-1 w-full">${list}</ul></div>`;
    } catch (e) {
        resEl.innerHTML = isNight() ? `<div class="p-3 bg-blue-50 text-blue-800 rounded-xl text-center text-sm font-bold">🌙 Servicio Nocturno</div>` : `<p class="text-red-500 mt-2 text-center">⚠️ Error conexión</p>`;
    }
}

// --- BÚSQUEDA METRO ACTUALIZADA ---
window.searchMetroStop = async function() {
    const select = document.getElementById('metro-stop-select');
    const resEl = document.getElementById('metro-results');
    const stopId = select.value;

    if (!stopId) return;

    const nombreParada = select.options[select.selectedIndex].text;
    resEl.innerHTML = '<div class="text-center py-4"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div></div>';
    
    try {
        const res = await fetch(`${API_BASE_URL}/metro/llegadas/${stopId}`);
        if(!res.ok) throw new Error();
        const data = await res.json();

        const isFav = getFavorites('metro').some(f => f.id === stopId);
        const starPath = isFav 
            ? '<path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>' 
            : '<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.85L7 14.14 2 9.27l6.91-1.01L12 2z"/>';
        const starClass = isFav ? 'text-yellow-400' : 'text-gray-400';

        // HEADER BLINDADO
        const headerHtml = `
            <div class="bg-green-50 p-2 flex justify-between items-center border-b border-green-100 max-w-full">
                <div class="flex-1 min-w-0 pr-2 overflow-hidden">
                    <p class="font-bold text-green-800 text-xs uppercase truncate block">
                        ${nombreParada}
                    </p>
                </div>
                <button onclick="toggleFavorite('metro', '${stopId}', '${nombreParada}')" class="p-1 hover:bg-white/50 rounded-full transition shrink-0">
                    <svg id="fav-btn-icon-metro" class="w-6 h-6 ${starClass}" viewBox="0 0 24 24">
                        ${starPath}
                    </svg>
                </button>
            </div>`;

        if (!data?.proximos?.length) {
            resEl.innerHTML = `<div class="bg-white rounded-xl border border-gray-200 overflow-hidden w-full max-w-full">
                ${headerHtml}
                <div class="p-4 bg-gray-50 text-center text-sm text-gray-500">Sin trenes próximos.</div>
            </div>`;
            return;
        }

        // LISTA BLINDADA
        const list = data.proximos.map(p => `
            <li class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 w-full max-w-full">
                <div class="flex-1 min-w-0 overflow-hidden">
                    <p class="font-medium text-gray-700 text-sm truncate block">Hacia ${p.direccion}</p>
                </div>
                ${p.minutos === 0 
                    ? '<span class="text-red-600 font-black shrink-0 ml-2">LLEGANDO</span>' 
                    : `<span class="text-green-600 font-bold shrink-0 ml-2">${p.minutos} min</span>`}
            </li>`).join('');
            
        resEl.innerHTML = `<div class="bg-white rounded-xl border border-gray-200 overflow-hidden w-full max-w-full">${headerHtml}<ul class="p-3 w-full">${list}</ul></div>`;
    } catch (e) {
        resEl.innerHTML = isNight() ? `<div class="p-3 bg-green-50 text-green-800 rounded-xl text-center text-sm font-bold">🌙 Servicio Nocturno</div>` : `<p class="text-red-500 mt-2 text-center">⚠️ Error conexión</p>`;
    }
}

async function loadMetroStops() {
    try {
        const select = document.getElementById('metro-stop-select');
        if (select && select.options.length > 1) return;

        const stops = await (await fetch(`${API_BASE_URL}/metro/paradas`)).json();
        if(select) select.innerHTML = '<option value="">Selecciona parada...</option>' + stops.map(s => `<option value="${s.id}">${s.nombre}</option>`).join('');
    } catch (e) { console.error("Error stops"); }
}

// --- LÓGICA DE CORTES Y EVENTOS (Leaflet) ---
let mapCortes = null;

window.initCortesMap = function() {
    if (mapCortes) {
        setTimeout(() => { mapCortes.invalidateSize(); }, 200);
        return;
    }
    const mapElement = document.getElementById('map-cortes');
    if(!mapElement) return;

    mapCortes = L.map('map-cortes').setView([37.1773, -3.5986], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapCortes);

    fetchCortesData();
}

function moverMapa(lat, lon) {
    if (!mapCortes) return;
    mapCortes.invalidateSize();
    mapCortes.flyTo([lat, lon], 16, { duration: 1.5 });
    const mapElement = document.getElementById('map-cortes');
    mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    mapCortes.eachLayer(layer => {
        if(layer.getLatLng && layer.getLatLng().lat === lat && layer.getLatLng().lng === lon) {
            setTimeout(() => layer.openPopup(), 500);
        }
    });
}

function createCustomIcon(colorHex) {
    const svgHtml = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
        <path fill="${colorHex}" stroke="#ffffff" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5" fill="#ffffff"/>
    </svg>`;
    
    return L.divIcon({
        className: 'custom-map-pin',
        html: svgHtml,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -34]
    });
}

async function fetchCortesData() {
    const container = document.getElementById('cortes-lista-container');
    const urlGranada = 'http://www.movilidadgranada.com/app/noticias/cortes-geojson.php';
    const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(urlGranada);

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error("Error conexión");
        const textoXML = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(textoXML, "text/xml");
        const items = xmlDoc.getElementsByTagName("item");
        
        let eventos = [];
        const regexCoords = /Ubicación \(latitud,longitud\):\s*\(([\d.-]+),\s*([\d.-]+)\)/i;

        const getEstiloTipo = (tipoTextoRaw, tituloFallback) => {
            const texto = tipoTextoRaw ? tipoTextoRaw.toUpperCase().trim() : tituloFallback.toUpperCase();
            if (texto.includes("TOTAL")) return { texto: tipoTextoRaw || "CORTE TOTAL", clase: "bg-red-600 text-white shadow-red-200", colorHex: "#dc2626" };
            if (texto.includes("PARCIAL")) return { texto: tipoTextoRaw || "CORTE PARCIAL", clase: "bg-orange-500 text-white shadow-orange-200", colorHex: "#f97316" };
            if (texto.includes("PUNTUAL")) return { texto: tipoTextoRaw || "CORTE PUNTUAL", clase: "bg-yellow-500 text-white shadow-yellow-200", colorHex: "#eab308" };
            if (texto.includes("MANIFESTACIÓN")) return { texto: "📢 MANIFESTACIÓN", clase: "bg-purple-600 text-white shadow-purple-200", colorHex: "#9333ea" };
            if (texto.includes("OBRA")) return { texto: "🚧 OBRAS", clase: "bg-blue-600 text-white shadow-blue-200", colorHex: "#2563eb" };
            return { texto: tipoTextoRaw || "⚠️ AVISO", clase: "bg-gray-600 text-white shadow-gray-200", colorHex: "#4b5563" };
        };

        for (let item of items) {
            const titulo = item.getElementsByTagName("title")[0]?.textContent || "Sin título";
            let rawDesc = item.getElementsByTagName("description")[0]?.textContent || "";
            const pubDateStr = item.getElementsByTagName("pubDate")[0]?.textContent;
            const fechaPub = pubDateStr ? new Date(pubDateStr) : new Date(0);

            const matchTipo = rawDesc.match(/Tipo de corte:\s*([^<.\n]+)/i);
            const tipoExplicit = matchTipo ? matchTipo[1].trim() : null;
            const regexFin = /(?:<p>)?Fin de(?: la)? publicaci[óo]n:\s*([^<\n]+)(?:<\/p>)?/i;
            const matchFin = rawDesc.match(regexFin);
            const finExplicit = matchFin ? matchFin[1].trim() : null;
            const matchCoords = rawDesc.match(regexCoords);

            let descLimpia = rawDesc
                .replace(regexCoords, "")
                .replace(/Tipo de corte:\s*([^<.\n]+)/i, "")
                .replace(regexFin, "")
                .replace(/<[^>]*>/g, " ")
                .replace(/Más info[\s\S]*$/i, "")
                .replace(/\s+/g, " ")
                .trim();

            const estilo = getEstiloTipo(tipoExplicit, titulo);

            eventos.push({
                titulo: titulo,
                descripcion: descLimpia,
                fechaPub: fechaPub,
                fechaFin: finExplicit,
                tipo: estilo,
                lat: matchCoords ? parseFloat(matchCoords[1]) : null,
                lon: matchCoords ? parseFloat(matchCoords[2]) : null
            });
        }

        eventos.sort((a, b) => b.fechaPub - a.fechaPub);

        container.innerHTML = "";
        
        if (eventos.length === 0) {
            container.innerHTML = '<div class="p-4 text-center text-gray-500">No hay eventos recientes.</div>';
            return;
        }

        eventos.forEach(ev => {
            const fechaPublicacion = ev.fechaPub.toLocaleDateString("es-ES", { day: 'numeric', month: 'short' });

            if (ev.lat && ev.lon && mapCortes) {
                 const customIcon = createCustomIcon(ev.tipo.colorHex);
                 L.marker([ev.lat, ev.lon], { icon: customIcon }).addTo(mapCortes)
                  .bindPopup(`
                    <div class="font-sans text-center min-w-[140px]">
                        <span class="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-1 ${ev.tipo.clase}">
                            ${ev.tipo.texto}
                        </span>
                        <h3 class="font-bold text-gray-800 text-sm leading-tight">${ev.titulo}</h3>
                    </div>
                  `);
            }

            const itemDiv = document.createElement('div');
            itemDiv.className = "bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 mb-4 group";
            
            const cajaFinPublicacion = ev.fechaFin 
                ? `<div class="mt-3 inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm">
                     <span class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">📅 Fin:</span>
                     <span class="text-xs font-mono font-bold text-gray-800 dark:text-gray-900">${ev.fechaFin}</span>
                   </div>` 
                : '';

            itemDiv.innerHTML = `
                <div class="flex flex-wrap gap-2 mb-2 items-center">
                    <div class="${ev.tipo.clase} px-2 py-0.5 rounded shadow-sm text-[10px] font-black uppercase tracking-wide">
                        ${ev.tipo.texto}
                    </div>
                    <span class="ml-auto text-[10px] text-gray-400">
                        Pub: ${fechaPublicacion}
                    </span>
                </div>

                <h4 class="font-bold text-gray-800 text-base mb-1 leading-snug group-hover:text-blue-600 transition-colors">
                    ${ev.titulo}
                </h4>

                <p class="text-sm text-gray-600 leading-relaxed">
                    ${ev.descripcion}
                </p>

                <div class="flex flex-wrap items-end justify-between gap-2">
                    ${cajaFinPublicacion}

                    ${ev.lat ? `
                    <button class="btn-localizar ml-auto mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors cursor-pointer">
                        📍 Mapa
                    </button>
                    ` : ''}
                </div>
            `;

            if (ev.lat) {
                const btn = itemDiv.querySelector('.btn-localizar');
                if(btn) {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        moverMapa(ev.lat, ev.lon);
                    });
                }
            }
            container.appendChild(itemDiv);
        });

    } catch (e) {
        console.error(e);
        container.innerHTML = `<div class="p-4 text-center"><p class="text-red-500 font-bold mb-1">Error cargando datos</p></div>`;
    }
}

// --- INIT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    loadMetroStops();
    renderFavorites('bus');
    renderFavorites('metro');

    const modalContainer = document.getElementById('zbe-modal');
    if (modalContainer) {
        modalContainer.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
        
        // ZOOM RUEDA RATÓN
        modalContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            modalState.scale = Math.min(Math.max(0.1, modalState.scale * delta), 8);
            requestUpdate();
        }, { passive: false });

        // INICIO GESTOS
        const startDrag = (e) => {
            if (e.touches && e.touches.length === 2) {
                modalState.isDragging = false;
                modalState.initialDist = Math.hypot(
                    e.touches[0].pageX - e.touches[1].pageX,
                    e.touches[0].pageY - e.touches[1].pageY
                );
                modalState.initialScale = modalState.scale;
            } else if (!e.touches || e.touches.length === 1) {
                modalState.isDragging = true;
                modalState.startX = e.touches ? e.touches[0].clientX : e.clientX;
                modalState.startY = e.touches ? e.touches[0].clientY : e.clientY;
                modalState.lastX = modalState.pX;
                modalState.lastY = modalState.pY;
                const img = document.getElementById('zbe-modal-img');
                if(img) img.style.cursor = 'grabbing';
            }
        };

        // MOVIMIENTO
        const doDrag = (e) => {
            if (e.touches && e.touches.length === 2 && modalState.initialDist > 0) {
                const currentDist = Math.hypot(
                    e.touches[0].pageX - e.touches[1].pageX,
                    e.touches[0].pageY - e.touches[1].pageY
                );
                const scaleFactor = currentDist / modalState.initialDist;
                modalState.scale = Math.min(Math.max(0.1, modalState.initialScale * scaleFactor), 8);
                requestUpdate();
                return;
            }

            if (!modalState.isDragging) return;

            const x = e.touches ? e.touches[0].clientX : e.clientX;
            const y = e.touches ? e.touches[0].clientY : e.clientY;
            
            const deltaX = x - modalState.startX;
            const deltaY = y - modalState.startY;

            modalState.pX = modalState.lastX + deltaX;
            modalState.pY = modalState.lastY + deltaY;
            
            requestUpdate();
        };

        const endDrag = () => {
            modalState.isDragging = false;
            modalState.initialDist = 0;
            const img = document.getElementById('zbe-modal-img');
            if(img) img.style.cursor = 'grab';
        };

        modalContainer.addEventListener('mousedown', startDrag);
        modalContainer.addEventListener('touchstart', startDrag, { passive: false });
        
        window.addEventListener('mousemove', doDrag);
        window.addEventListener('touchmove', doDrag, { passive: false });
        
        window.addEventListener('mouseup', endDrag);
        window.addEventListener('touchend', endDrag);
    }
});