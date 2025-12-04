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
    // Evitar re-renderizado si ya tiene contenido
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

    // Lazy load de datos específicos
    if (viewId === 'transporte') {
        const select = document.getElementById('metro-stop-select');
        if (select && select.options.length <= 1) loadMetroStops();
    }
    if (viewId === 'ora') {
        renderOraStreets();
    }
}

// --- LÓGICA ZOOM IMAGEN ---
let scale = 1, pX = 0, pY = 0, startX = 0, startY = 0, isDragging = false;

function updateTransform() {
    const img = document.getElementById('zbe-map-img');
    if(img) img.style.transform = `translate(${pX}px, ${pY}px) scale(${scale})`;
}

window.adjustZoom = function(delta) {
    scale = Math.max(0.5, Math.min(4, scale + delta)); 
    updateTransform();
}

window.resetZoom = function() {
    scale = 1; pX = 0; pY = 0;
    updateTransform();
}

// Event Listeners para Zoom (Definidos fuera para evitar duplicados)
document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.getElementById('zbe-map-container');
    if(imgContainer) {
        const startDrag = (e) => {
            if(e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            e.preventDefault();
            isDragging = true;
            startX = (e.touches ? e.touches[0].clientX : e.clientX) - pX;
            startY = (e.touches ? e.touches[0].clientY : e.clientY) - pY;
            imgContainer.style.cursor = 'grabbing';
        };

        const doDrag = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = (e.touches ? e.touches[0].clientX : e.clientX);
            const y = (e.touches ? e.touches[0].clientY : e.clientY);
            pX = x - startX;
            pY = y - startY;
            updateTransform();
        };

        const stopDrag = () => {
            isDragging = false;
            if(imgContainer) imgContainer.style.cursor = 'grab';
        };

        imgContainer.addEventListener('mousedown', startDrag);
        imgContainer.addEventListener('touchstart', startDrag);
        imgContainer.addEventListener('wheel', (e) => { e.preventDefault(); adjustZoom(e.deltaY > 0 ? -0.1 : 0.1); });
        
        // Eventos globales para el arrastre
        window.addEventListener('mousemove', doDrag);
        window.addEventListener('touchmove', doDrag, {passive: false});
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchend', stopDrag);
    }

    // Cargar paradas de metro al inicio si estamos en esa vista, o precargarlas
    loadMetroStops();
});

// --- LÓGICA TRANSPORTE ---
const METRO_NAMES = { "3_1116": "M-156", "3_1117": "M-157", "3_644": "0111", "3_701": "0256", "3_739": "0305" };
const BUS_COLORS = { '4': 'bg-red-600', '8': 'bg-amber-700', '9': 'bg-orange-600', '11': 'bg-orange-400', '21': 'bg-red-700', '33': 'bg-red-800', '5': 'bg-cyan-500', '25': 'bg-blue-400', 'C30': 'bg-purple-600', 'C31': 'bg-pink-500', 'C32': 'bg-fuchsia-600', 'C34': 'bg-rose-500', 'C5': 'bg-red-800', 'U1': 'bg-green-600', 'U2': 'bg-lime-500', 'U3': 'bg-emerald-600', 'S0': 'bg-slate-600', 'S2': 'bg-stone-600', 'Metro': 'bg-blue-700' };

function getLineColor(id) { 
    if (id.startsWith('M') || (!isNaN(id) && id.length >= 3)) return 'bg-green-600'; 
    return BUS_COLORS[id] || 'bg-gray-600';
}

function isNight() { const h = new Date().getHours(); return (h >= 0 && h < 6) || (h === 23 && new Date().getMinutes() >= 30); }

window.searchStop = async function() {
    const stopCode = document.getElementById('stop-code').value.trim();
    const resEl = document.getElementById('bus-results');
    
    if (!stopCode) return resEl.innerHTML = '<p class="text-red-500 mt-2 text-center text-sm">Introduce código.</p>';
    resEl.innerHTML = '<div class="text-center py-4"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div></div>';
    
    try {
        const res = await fetch(`${API_BASE_URL}/bus/llegadas/${stopCode}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        
        if (!data?.proximos?.length) {
            resEl.innerHTML = `<div class="p-4 bg-gray-50 rounded-xl text-center"><p class="font-bold">Parada ${data.parada?.nombre || stopCode}</p><p class="text-gray-500">Sin estimaciones.</p></div>`;
            return;
        }
        
        const list = data.proximos.map(p => {
            const line = METRO_NAMES[p.linea?.id] || p.linea?.id || '?';
            const time = p.minutos === 0 ? '<span class="text-red-600 font-black animate-pulse">LLEGANDO</span>' : `<span class="text-blue-600 font-bold">${p.minutos} min</span>`;
            return `<li class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"><div class="flex items-center gap-3"><span class="text-white text-xs font-bold px-2 py-1 rounded ${getLineColor(line)} min-w-[2.5rem] text-center">${line}</span><span class="font-medium text-gray-700 text-sm truncate w-32">${p.destino}</span></div>${time}</li>`;
        }).join('');
        
        resEl.innerHTML = `<div class="bg-white rounded-xl border border-gray-200 overflow-hidden"><div class="bg-gray-50 p-2 text-center font-bold text-gray-700 text-xs uppercase tracking-wide">Parada: ${data.parada?.nombre}</div><ul class="p-3">${list}</ul></div>`;
    } catch (e) {
        resEl.innerHTML = isNight() ? `<div class="p-3 bg-blue-50 text-blue-800 rounded-xl text-center text-sm font-bold">🌙 Servicio Nocturno</div>` : `<p class="text-red-500 mt-2 text-center">⚠️ Error conexión</p>`;
    }
}

window.searchMetroStop = async function() {
    const select = document.getElementById('metro-stop-select');
    const resEl = document.getElementById('metro-results');
    if (!select.value) return;

    resEl.innerHTML = '<div class="text-center py-4"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div></div>';
    try {
        const res = await fetch(`${API_BASE_URL}/metro/llegadas/${select.value}`);
        if(!res.ok) throw new Error();
        const data = await res.json();

        if (!data?.proximos?.length) return resEl.innerHTML = `<div class="p-4 bg-gray-50 rounded-xl text-center text-sm text-gray-500">Sin trenes próximos.</div>`;

        const list = data.proximos.map(p => `<li class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"><span class="font-medium text-gray-700 text-sm">Hacia ${p.direccion}</span>${p.minutos === 0 ? '<span class="text-red-600 font-black">YA</span>' : `<span class="text-green-600 font-bold">${p.minutos} min</span>`}</li>`).join('');
        resEl.innerHTML = `<div class="bg-white rounded-xl border border-gray-200 overflow-hidden"><div class="bg-green-50 p-2 text-center font-bold text-green-800 text-xs uppercase">${select.options[select.selectedIndex].text}</div><ul class="p-3">${list}</ul></div>`;
    } catch (e) {
        resEl.innerHTML = isNight() ? `<div class="p-3 bg-green-50 text-green-800 rounded-xl text-center text-sm font-bold">🌙 Servicio Nocturno</div>` : `<p class="text-red-500 mt-2 text-center">⚠️ Error conexión</p>`;
    }
}

async function loadMetroStops() {
    try {
        const select = document.getElementById('metro-stop-select');
        // Si ya tiene datos (más que la opción por defecto), no recargar
        if (select && select.options.length > 1) return;

        const stops = await (await fetch(`${API_BASE_URL}/metro/paradas`)).json();
        if(select) select.innerHTML = '<option value="">Selecciona parada...</option>' + stops.map(s => `<option value="${s.id}">${s.nombre}</option>`).join('');
    } catch (e) { console.error("Error stops"); }
}