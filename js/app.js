if (window.location.hostname !== 'scoiattoliasabasket.vercel.app') {
      const b = document.getElementById('test-env-banner');
      const h = document.getElementById('test-env-host');
      if (b) b.classList.remove('hidden');
      if (h) h.textContent = window.location.hostname || 'locale';
    }

    const firebaseConfig = {
      apiKey: "AIzaSyDBUQzZ1EMsDH3rHxSB_9tcJSqadaQu8HY",
      authDomain: "asa-basket-scoiattoli.firebaseapp.com",
      projectId: "asa-basket-scoiattoli",
      storageBucket: "asa-basket-scoiattoli.firebasestorage.app",
      messagingSenderId: "199036591405",
      appId: "1:199036591405:web:4c02d7ea6be97312bc87a4"
    };

    let db = null;
    try {
      if (!firebase.apps.length && firebaseConfig.apiKey !== "INSERISCI_TUA_API_KEY") {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
      }
    } catch (e) {
      console.error("Errore inizializzazione Firebase", e);
    }

    const IS_PROD_ENV = (window.location.hostname === 'scoiattoliasabasket.vercel.app');
    const FIRESTORE_DOC_ID = IS_PROD_ENV ? 'scoiattoli_data' : 'scoiattoli_data_test';
    const STORAGE_PREFIX = IS_PROD_ENV ? '' : 'test_';
    const DB_CACHE_KEY = STORAGE_PREFIX + 'asa_scoiattoli_db_cache_v1';
    const DB_LIVE_KEY = STORAGE_PREFIX + 'asa_scoiattoli_db_live_v1';
    const UNLOCKED_SESSION_KEY = STORAGE_PREFIX + 'asa_scoiattoli_unlocked_v1';

    const defaultDbState = {
      ticker: {
        attivo: true,
        testo: "PROSSIMA GARA (1ª ANDATA): SABATO 28 NOVEMBRE • ORE 12:30 VS MALASPINA SPORT TEAM (PALESTRA BUCUM, VIA MONTE ORTIGARA 2) • ALLENAMENTI MARTEDÌ ORE 17:00 E MERCOLEDÌ ORE 18:00"
      },
      roster: [
        { nome: "Alessandro Affronti", numero: "-" },
        { nome: "Filippo Bertinazzi", numero: "75" },
        { nome: "Claudio Brucculeri", numero: "-" },
        { nome: "Mattia Caruso", numero: "23" },
        { nome: "Mirko d'Elia", numero: "48" },
        { nome: "Riccardo Grasso", numero: "99" },
        { nome: "Dominic Husejinovic", numero: "-" },
        { nome: "Andrea Insisa", numero: "7" },
        { nome: "Francesco Mascarella", numero: "-" },
        { nome: "Jacopo Morselli", numero: "41" },
        { nome: "Francesco Nicotra", numero: "19" },
        { nome: "Mattia Oliverio", numero: "45" },
        { nome: "Lorenzo Perrone", numero: "39" },
        { nome: "Daniel Prudenzano", numero: "6" },
        { nome: "Gabriele Riccobene", numero: "9" },
        { nome: "Youness Rizki", numero: "74" },
        { nome: "Nathan Sala", numero: "28" },
        { nome: "Francesco Sale", numero: "49" },
        { nome: "Gabriele Stavola", numero: "78" },
        { nome: "Giulia Tamanza", numero: "70" },
        { nome: "Andrea Zingarino", numero: "8" },
        { nome: "Jonas Mantoan", numero: "24" }
      ],
      partite: [
              {
                      "id": "1ª Andata",
                      "garaNumero": "22563",
                      "data": "28/11/2026",
                      "ora": "12:30",
                      "avversario": "MALASPINA SPORT TEAM",
                      "squadraCasa": "ASA Cinisello",
                      "squadraTrasferta": "MALASPINA SPORT TEAM",
                      "tipo": "In Casa",
                      "fase": "Andata",
                      "stato": "prossimo_incontro",
                      "risultato": "",
                      "sede": "Via Monte Ortigara 2, Cinisello Balsamo",
                      "nota": ""
              },
              {
                      "id": "2ª Andata",
                      "garaNumero": "22568",
                      "data": "29/11/2026",
                      "ora": "09:30",
                      "avversario": "SAN GABRIELE BASKET Cesa-Trotter",
                      "squadraCasa": "ASA Cinisello",
                      "squadraTrasferta": "SAN GABRIELE BASKET Cesa-Trotter",
                      "tipo": "In Casa",
                      "fase": "Andata",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Monte Ortigara 2, Cinisello Balsamo",
                      "nota": ""
              },
              {
                      "id": "3ª Andata",
                      "garaNumero": "22573",
                      "data": "12/12/2026",
                      "ora": "09:30",
                      "avversario": "POL. RONDINELLA A.S.D. 1955",
                      "squadraCasa": "POL. RONDINELLA A.S.D. 1955",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "Trasferta",
                      "fase": "Andata",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "V.le Matteotti 425, Sesto San Giovanni",
                      "nota": ""
              },
              {
                      "id": "4ª Andata",
                      "garaNumero": "22577",
                      "data": "07/02/2027",
                      "ora": "11:30",
                      "avversario": "A.S.DIL. CENTRO SCHUSTER",
                      "squadraCasa": "A.S.DIL. CENTRO SCHUSTER",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "Trasferta",
                      "fase": "Andata",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Padre Lodovico Morell s.j. 2 (via Feltre 100), Milano",
                      "nota": ""
              },
              {
                      "id": "5ª Andata",
                      "garaNumero": "22582",
                      "data": "09/01/2027",
                      "ora": "14:30",
                      "avversario": "A.S.D. CIESSE FREEBASKET",
                      "squadraCasa": "A.S.D. CIESSE FREEBASKET",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "Trasferta",
                      "fase": "Andata",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Giacosa 46, Milano",
                      "nota": ""
              },
              {
                      "id": "6ª Andata",
                      "garaNumero": "22585",
                      "data": "17/01/2027",
                      "ora": "09:00",
                      "avversario": "A.S.DIL. BASKET P.O.S.A.L.",
                      "squadraCasa": "A.S.DIL. BASKET P.O.S.A.L.",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "Trasferta",
                      "fase": "Andata",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Giorgio Enrico Falck 110, Sesto San Giovanni",
                      "nota": ""
              },
              {
                      "id": "7ª Andata",
                      "garaNumero": "22587",
                      "data": "24/01/2027",
                      "ora": "09:30",
                      "avversario": "SAN GABRIELE BASKET Frigia",
                      "squadraCasa": "SAN GABRIELE BASKET Frigia",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "In Casa",
                      "fase": "Andata",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Monte Ortigara 2, Cinisello Balsamo",
                      "nota": ""
              },
              {
                      "id": "1ª Ritorno",
                      "garaNumero": "22593",
                      "data": "31/01/2027",
                      "ora": "09:30",
                      "avversario": "MALASPINA SPORT TEAM",
                      "squadraCasa": "MALASPINA SPORT TEAM",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "Trasferta",
                      "fase": "Ritorno",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Valvassor Peroni 48, Milano",
                      "nota": ""
              },
              {
                      "id": "2ª Ritorno",
                      "garaNumero": "22595",
                      "data": "21/02/2027",
                      "ora": "09:15",
                      "avversario": "SAN GABRIELE BASKET Cesa-Trotter",
                      "squadraCasa": "SAN GABRIELE BASKET Cesa-Trotter",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "Trasferta",
                      "fase": "Ritorno",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Giacosa 46, Milano",
                      "nota": ""
              },
              {
                      "id": "3ª Ritorno",
                      "garaNumero": "22600",
                      "data": "27/02/2027",
                      "ora": "09:30",
                      "avversario": "POL. RONDINELLA A.S.D. 1955",
                      "squadraCasa": "POL. RONDINELLA A.S.D. 1955",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "Trasferta",
                      "fase": "Ritorno",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "V.le Matteotti 425, Sesto San Giovanni",
                      "nota": ""
              },
              {
                      "id": "4ª Ritorno",
                      "garaNumero": "22603",
                      "data": "06/03/2027",
                      "ora": "14:30",
                      "avversario": "A.S.DIL. CENTRO SCHUSTER",
                      "squadraCasa": "ASA Cinisello",
                      "squadraTrasferta": "A.S.DIL. CENTRO SCHUSTER",
                      "tipo": "In Casa",
                      "fase": "Ritorno",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Monte Ortigara 2, Cinisello Balsamo",
                      "nota": ""
              },
              {
                      "id": "5ª Ritorno",
                      "garaNumero": "22607",
                      "data": "14/03/2027",
                      "ora": "09:30",
                      "avversario": "A.S.D. CIESSE FREEBASKET",
                      "squadraCasa": "ASA Cinisello",
                      "squadraTrasferta": "A.S.D. CIESSE FREEBASKET",
                      "tipo": "In Casa",
                      "fase": "Ritorno",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Monte Ortigara 2, Cinisello Balsamo",
                      "nota": ""
              },
              {
                      "id": "6ª Ritorno",
                      "garaNumero": "22611",
                      "data": "21/03/2027",
                      "ora": "09:30",
                      "avversario": "A.S.DIL. BASKET P.O.S.A.L.",
                      "squadraCasa": "ASA Cinisello",
                      "squadraTrasferta": "A.S.DIL. BASKET P.O.S.A.L.",
                      "tipo": "In Casa",
                      "fase": "Ritorno",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Monte Ortigara 2, Cinisello Balsamo",
                      "nota": ""
              },
              {
                      "id": "7ª Ritorno",
                      "garaNumero": "22617",
                      "data": "04/04/2027",
                      "ora": "09:15",
                      "avversario": "SAN GABRIELE BASKET Frigia",
                      "squadraCasa": "SAN GABRIELE BASKET Frigia",
                      "squadraTrasferta": "ASA Cinisello",
                      "tipo": "Trasferta",
                      "fase": "Ritorno",
                      "stato": "programmata",
                      "risultato": "",
                      "sede": "Via Frigia 4, Milano",
                      "nota": ""
              }
      ],
      convocazioni: {},
      disponibilita: {}
    };

    let dbState = JSON.parse(JSON.stringify(defaultDbState));
    let currentNewsFilter = 'all';

    let isDbSynced = false;

    function normalizeDisponibilitaValue(val) {
      if (val === true || val === 'disponibile') return 'disponibile';
      if (val === false || val === 'non_disponibile') return 'non_disponibile';
      return 'in_attesa';
    }

    function getMatchAvailabilityCounts(matchId) {
      const roster = Array.isArray(dbState.roster) ? dbState.roster : [];
      const matchMap = (dbState.disponibilita && dbState.disponibilita[matchId]) ? dbState.disponibilita[matchId] : {};
      let disponibili = 0;
      let nonDisponibili = 0;
      let inAttesa = 0;

      roster.forEach(a => {
        const st = normalizeDisponibilitaValue(matchMap[a.nome]);
        if (st === 'disponibile') disponibili++;
        else if (st === 'non_disponibile') nonDisponibili++;
        else inAttesa++;
      });

      return { disponibili, nonDisponibili, inAttesa, totale: roster.length };
    }

    function initRealtimeDatabase() {
      if (db) {
        const docRef = db.collection("asa_portal").doc(FIRESTORE_DOC_ID);
        docRef.onSnapshot((doc) => {
          if (doc.exists) {
            dbState = doc.data();
            isDbSynced = true;
            if (dbState.partite) {
              dbState.partite.forEach(p => {
                if (p.stato === 'rimandata') p.stato = 'rinviata';
              });
            }
            try { localStorage.setItem(DB_CACHE_KEY, JSON.stringify(dbState)); } catch (e) {}
            sortPartite();
            renderAllPublicViews();
            if (!document.getElementById('view-dirigente').classList.contains('hidden')) {
              renderRegiaMatchesList();
            }
            if (!document.getElementById('view-coach').classList.contains('hidden')) {
              loadMatchConvocazioni();
            }
          } else {
            docRef.set(defaultDbState);
          }
        }, (error) => {
          console.error("Errore ascolto Firestore in tempo reale:", error);
          isDbSynced = false;
          loadLocalFallback();
        });
      } else {
        isDbSynced = false;
        loadLocalFallback();
      }
    }

    function loadLocalFallback() {
      const saved = localStorage.getItem(DB_CACHE_KEY) || localStorage.getItem(DB_LIVE_KEY);
      if (saved) {
        try {
          dbState = JSON.parse(saved);
          if (dbState.partite) {
            dbState.partite.forEach(p => {
              if (p.stato === 'rimandata') p.stato = 'rinviata';
            });
          }
        } catch (e) {}
      }
      sortPartite();
      renderAllPublicViews();
    }

    async function savePartialToDatabase(updatePayload) {
      sortPartite();
      if (!db) {
        alert("Connessione al database non disponibile. Riprova quando sei online.");
        return false;
      }
      try {
        await db.collection("asa_portal").doc(FIRESTORE_DOC_ID).update(updatePayload);
        try { localStorage.setItem(DB_CACHE_KEY, JSON.stringify(dbState)); } catch (e) {}
        const toast = document.getElementById('regia-toast');
        if (toast) {
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 2500);
        }
        return true;
      } catch (e) {
        console.error("[Firestore] Errore aggiornamento mirato:", e);
        alert("Errore di rete durante il salvataggio sul server. Controlla la connessione e riprova.");
        return false;
      }
    }

    async function saveToDatabase(sectionName) {
      sortPartite();
      if (!db) {
        alert("Connessione al database non disponibile. Impossibile salvare in modalità offline.");
        return false;
      }
      try {
        const payload = sectionName && dbState[sectionName] !== undefined
          ? { [sectionName]: dbState[sectionName] }
          : dbState;
        await db.collection("asa_portal").doc(FIRESTORE_DOC_ID).update(payload);
        try { localStorage.setItem(DB_CACHE_KEY, JSON.stringify(dbState)); } catch (e) {}
        const toast = document.getElementById('regia-toast');
        if (toast) {
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 2500);
        }
        return true;
      } catch (e) {
        console.error("[Firestore] Errore salvataggio:", e);
        alert("Salvataggio non riuscito: verifica la connessione internet e riprova.");
        return false;
      }
    }

    function sortPartite() {
      if (!dbState.partite) return;
      dbState.partite.sort((a, b) => {
        const parseDate = (d) => {
          if (!d || !d.includes('/')) return 0;
          const p = d.split('/');
          return parseInt(p[2] + p[1] + p[0], 10);
        };
        return parseDate(a.data) - parseDate(b.data);
      });
    }

const APP_VERSION = '2026-11-25-v2';

function ensureLatestPageVersion() {
  const url = new URL(window.location.href);
  if (url.searchParams.get('v') !== APP_VERSION) {
    url.searchParams.set('v', APP_VERSION);
    window.location.replace(url.toString());
    return false;
  }
  return true;
}

window.addEventListener('DOMContentLoaded', () => {
  if (!ensureLatestPageVersion()) return;
  checkSiteGate();
  initRealtimeDatabase();
});

    function renderAllPublicViews() {
      sortPartite();
      renderTicker();
      renderNewsCards();
      renderRosterMain();
      renderFullSchedule();
    }

    function renderTicker() {
      const wrapper = document.getElementById('live-ticker-wrapper');
      const content = document.getElementById('live-ticker-content');
      if (!wrapper || !content) return;

      if (!dbState.ticker || !dbState.ticker.attivo || !dbState.ticker.testo.trim()) {
        wrapper.classList.add('hidden');
        return;
      }

      wrapper.classList.remove('hidden');
      const parts = dbState.ticker.testo.split('•').map(s => s.trim()).filter(Boolean);
      const singleTrack = parts.map((p, i) => `
        <span class="inline-flex items-center gap-2 shrink-0">
          ${i === 0 ? '<span class="w-2 h-2 rounded-full bg-white animate-ping"></span>' : ''}
          ${p}
        </span>
      `).join('<span class="mx-4 shrink-0">•</span>');

      content.innerHTML = `
        <div class="inline-flex items-center shrink-0 pr-8">${singleTrack}<span class="mx-4">•</span></div>
        <div class="inline-flex items-center shrink-0 pr-8" aria-hidden="true">${singleTrack}<span class="mx-4">•</span></div>
      `;

      const totalChars = dbState.ticker.testo.length;
      const durationSec = Math.max(12, Math.min(35, Math.round(totalChars * 0.22)));
      content.style.setProperty('--ticker-duration', `${durationSec}s`);
    }

    function switchNav(navId) {
      ['news', 'squadra', 'stagione', 'coach', 'dirigente'].forEach(id => {
        const viewEl = document.getElementById('view-' + id);
        if (viewEl) viewEl.classList.add('hidden');
        const btn = document.getElementById('nav-' + id);
        if (btn) {
          if (id === 'coach') {
            btn.className = "px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl transition bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 shadow-sm cursor-pointer";
          } else {
            btn.className = "px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl transition text-white hover:bg-white/10 cursor-pointer";
          }
        }
      });

      const activeView = document.getElementById('view-' + navId);
      if (activeView) activeView.classList.remove('hidden');
      const activeBtn = document.getElementById('nav-' + navId);
      if (activeBtn) {
        if (navId === 'coach') {
          activeBtn.className = "px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl transition bg-amber-400 text-slate-900 font-extrabold shadow cursor-pointer";
        } else if (navId !== 'dirigente') {
          activeBtn.className = "px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl transition bg-white text-[#0f2544] font-bold shadow-md cursor-pointer";
        }
      }

      if (navId === 'squadra') renderRosterMain();
      if (navId === 'stagione') renderFullSchedule();
      if (navId === 'news') renderNewsCards();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function filterNews(type) {
      currentNewsFilter = type;
      ['all', 'recenti', 'prossimi'].forEach(t => {
        const btn = document.getElementById('tab-' + t);
        if (btn) {
          btn.className = t === type
            ? "px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs font-bold bg-[#0f2544] text-white shadow transition cursor-pointer whitespace-nowrap"
            : "px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer whitespace-nowrap";
        }
      });

      const allCards = document.querySelectorAll('.news-card');
      allCards.forEach(card => {
        if (type === 'all') {
          card.style.display = card.classList.contains('card-panoramica') ? 'flex' : 'none';
        } else if (type === 'recenti') {
          card.style.display = card.classList.contains('card-recenti') ? 'flex' : 'none';
        } else if (type === 'prossimi') {
          card.style.display = card.classList.contains('card-prossimi') ? 'flex' : 'none';
        }
      });
    }

    function switchSquadraTab(tab) {
      ['roster', 'staff'].forEach(t => {
        document.getElementById('squadra-content-' + t).classList.add('hidden');
        document.getElementById('sq-tab-' + t).className = "px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer";
      });
      document.getElementById('squadra-content-' + tab).classList.remove('hidden');
      document.getElementById('sq-tab-' + tab).className = "px-4 py-2 rounded-xl text-xs font-bold bg-[#0f2544] text-white shadow transition cursor-pointer";
    }

    function stripVenuePrefix(sede) {
      if (!sede) return "";
      let clean = String(sede).trim();
      if (clean.includes(" - ")) {
        const parts = clean.split(" - ");
        const tail = parts.slice(1).join(" - ").trim();
        if (/\b(via|v\.le|viale|piazza|p\.zza|corso|c\.so)\b/i.test(tail)) {
          clean = tail;
        }
      }
      return clean;
    }

    function formatSedeCliccabile(sede) {
  const cleanSede = stripVenuePrefix(sede);
  if (!cleanSede) return "";
  const encoded = encodeURIComponent(cleanSede);
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  return `<a href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" title="Apri indirizzo nel navigatore" class="inline break-words underline decoration-slate-400 hover:text-[#c8102e] hover:decoration-[#c8102e] transition">📍 ${cleanSede}</a>`;
}

  function setAuthGateScrollLock(locked) {
  document.documentElement.classList.toggle('overflow-hidden', locked);
  document.body.classList.toggle('overflow-hidden', locked);
}

function checkSiteGate() {
  const gate = document.getElementById('site-auth-gate');
  if (!gate) return;
  if (sessionStorage.getItem(UNLOCKED_SESSION_KEY) === '1') {
    gate.classList.add('hidden');
    setAuthGateScrollLock(false);
  } else {
    gate.classList.remove('hidden');
    setAuthGateScrollLock(true);
  }
}

function verifySiteGate() {
  const input = document.getElementById('site-auth-pass');
  const err = document.getElementById('site-auth-error');
  if (!input) return;
  if (input.value === 'Edvige2027') {
    sessionStorage.setItem(UNLOCKED_SESSION_KEY, '1');
    if (err) err.classList.add('hidden');
    document.getElementById('site-auth-gate').classList.add('hidden');
    setAuthGateScrollLock(false);
  } else {
    if (err) err.classList.remove('hidden');
    input.value = '';
    input.focus();
  }
}

    function logoutSiteGate() {
      sessionStorage.removeItem(UNLOCKED_SESSION_KEY);
      const input = document.getElementById('site-auth-pass');
      if (input) input.value = '';
      checkSiteGate();
    }

    function formatSquadreVerticali(match) {
      const squadraA = match.squadraCasa || (match.tipo === 'In Casa' ? 'ASA Cinisello' : match.avversario);
      const squadraB = match.squadraTrasferta || (match.tipo === 'In Casa' ? match.avversario : 'ASA Cinisello');

      return `
        <div class="flex flex-col items-center justify-center gap-0.5 py-1">
          <span class="text-sm sm:text-base font-black tracking-tight text-[#0f2544] leading-snug">${squadraA}</span>
          <span class="text-[11px] font-black uppercase tracking-widest text-[#c8102e]">vs</span>
          <span class="text-sm sm:text-base font-black tracking-tight text-[#0f2544] leading-snug">${squadraB}</span>
        </div>
      `;
    }

    function computeMatchScores(match) {
      const tempiniList = Array.isArray(match.tempini) && match.tempini.length > 0
        ? match.tempini
        : [
            { periodo: "1° Tempino", asa: 0, opp: 0 },
            { periodo: "2° Tempino", asa: 0, opp: 0 },
            { periodo: "3° Tempino", asa: 0, opp: 0 },
            { periodo: "4° Tempino", asa: 0, opp: 0 },
            { periodo: "5° Tempino", asa: 0, opp: 0 },
            { periodo: "6° Tempino", asa: 0, opp: 0 }
          ];

      let ptAsa = 0, ptOpp = 0;
      let canAsa = 0, canOpp = 0;

      tempiniList.forEach(t => {
        const a = parseInt(t.asa, 10) || 0;
        const o = parseInt(t.opp, 10) || 0;
        canAsa += a;
        canOpp += o;
        if (a > o) {
          ptAsa += 3;
          ptOpp += 1;
        } else if (o > a) {
          ptOpp += 3;
          ptAsa += 1;
        } else {
          ptAsa += 2;
          ptOpp += 2;
        }
      });

      const hasTempini = Array.isArray(match.tempini) && match.tempini.length > 0;
      const classificaStr = hasTempini ? `${ptAsa} - ${ptOpp}` : (match.risultato || "0 - 0");
      const canestriStr = `${canAsa} - ${canOpp}`;

      return {
        ptAsa,
        ptOpp,
        canAsa,
        canOpp,
        hasTempini,
        classificaStr,
        canestriStr,
        tempiniList
      };
    }

 function renderNewsCards() {
  const container = document.getElementById('news-cards-container');
  if (!container || !dbState.partite) return;

  const concluse = dbState.partite.filter(p => p.stato === 'conclusa');
  const attive = dbState.partite.filter(p => p.stato !== 'conclusa');

  attive.sort((a, b) => {
    const parseDate = (d) => {
      if (!d || !d.includes('/')) return 0;
      const p = d.split('/');
      return parseInt(p[2] + p[1] + p[0], 10);
    };
    return parseDate(a.data) - parseDate(b.data);
  });

  let htmlContent = "";

  if (concluse.length > 0) {
    [...concluse].reverse().forEach((item, idx) => {
      let etichettaTop = idx === 0 ? "Ultima Partita Giocata" : "Partita Recente";
      let extraClasses = idx === 0 ? "card-recenti card-panoramica" : "card-recenti";
      htmlContent += `
        <div class="news-card ${extraClasses} min-w-0 max-w-full bg-white border-2 border-slate-200 hover:border-[#0f2544] rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group relative overflow-hidden">
          <div class="space-y-4 min-w-0">
            <div class="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-3 min-w-0">
              <span class="text-xs font-extrabold text-slate-700 uppercase tracking-wider truncate">${etichettaTop}</span>
              <span class="px-3 py-1 rounded-full text-[10px] font-black bg-slate-100 text-slate-700 uppercase tracking-widest shrink-0">Conclusa</span>
            </div>
            <div class="min-w-0">
              <span class="text-xs font-bold text-slate-500">${item.data}${item.ora ? ' • Ore ' + item.ora : ''}</span>
              <h3 class="text-xl font-black text-[#0f2544] tracking-tight mt-0.5 break-words">${item.id}</h3>
              <div class="text-xs text-slate-600 mt-1.5 break-words">${formatSedeCliccabile(item.sede)}</div>
            </div>
            ${(() => {
              const scores = computeMatchScores(item);
              return `
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-2 min-w-0 overflow-hidden">
                  <div class="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Time</div>
                  <div class="text-3xl font-black tracking-tighter text-[#0f2544] break-words">${scores.classificaStr}</div>
                  <div class="min-w-0 break-words">${formatSquadreVerticali(item)}</div>
                </div>
              `;
            })()}
          </div>
          <div class="pt-6 min-w-0">
            <button onclick="openMatchModal('${item.id}')" class="w-full py-3 bg-[#0f2544] hover:bg-slate-800 text-white rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow">DETTAGLI & STATISTICHE</button>
          </div>
        </div>
      `;
    });
  } else {
    htmlContent += `
      <div class="news-card card-recenti min-w-0 max-w-full bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
        <div class="space-y-4 text-center py-10 min-w-0">
          <span class="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Archivio Recenti</span>
          <h3 class="text-lg font-black text-[#0f2544]">Nessuna partita conclusa</h3>
          <p class="text-xs text-slate-500">Le partite concluse appariranno qui non appena archiviate dallo staff.</p>
        </div>
      </div>
    `;
  }

  function renderActiveCard(item, cardClasses) {
    const isProssimoIncontro = item.stato === 'prossimo_incontro';
    const isRinviata = item.stato === 'rinviata';
    const convocatiList = dbState.convocazioni && dbState.convocazioni[item.id] ? dbState.convocazioni[item.id] : [];
    const hasConvocati = convocatiList.length > 0;
    const availCounts = getMatchAvailabilityCounts(item.id);
    const dispCount = availCounts.disponibili;

    let etichettaTop = "In Agenda";
    let cardWrapperClass = "bg-white border-2 border-slate-200 hover:border-[#0f2544]";
    let badgeHTML = `<span class="px-3 py-1 rounded-full text-[10px] font-black bg-amber-500 text-white uppercase tracking-widest shadow-xs shrink-0">Programmata (${item.tipo})</span>`;
    let centralBoxClass = "bg-amber-100/70 border border-amber-200 text-amber-950";
    let centralLabel = "In Agenda • " + item.tipo.toUpperCase();
    let centralSubText = "Partita di campionato";
    let buttonHTML = hasConvocati
      ? `<button onclick="openMatchModal('${item.id}')" class="w-full py-3 bg-[#0f2544] hover:bg-[#c8102e] text-white rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow">LISTA CONVOCATI (${convocatiList.length})</button>`
      : `<button onclick="openAvailabilityModal('${item.id}')" class="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow flex items-center justify-between gap-2 px-4 sm:px-5"><span class="truncate">CONFERMA DISPONIBILITÀ</span> <span class="bg-slate-950 text-amber-300 px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0">${dispCount} disponibili</span></button>`;

    if (isProssimoIncontro) {
      etichettaTop = "Prossimo Incontro";
      cardWrapperClass = "bg-emerald-50/70 border-2 border-emerald-400 shadow-emerald-100";
      badgeHTML = `
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-600 text-white uppercase tracking-widest shadow-xs shrink-0">
          <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span> Confermata (${item.tipo})
        </span>`;
      centralBoxClass = "bg-emerald-100/70 border border-emerald-300 text-emerald-950";
      centralLabel = "Prossima Gara • " + item.tipo.toUpperCase();

      if (hasConvocati) {
        buttonHTML = `<button onclick="openMatchModal('${item.id}')" class="w-full py-3 bg-slate-900 hover:bg-[#c8102e] text-white rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow">LISTA CONVOCATI (${convocatiList.length})</button>`;
      } else {
        buttonHTML = `<button onclick="openAvailabilityModal('${item.id}')" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow flex items-center justify-between gap-2 px-4 sm:px-5"><span class="truncate">CONFERMA DISPONIBILITÀ</span> <span class="bg-slate-950 text-emerald-300 px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0">${dispCount} disponibili</span></button>`;
      }
    }

    if (isRinviata) {
      etichettaTop = "Gara Rinviata";
      cardWrapperClass = "bg-sky-50/80 border-2 border-sky-400 shadow-sky-100";
      badgeHTML = `
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-sky-600 text-white uppercase tracking-widest shadow-xs shrink-0">
          <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span> Rinviata
        </span>`;
      centralBoxClass = "bg-sky-100/80 border border-sky-300 text-sky-950";
      centralLabel = "Avviso Gara Rinviata";
      centralSubText = item.nota ? item.nota : "Nuova data da definire";
      buttonHTML = `<div class="w-full py-3 bg-sky-200/70 text-sky-900 rounded-2xl text-xs font-extrabold uppercase tracking-wider text-center border border-sky-300 select-none break-words px-3">Disponibilità Sospese • In Attesa Nuova Data</div>`;
    }

    return `
      <div class="news-card ${cardClasses} min-w-0 max-w-full ${cardWrapperClass} rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group relative overflow-hidden">
        <div class="space-y-4 min-w-0">
          <div class="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-3 min-w-0">
            <span class="text-xs font-extrabold text-slate-700 uppercase tracking-wider truncate">${etichettaTop}</span>
            ${badgeHTML}
          </div>
          <div class="min-w-0">
            <span class="text-xs font-bold text-slate-500">${item.data}${item.ora ? ' • Ore ' + item.ora : ''}</span>
            <h3 class="text-xl font-black text-[#0f2544] tracking-tight mt-0.5 break-words">${item.id}</h3>
            <div class="text-xs text-slate-600 mt-1.5 break-words">${formatSedeCliccabile(item.sede)}</div>
          </div>
          <div class="${centralBoxClass} rounded-2xl p-4 sm:p-5 text-center space-y-2 min-w-0 overflow-hidden">
            <div class="text-[10px] font-black uppercase tracking-widest text-slate-500 break-words">${centralLabel}</div>
            <div class="min-w-0 break-words">${formatSquadreVerticali(item)}</div>
            <div class="text-xs font-bold text-slate-700 pt-0.5 break-words">${centralSubText}</div>
          </div>
        </div>
        <div class="pt-6 min-w-0">
          ${buttonHTML}
        </div>
      </div>
    `;
  }

  const limitePanoramica = concluse.length > 0 ? 2 : 3;
  const codaProssimi = attive.slice(0, 3);
  const attiveVisibili = attive.slice(0, Math.max(limitePanoramica, codaProssimi.length));

  attiveVisibili.forEach((item, idx) => {
    const classi = [
      idx < limitePanoramica ? 'card-panoramica' : '',
      idx < 3 ? 'card-prossimi' : ''
    ].filter(Boolean).join(' ');

    htmlContent += renderActiveCard(item, classi);
  });

  container.innerHTML = htmlContent;
  filterNews(currentNewsFilter);
}

    const FAVORITE_ATHLETE_STORAGE_KEY = STORAGE_PREFIX + 'asa_scoiattoli_fav_athlete_v1';

    let availSelectedAthleteDraft = '';
    let availPendingChoice = null;
    let availReadonlyOpen = false;
    let availAutoCloseTimer = null;
    let availModalRequestSeq = 0;

    function escapeHtmlFav(str) {
      return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function getFavoriteAthlete() {
      try {
        return localStorage.getItem(FAVORITE_ATHLETE_STORAGE_KEY) || '';
      } catch (e) {
        return '';
      }
    }

    function setFavoriteAthlete(athleteName) {
      try {
        if (athleteName) {
          localStorage.setItem(FAVORITE_ATHLETE_STORAGE_KEY, athleteName);
        } else {
          localStorage.removeItem(FAVORITE_ATHLETE_STORAGE_KEY);
        }
      } catch (e) {
        console.warn('Impossibile salvare atleta preferito:', e);
      }
    }

    function clearAvailAutoCloseTimer() {
      if (availAutoCloseTimer) {
        clearTimeout(availAutoCloseTimer);
        availAutoCloseTimer = null;
      }
    }

    async function fetchLiveMatchAvailabilityFromFirestore(matchId) {
      if (!db) {
        throw new Error('Database Firestore non disponibile');
      }
      const docRef = db.collection("asa_portal").doc(FIRESTORE_DOC_ID);
      const snap = await docRef.get();
      const data = snap.exists ? (snap.data() || {}) : {};
      const allDisp = (data && typeof data.disponibilita === 'object' && data.disponibilita !== null)
        ? data.disponibilita
        : {};
      const matchMap = (allDisp[matchId] && typeof allDisp[matchId] === 'object')
        ? { ...allDisp[matchId] }
        : {};
      return matchMap;
    }

    function applyAvailabilityCountsToHeader(matchMap) {
      const roster = Array.isArray(dbState.roster) ? dbState.roster : [];
      let disp = 0;
      let nonDisp = 0;
      let attesa = 0;
      roster.forEach(a => {
        const st = normalizeDisponibilitaValue(matchMap[a.nome]);
        if (st === 'disponibile') disp++;
        else if (st === 'non_disponibile') nonDisp++;
        else attesa++;
      });
      const elDisp = document.getElementById('avail-count-available');
      const elAtt = document.getElementById('avail-count-pending');
      const elNo = document.getElementById('avail-count-unavailable');
      if (elDisp) elDisp.textContent = disp;
      if (elAtt) elAtt.textContent = attesa;
      if (elNo) elNo.textContent = nonDisp;
    }

    function renderReadonlyAvailabilityBreakdown(matchMap) {
  const panel = document.getElementById('avail-readonly-panel');
  if (!panel) return;
  const roster = Array.isArray(dbState.roster) ? dbState.roster : [];
  const gruppi = { disponibile: [], non_disponibile: [], in_attesa: [] };

  roster.forEach(a => {
    const st = normalizeDisponibilitaValue(matchMap[a.nome]);
    gruppi[st].push(`${escapeHtmlFav(a.nome)} <span class="text-slate-400 font-semibold">#${escapeHtmlFav(a.numero ?? '-')}</span>`);
  });

  const sectionHtml = (title, list, pillClasses) => `
    <div class="rounded-xl bg-white border border-slate-200 p-2.5 space-y-1.5">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${pillClasses}">${title}</span>
        <span class="text-xs font-black text-slate-800">${list.length}</span>
      </div>
      <div class="text-xs text-slate-700 leading-relaxed">
        ${list.length ? list.join(', ') : '<span class="text-slate-400 italic">Nessun atleta</span>'}
      </div>
    </div>
  `;

  panel.innerHTML =
    sectionHtml('Disponibili', gruppi.disponibile, 'bg-emerald-100 text-emerald-800') +
    sectionHtml('Non disponibili', gruppi.non_disponibile, 'bg-rose-100 text-rose-800');
}

   function toggleReadonlyAvailabilityList() {
  availReadonlyOpen = !availReadonlyOpen;
  const panel = document.getElementById('avail-readonly-panel');
  const workspace = document.getElementById('avail-athlete-workspace');
  const btn = document.getElementById('avail-readonly-toggle-btn');

  if (panel) panel.classList.toggle('hidden', !availReadonlyOpen);
  if (workspace) workspace.classList.toggle('hidden', availReadonlyOpen);
  if (btn) {
    btn.textContent = availReadonlyOpen ? 'Nascondi elenco disponibilità' : 'Vedi elenco disponibilità';
  }
}

    async function openAvailabilityModal(matchId) {
      const match = (dbState.partite || []).find(p => p.id === matchId);
      if (!match || match.stato === 'rinviata' || match.stato === 'conclusa') return;

      clearAvailAutoCloseTimer();
      const seq = ++availModalRequestSeq;
      availPendingChoice = null;
      availReadonlyOpen = false;

      const matchIdInput = document.getElementById('avail-match-id');
      const titleEl = document.getElementById('avail-modal-title');
      const successBanner = document.getElementById('avail-success-banner');
      const readonlyPanel = document.getElementById('avail-readonly-panel');
      const toggleBtn = document.getElementById('avail-readonly-toggle-btn');
      const workspace = document.getElementById('avail-athlete-workspace');
      const modal = document.getElementById('availability-modal');

      if (matchIdInput) matchIdInput.value = matchId;
      if (titleEl) titleEl.innerText = `${match.id} vs ${match.avversario}`;
      if (successBanner) successBanner.classList.add('hidden');
      if (readonlyPanel) readonlyPanel.classList.add('hidden');
      if (workspace) workspace.classList.remove('hidden');
      if (toggleBtn) toggleBtn.textContent = 'Vedi elenco disponibilità';

      const savedAthlete = getFavoriteAthlete();
      availSelectedAthleteDraft = savedAthlete || '';

      if (workspace) {
        workspace.innerHTML = `
          <div class="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-center text-xs font-bold text-slate-500">
            Caricamento stato reale dal database...
          </div>
        `;
      }
      if (modal) modal.classList.remove('hidden');

      try {
        const liveMap = await fetchLiveMatchAvailabilityFromFirestore(matchId);
        if (seq !== availModalRequestSeq) return;
        applyAvailabilityCountsToHeader(liveMap);
        renderReadonlyAvailabilityBreakdown(liveMap);
        renderAvailabilityWorkspace(matchId, liveMap, !savedAthlete);
      } catch (err) {
        if (seq !== availModalRequestSeq) return;
        console.error('Errore lettura stato disponibilità dal DB:', err);
        if (workspace) {
          workspace.innerHTML = `
            <div class="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-center space-y-2.5">
              <div class="text-xs font-extrabold text-rose-800">Impossibile leggere lo stato attuale dal database.</div>
              <button type="button" onclick="openAvailabilityModal('${String(matchId).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold">
                Riprova
              </button>
            </div>
          `;
        }
      }
      }

    function startChangeAthleteFlow() {
      const matchId = document.getElementById('avail-match-id')?.value;
      if (!matchId) return;
      availPendingChoice = null;
      availSelectedAthleteDraft = getFavoriteAthlete() || '';
      openAvailabilityModal(matchId);
      setTimeout(() => {
        const currentMatchId = document.getElementById('avail-match-id')?.value;
        if (currentMatchId === matchId) {
          fetchLiveMatchAvailabilityFromFirestore(matchId)
            .then(liveMap => {
              applyAvailabilityCountsToHeader(liveMap);
              renderReadonlyAvailabilityBreakdown(liveMap);
              renderAvailabilityWorkspace(matchId, liveMap, true);
            })
            .catch(() => {});
        }
      }, 0);
    }

    async function confirmSelectedAthlete() {
      const sel = document.getElementById('avail-athlete-picker');
      const chosen = sel ? sel.value : availSelectedAthleteDraft;
      if (!chosen) return;
      setFavoriteAthlete(chosen);
      availSelectedAthleteDraft = chosen;
      availPendingChoice = null;
      const matchId = document.getElementById('avail-match-id')?.value;
      if (!matchId) return;
      const liveMap = await fetchLiveMatchAvailabilityFromFirestore(matchId);
      applyAvailabilityCountsToHeader(liveMap);
      renderReadonlyAvailabilityBreakdown(liveMap);
      renderAvailabilityWorkspace(matchId, liveMap, false);
    }

    async function cancelChangeAthleteFlow() {
      const prevAthlete = getFavoriteAthlete();
      availPendingChoice = null;
      if (!prevAthlete) {
        closeAvailabilityModal();
        return;
      }
      availSelectedAthleteDraft = prevAthlete;
      const matchId = document.getElementById('avail-match-id')?.value;
      if (!matchId) return;
      const liveMap = await fetchLiveMatchAvailabilityFromFirestore(matchId);
      applyAvailabilityCountsToHeader(liveMap);
      renderReadonlyAvailabilityBreakdown(liveMap);
      renderAvailabilityWorkspace(matchId, liveMap, false);
    }

    async function stageAthleteAvailabilityChoice(statusKey) {
      const athleteName = getFavoriteAthlete();
      const matchId = document.getElementById('avail-match-id')?.value;
      if (!athleteName || !matchId) return;
      availPendingChoice = statusKey;
      const liveMap = await fetchLiveMatchAvailabilityFromFirestore(matchId);
      applyAvailabilityCountsToHeader(liveMap);
      renderReadonlyAvailabilityBreakdown(liveMap);
      renderAvailabilityWorkspace(matchId, liveMap, false);
    }

    async function cancelPendingChoice() {
      availPendingChoice = null;
      const matchId = document.getElementById('avail-match-id')?.value;
      if (!matchId) return;
      const liveMap = await fetchLiveMatchAvailabilityFromFirestore(matchId);
      applyAvailabilityCountsToHeader(liveMap);
      renderReadonlyAvailabilityBreakdown(liveMap);
      renderAvailabilityWorkspace(matchId, liveMap, false);
    }

    async function confirmAndSaveSingleAthleteAvailability() {
      const matchId = document.getElementById('avail-match-id')?.value;
      const athleteName = getFavoriteAthlete();
      const targetStatus = availPendingChoice;
      if (!matchId || !athleteName || !targetStatus) return;

      try {
        // Legge sempre lo stato reale dal DB prima del salvataggio
        await fetchLiveMatchAvailabilityFromFirestore(matchId);

        const fieldPath = `disponibilita.${matchId}.${athleteName}`;
        if (!db) {
          throw new Error('Connessione Firestore non disponibile');
        }

        await db.collection("asa_portal").doc(FIRESTORE_DOC_ID).update({
          [fieldPath]: targetStatus
        });

        // Rilegge lo stato reale aggiornato direttamente da Firestore
        const freshMap = await fetchLiveMatchAvailabilityFromFirestore(matchId);
        applyAvailabilityCountsToHeader(freshMap);
        renderReadonlyAvailabilityBreakdown(freshMap);

        availPendingChoice = null;
        const workspace = document.getElementById('avail-athlete-workspace');
        const successBanner = document.getElementById('avail-success-banner');
        if (workspace) workspace.innerHTML = '';
        if (successBanner) successBanner.classList.remove('hidden');

        clearAvailAutoCloseTimer();
        availAutoCloseTimer = setTimeout(() => {
          closeAvailabilityModal();
        }, 2500);
      } catch (err) {
        console.error('Errore salvataggio disponibilità singolo atleta:', err);
        alert('Impossibile registrare la scelta su Firestore. Controlla la connessione e riprova.');
      }
    }

   function renderAvailabilityWorkspace(matchId, liveMap, isPickingAthlete) {
  
    const box = document.getElementById('avail-athlete-workspace');
  if (!box) return;

  const roster = Array.isArray(dbState.roster) ? dbState.roster : [];
  if (isPickingAthlete) {
    const options = roster
      .map(a => {
        const selected = a.nome === availSelectedAthleteDraft ? 'selected' : '';
        return `<option value="${escapeHtmlFav(a.nome)}" ${selected}>${escapeHtmlFav(a.nome)} (#${escapeHtmlFav(a.numero ?? '-')})</option>`;
      })
      .join('');

    box.innerHTML = `
      <div class="rounded-2xl bg-sky-50 border border-sky-200 p-4 space-y-3">
        <label for="avail-athlete-picker" class="block text-xs font-black text-[#0f2544] uppercase tracking-wider">
          Seleziona il tuo atleta
        </label>
        <select id="avail-athlete-picker" onchange="availSelectedAthleteDraft = this.value" class="w-full px-3.5 py-3 rounded-xl border border-sky-300 bg-white text-sm font-bold text-[#0f2544] focus:outline-none focus:ring-2 focus:ring-[#0f2544]">
          <option value="">-- Scegli atleta --</option>
          ${options}
        </select>
        <div class="grid grid-cols-2 gap-2.5 pt-1">
          <button type="button" onclick="cancelChangeAthleteFlow()" class="py-3 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-extrabold uppercase cursor-pointer">
            Annulla
          </button>
          <button type="button" onclick="confirmSelectedAthlete()" class="py-3 px-3 rounded-xl bg-[#0f2544] hover:bg-slate-800 text-white text-xs font-extrabold uppercase cursor-pointer shadow-sm">
            Conferma
          </button>
        </div>
      </div>
    `;
    return;
  }

  const athleteName = getFavoriteAthlete();
  const currentStatus = normalizeDisponibilitaValue(liveMap[athleteName]);
  const isAlreadyAvail = currentStatus === 'disponibile';
  const isAlreadyUnavail = currentStatus === 'non_disponibile';

  const availBtnClass = isAlreadyAvail
    ? 'bg-emerald-600 text-white opacity-35 ring-2 ring-emerald-400 cursor-not-allowed'
    : 'bg-emerald-600 hover:bg-emerald-700 text-white opacity-100 cursor-pointer shadow-sm';

  const unavailBtnClass = isAlreadyUnavail
    ? 'bg-rose-600 text-white opacity-35 ring-2 ring-rose-400 cursor-not-allowed'
    : 'bg-rose-600 hover:bg-rose-700 text-white opacity-100 cursor-pointer shadow-sm';

  let doubleConfirmHtml = '';
  if (availPendingChoice) {
    const chosenText = availPendingChoice === 'disponibile' ? 'DISPONIBILE' : 'NON DISPONIBILE';
    const chosenToneClass = availPendingChoice === 'disponibile'
      ? 'text-emerald-700'
      : 'text-rose-700';

    doubleConfirmHtml = `
      <div class="rounded-2xl bg-amber-50 border-2 border-amber-400 p-4 space-y-3 text-center shadow-sm">
        <div class="text-[11px] font-black text-amber-900 uppercase tracking-wider">Conferma finale • Riepilogo</div>
        <div class="rounded-xl bg-white border border-amber-200 p-3 space-y-1 text-xs text-slate-800">
          <div>Atleta: <strong class="text-[#0f2544]">${escapeHtmlFav(athleteName)}</strong></div>
          <div>Partita: <strong class="text-[#0f2544]">${escapeHtmlFav(matchId)}</strong></div>
          <div>Stato da inviare: <strong class="${chosenToneClass}">${chosenText}</strong></div>
        </div>
        <div class="grid grid-cols-2 gap-2.5">
          <button type="button" onclick="cancelPendingChoice()" class="py-3 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-extrabold uppercase cursor-pointer">
            Annulla
          </button>
          <button type="button" onclick="confirmAndSaveSingleAthleteAvailability()" class="py-3 px-3 rounded-xl bg-[#0f2544] hover:bg-slate-800 text-white text-xs font-extrabold uppercase cursor-pointer shadow-sm">
            Conferma invio
          </button>
        </div>
      </div>
    `;
  }

  box.innerHTML = `
    ${doubleConfirmHtml}
    <div class="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-3.5">
      <div class="flex items-center justify-between gap-2">
        <div class="min-w-0">
          <div class="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Atleta selezionato</div>
          <div class="text-base font-black text-[#0f2544] truncate">${escapeHtmlFav(athleteName)}</div>
        </div>
        <button type="button" onclick="startChangeAthleteFlow()" class="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-extrabold shrink-0 cursor-pointer">
          Cambia atleta
        </button>
      </div>

      <div class="grid grid-cols-2 gap-2.5 pt-1">
        <button
          type="button"
          ${isAlreadyAvail ? 'disabled aria-disabled="true"' : 'onclick="stageAthleteAvailabilityChoice(\'disponibile\')"'}
          class="py-3.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition ${availBtnClass}"
        >
          Disponibile
        </button>
        <button
          type="button"
          ${isAlreadyUnavail ? 'disabled aria-disabled="true"' : 'onclick="stageAthleteAvailabilityChoice(\'non_disponibile\')"'}
          class="py-3.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition ${unavailBtnClass}"
        >
          Non disponibile
        </button>
      </div>
    </div>
  `;}

    function closeAvailabilityModal() {
      availModalRequestSeq++;
      clearAvailAutoCloseTimer();
      availPendingChoice = null;
      const modal = document.getElementById('availability-modal');
      if (modal) modal.classList.add('hidden');
    }

    function renderRosterMain() {
      const grid = document.getElementById('roster-grid-main');
      const countBadge = document.getElementById('roster-count-badge');
      if (countBadge && dbState.roster) countBadge.innerText = dbState.roster.length;
      if (!grid || !dbState.roster) return;
      grid.innerHTML = dbState.roster.map((a, idx) => generateJerseySvgHtml(a, idx, false)).join('');
    }

    function generateJerseySvgHtml(a, idx, isModal = false) {
      const parts = a.nome.split(' ');
      const cognome = parts.slice(1).join(' ').toUpperCase();
      const nome = parts[0];
      const clipId = `jersey-clip-${idx}`;
      const patternId = `wings-pattern-${idx}`;

      const cardClass = isModal
        ? "bg-white p-3 rounded-2xl border border-slate-200 shadow-2xl flex flex-col items-center justify-between group transform hover:-translate-y-1 transition-all duration-300"
        : "bg-white/90 backdrop-blur-xs p-3 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-between group";

      return `
        <div class="${cardClass}">
          <div class="relative w-28 h-36 flex items-center justify-center mb-1 transform group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 220 270" class="w-full h-full drop-shadow-md">
              <defs>
                <clipPath id="${clipId}">
                  <path d="M52,16 L80,16 Q110,42 140,16 L168,16 L186,82 Q165,112 178,136 L184,254 L36,254 L42,136 Q55,112 34,82 Z" />
                </clipPath>
                <pattern id="${patternId}" width="22" height="18" patternUnits="userSpaceOnUse">
                  <path d="M3,11 Q7,5 11,11 Q15,5 19,11 Q15,15 11,13 Q7,15 3,11 Z" fill="#f1f5f9" />
                </pattern>
              </defs>

              <g clip-path="url(#${clipId})">
                <rect x="0" y="0" width="220" height="270" fill="#ffffff" />
                <rect x="0" y="0" width="220" height="270" fill="url(#${patternId})" />

                <polygon points="118,12 175,12 182,42" fill="#0f2544" />
                <polygon points="134,12 175,12 180,32" fill="#c8102e" />
                <polygon points="148,12 175,12 178,24" fill="#0f2544" />

                <path d="M52,16 L34,82 Q55,112 42,136" fill="none" stroke="#c8102e" stroke-width="6" />

                <polygon points="34,132 54,142 50,254 34,254" fill="#c8102e" />
                <polygon points="34,132 54,142 53,155 34,145" fill="#0f2544" />
                <polygon points="34,158 53,168 53,181 34,171" fill="#0f2544" />
                <polygon points="34,184 52,194 52,207 34,197" fill="#0f2544" />
                <polygon points="34,210 51,220 51,233 34,223" fill="#0f2544" />
                <polygon points="35,236 45,254 35,254" fill="#e2e8f0" />

                <polygon points="186,132 166,142 170,254 186,254" fill="#c8102e" />
                <polygon points="186,132 166,142 167,155 186,145" fill="#0f2544" />
                <polygon points="186,158 167,168 167,181 186,171" fill="#0f2544" />
                <polygon points="186,184 168,194 168,207 186,197" fill="#0f2544" />
                <polygon points="186,210 169,220 169,233 186,223" fill="#0f2544" />

                <text x="110" y="72" text-anchor="middle" font-size="15" font-weight="900" fill="#c8102e" textLength="96" lengthAdjust="spacing" style="font-family: 'Arial Black', Impact, sans-serif;">
                  ${cognome}
                </text>

                <text x="110" y="148" text-anchor="middle" font-size="68" font-weight="900" stroke-width="4.5" letter-spacing="-1" class="jersey-text">
                  ${a.numero}
                </text>

                <text x="110" y="177" text-anchor="middle" font-size="18" font-weight="900" font-style="italic" fill="#c8102e" letter-spacing="1.5" style="font-family: 'Arial Black', Impact, sans-serif;">
                  CINIX
                </text>
              </g>

              <path d="M52,16 L80,16 Q110,42 140,16 L168,16 L186,82 Q165,112 178,136 L184,254 L36,254 L42,136 Q55,112 34,82 Z"
                    fill="none" stroke="#cbd5e1" stroke-width="2" />
            </svg>
          </div>
          <div class="text-center border-t border-slate-200/60 pt-2 w-full min-h-[42px] flex items-center justify-center">
            <div class="font-extrabold text-[11px] sm:text-xs text-[#0f2544] leading-tight px-1">${nome} ${cognome}</div>
          </div>
        </div>
      `;
    }

    function getMonthLabelFromDate(dateStr) {
      if (!dateStr || !dateStr.includes('/')) return "Data da definire";
      const parts = dateStr.split('/');
      const monthIdx = parseInt(parts[1], 10) - 1;
      const year = parts[2];
      const mesi = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
      ];
      if (monthIdx < 0 || monthIdx > 11) return "Data da definire";
      return `${mesi[monthIdx]} ${year}`;
    }

    function getFaseLabel(p) {
      if (p.fase && String(p.fase).trim()) return String(p.fase).trim();
      const idLower = (p.id || "").toLowerCase();
      if (idLower.includes("ritorno")) return "Ritorno";
      if (idLower.includes("andata")) return "Andata";
      return "";
    }

    function renderFullSchedule() {
      sortPartite();
      const container = document.getElementById('full-schedule-container');
      if (!container || !dbState.partite) return;

      let lastFase = null;
      let lastMese = null;
      let html = "";

      dbState.partite.forEach(p => {
        const faseCorrente = getFaseLabel(p);
        const meseCorrente = getMonthLabelFromDate(p.data);

        if (faseCorrente && faseCorrente !== lastFase) {
          lastFase = faseCorrente;
          lastMese = null;
          const isRitorno = faseCorrente.toLowerCase().includes("ritorno");
          html += `
            <div class="pt-5 first:pt-0">
              <div class="flex items-center gap-3 pb-2.5 border-b-2 ${isRitorno ? 'border-[#c8102e]' : 'border-[#0f2544]'}">
                <span class="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest ${isRitorno ? 'bg-[#c8102e] text-white' : 'bg-[#0f2544] text-white'} shadow-xs">
                  Girone di ${faseCorrente}
                </span>
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Stagione 2026/2027</span>
              </div>
            </div>
          `;
        }

        if (meseCorrente !== lastMese) {
          lastMese = meseCorrente;
          html += `
            <div class="flex items-center gap-3 pt-4 pb-1">
              <h3 class="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-[#0f2544] bg-slate-200/90 border-l-4 border-[#c8102e] px-4 py-2 rounded-xl shadow-2xs">
                ${meseCorrente}
              </h3>
            </div>
          `;
        }

        const convocatiList = dbState.convocazioni && dbState.convocazioni[p.id] ? dbState.convocazioni[p.id] : [];
        const hasConvocati = convocatiList.length > 0;
        const isProssimoIncontro = p.stato === 'prossimo_incontro';
        const isRinviata = p.stato === 'rinviata';
        const isConclusa = p.stato === 'conclusa';

        let statusBadge = `<span class="px-4 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900">Programmata</span>`;
        let rowClass = "bg-white border-slate-200";
        let actionBtn = `<button onclick="openAvailabilityModal('${p.id}')" class="px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-extrabold transition cursor-pointer shadow">Conferma Disponibilità</button>`;

        if (isProssimoIncontro) {
          statusBadge = `<span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-emerald-600 text-white"><span class="w-2 h-2 rounded-full bg-white animate-pulse"></span> Prossimo Incontro</span>`;
          rowClass = "bg-emerald-50/70 border-emerald-400";
          if (hasConvocati) {
            actionBtn = `<button onclick="openMatchModal('${p.id}')" class="px-4 py-1.5 bg-[#0f2544] hover:bg-[#c8102e] text-white rounded-xl text-xs font-bold transition cursor-pointer shadow">Lista Convocati (${convocatiList.length})</button>`;
          } else {
            actionBtn = `<button onclick="openAvailabilityModal('${p.id}')" class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold transition cursor-pointer shadow">Conferma Disponibilità</button>`;
          }
        } else if (isRinviata) {
          statusBadge = `<span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-sky-600 text-white"><span class="w-2 h-2 rounded-full bg-white"></span> Rinviata</span>`;
          rowClass = "bg-sky-50/70 border-sky-300";
          actionBtn = `<span class="px-4 py-1.5 rounded-xl text-xs font-bold bg-sky-100 text-sky-900 border border-sky-200">Disponibilità Sospese</span>`;
        } else if (isConclusa) {
          const scores = computeMatchScores(p);
          let esitoBadge = `<span class="px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">Pareggiata</span>`;
          if (scores.ptAsa > scores.ptOpp) {
            esitoBadge = `<span class="px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-emerald-600 text-white shadow-2xs">Vinta</span>`;
          } else if (scores.ptOpp > scores.ptAsa) {
            esitoBadge = `<span class="px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#c8102e] text-white shadow-2xs">Persa</span>`;
          }
          statusBadge = `
            <div class="flex items-center gap-2">
              <span class="px-4 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-slate-200 text-slate-800">Full Time: ${scores.classificaStr}</span>
              ${esitoBadge}
            </div>
          `;
          rowClass = "bg-slate-50 border-slate-200";
          actionBtn = `<button onclick="openMatchModal('${p.id}')" class="px-4 py-1.5 bg-[#0f2544] hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow">Dettagli & Statistiche</button>`;
        }

        const faseBadge = faseCorrente ? `<span class="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">${faseCorrente}</span>` : '';
        const garaBadge = p.garaNumero ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 border border-slate-200">Gara #${p.garaNumero}</span>` : '';

        html += `
          <div class="${rowClass} p-6 rounded-3xl border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-extrabold ${isRinviata ? 'text-sky-700' : (isProssimoIncontro ? 'text-emerald-700' : 'text-slate-600')} uppercase tracking-wider">${p.id} • ${p.data}${p.ora ? ' (' + p.ora + ')' : ''} • ${p.tipo}</span>
                ${faseBadge}
                ${garaBadge}
              </div>
              <h4 class="text-lg font-black text-[#0f2544] mt-0.5">ASA Cinisello vs ${p.avversario}</h4>
              <div class="text-xs text-slate-600 mt-1">Sede: ${formatSedeCliccabile(p.sede)}</div>
              ${isRinviata && p.nota ? `<p class="text-xs font-bold text-sky-800 mt-1">${p.nota}</p>` : ''}
            </div>
            <div class="flex items-center gap-3 flex-wrap">
              ${statusBadge}
              ${actionBtn}
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
    }

    function openMatchModal(giornataId) {
      const match = dbState.partite.find(p => p.id === giornataId);
      if (!match) return;

      const scores = computeMatchScores(match);
      document.getElementById('modal-giornata').innerText = `${match.id} • ${match.tipo}`;
      document.getElementById('modal-title').innerText = `ASA Cinisello vs ${match.avversario}`;
      document.getElementById('modal-score').innerHTML = match.stato === 'conclusa'
        ? `<div>${scores.classificaStr}</div><div class="text-xs font-black text-[#c8102e] mt-0.5">Canestri totali: ${scores.canestriStr}</div>`
        : "Da disputare";
      document.getElementById('modal-info').innerHTML = `${formatSedeCliccabile(match.sede)} <span class="block sm:inline mt-1 sm:mt-0">• ${match.data}${match.ora ? ' (' + match.ora + ')' : ''}</span>`;

      const dyn = document.getElementById('modal-dynamic-content');
      dyn.innerHTML = "";

      if (match.stato === 'conclusa') {
        const tempiniList = scores.tempiniList;

        const tempiniHtml = tempiniList.map(t => {
          const asaVal = parseInt(t.asa, 10) || 0;
          const oppVal = parseInt(t.opp, 10) || 0;
          let esitoLabel = "PAREGGIO";
          let cardStyle = "bg-amber-50/90 border-amber-300 text-amber-950";
          let badgeStyle = "bg-amber-200/90 text-amber-900";
          let scoreColor = "text-amber-900";

          if (asaVal > oppVal) {
            esitoLabel = "VINTO";
            cardStyle = "bg-emerald-50/90 border-emerald-400 text-emerald-950";
            badgeStyle = "bg-emerald-600 text-white";
            scoreColor = "text-emerald-700";
          } else if (oppVal > asaVal) {
            esitoLabel = "PERSO";
            cardStyle = "bg-red-50/90 border-red-300 text-red-950";
            badgeStyle = "bg-red-600 text-white";
            scoreColor = "text-red-700";
          }

          return `
            <div class="${cardStyle} border-2 rounded-2xl p-3 text-center shadow-xs flex flex-col items-center justify-between gap-1.5">
              <div class="text-[10px] font-black uppercase tracking-wider text-slate-600">${t.periodo}</div>
              <div class="text-lg font-black ${scoreColor} leading-none">${asaVal} - ${oppVal}</div>
              <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${badgeStyle}">${esitoLabel}</span>
            </div>
          `;
        }).join('');

        const convocatiNames = (dbState.convocazioni && dbState.convocazioni[giornataId]) ? dbState.convocazioni[giornataId] : [];
        const giocatoriHtml = convocatiNames.length > 0
          ? convocatiNames.map((nome, idx) => {
              const playerObj = (dbState.roster || []).find(r => r.nome === nome) || { nome: nome, numero: "-" };
              return generateJerseySvgHtml(playerObj, idx, true);
            }).join('')
          : `<div class="col-span-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center text-xs text-slate-500 font-semibold">Nessun atleta registrato per questo incontro.</div>`;

        dyn.innerHTML = `
          <div class="space-y-6">
            <div class="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span class="text-[10px] font-black text-blue-900 uppercase block">Punteggio Tempini</span>
                <span class="text-xl font-black text-[#0f2544]">${scores.classificaStr}</span>
              </div>
              <div class="sm:text-right">
                <span class="text-[10px] font-black text-blue-900 uppercase block">Canestri Totali Realizzati</span>
                <span class="text-xl font-black text-[#c8102e]">${scores.canestriStr}</span>
              </div>
            </div>
            <div class="space-y-3">
              <h4 class="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Andamento 6 Tempini</h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">${tempiniHtml}</div>
            </div>
            <div class="space-y-3 pt-4 border-t border-slate-200">
              <div class="flex items-center justify-between">
                <h4 class="text-xs font-extrabold text-asa-red uppercase tracking-wider">Atleti che hanno giocato (${convocatiNames.length})</h4>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">${giocatoriHtml}</div>
            </div>
          </div>
        `;
      } else {
        const convocatiNames = (dbState.convocazioni && dbState.convocazioni[giornataId]) ? dbState.convocazioni[giornataId] : [];
        if (convocatiNames.length > 0) {
          const jerseyCards = convocatiNames.map((nome, idx) => {
            const playerObj = (dbState.roster || []).find(r => r.nome === nome) || { nome: nome, numero: "-" };
            return generateJerseySvgHtml(playerObj, idx, true);
          }).join('');

          dyn.innerHTML = `
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h4 class="text-xs font-extrabold text-asa-red uppercase tracking-wider">Atleti Convocati (${convocatiNames.length})</h4>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">${jerseyCards}</div>
            </div>
          `;
        } else {
          dyn.innerHTML = `
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-2">
              <div class="text-sm font-black text-[#0f2544]">Convocazioni non ancora pubblicate</div>
              <p class="text-xs text-slate-500">Lo staff tecnico pubblicherà la lista convocati in prossimità dell'incontro.</p>
            </div>
          `;
        }
      }

      document.getElementById('match-modal').classList.remove('hidden');
    }

    function closeMatchModal() {
      document.getElementById('match-modal').classList.add('hidden');
    }

    function verifyCoachLogin() {
      const pass = document.getElementById('coach-pass').value;
      if (pass === 'Mental2027') {
        document.getElementById('coach-login-container').classList.add('hidden');
        document.getElementById('coach-dashboard-container').classList.remove('hidden');
        populateCoachMatchSelector();
      } else {
        alert("Password coach non valida.");
      }
    }

    function coachLogout() {
      document.getElementById('coach-pass').value = "";
      document.getElementById('coach-dashboard-container').classList.add('hidden');
      document.getElementById('coach-login-container').classList.remove('hidden');
    }

    function populateCoachMatchSelector() {
      const sel = document.getElementById('coach-match-selector');
      if (!sel || !dbState.partite) return;
      const candidateMatches = dbState.partite.filter(p => p.stato !== 'conclusa');
      sel.innerHTML = candidateMatches.map(p => `<option value="${p.id}">${p.id} • ${p.data} • vs ${p.avversario} (${p.stato})</option>`).join('');

      if (candidateMatches.length > 0) {
        const currentMatch =
          candidateMatches.find(p => p.stato === 'prossimo_incontro') ||
          candidateMatches.find(p => p.stato === 'programmata') ||
          candidateMatches[0];
        sel.value = currentMatch.id;
      }

      loadMatchConvocazioni();
    }

    function loadMatchConvocazioni() {
      const matchId = document.getElementById('coach-match-selector').value;
      const checklist = document.getElementById('coach-roster-checklist');
      if (!matchId || !checklist || !dbState.roster) return;

      const currentConv = (dbState.convocazioni && dbState.convocazioni[matchId]) ? dbState.convocazioni[matchId] : [];
      const dispMap = (dbState.disponibilita && dbState.disponibilita[matchId]) ? dbState.disponibilita[matchId] : {};
      const counts = getMatchAvailabilityCounts(matchId);

      document.getElementById('coach-disponibili-counter').innerText =
        `${counts.disponibili} Disponibili • ${counts.nonDisponibili} Non disp. • ${counts.inAttesa} In attesa`;

      checklist.innerHTML = dbState.roster.map(a => {
        const checked = currentConv.includes(a.nome) ? 'checked' : '';
        const st = normalizeDisponibilitaValue(dispMap[a.nome]);
        const cardBorder = st === 'disponibile'
          ? 'border-emerald-300 bg-emerald-50/50'
          : st === 'non_disponibile'
            ? 'border-red-200 bg-red-50/30'
            : 'border-slate-200 bg-white';
        const badgeStyle = st === 'disponibile'
          ? 'bg-emerald-100 text-emerald-800'
          : st === 'non_disponibile'
            ? 'bg-red-100 text-red-800'
            : 'bg-slate-100 text-slate-500';
        const badgeLabel = st === 'disponibile' ? 'Disp.' : st === 'non_disponibile' ? 'No' : 'In attesa';

        return `
          <label class="flex items-center justify-between p-3 rounded-2xl border ${cardBorder} cursor-pointer hover:border-[#0f2544] transition">
            <div class="flex items-center gap-3">
              <input type="checkbox" value="${a.nome}" onchange="updateSelectedCoachCounter()" ${checked} class="w-4 h-4 rounded text-[#c8102e]" />
              <div>
                <div class="text-xs font-extrabold text-[#0f2544]">${a.nome}</div>
                <div class="text-[10px] font-bold text-slate-400">Maglia #${a.numero}</div>
              </div>
            </div>
            <span class="text-[10px] font-black px-2 py-0.5 rounded-full ${badgeStyle}">
              ${badgeLabel}
            </span>
          </label>
        `;
      }).join('');

      updateSelectedCoachCounter();
    }

    function updateSelectedCoachCounter() {
      const checkedCount = document.querySelectorAll('#coach-roster-checklist input[type="checkbox"]:checked').length;
      const counter = document.getElementById('selected-counter');
      if (counter) counter.innerText = `${checkedCount} Selezionati`;
    }

    function selectAvailablePlayers() {
      const matchId = document.getElementById('coach-match-selector').value;
      const dispMap = (dbState.disponibilita && dbState.disponibilita[matchId]) ? dbState.disponibilita[matchId] : {};
      document.querySelectorAll('#coach-roster-checklist input[type="checkbox"]').forEach(cb => {
        cb.checked = normalizeDisponibilitaValue(dispMap[cb.value]) === 'disponibile';
      });
      updateSelectedCoachCounter();
    }

    function selectAllPlayers(state) {
      document.querySelectorAll('#coach-roster-checklist input[type="checkbox"]').forEach(cb => {
        cb.checked = state;
      });
      updateSelectedCoachCounter();
    }

    async function saveConvocazioni() {
      const matchId = document.getElementById('coach-match-selector').value;
      if (!matchId) return;
      const selected = Array.from(document.querySelectorAll('#coach-roster-checklist input[type="checkbox"]:checked')).map(cb => cb.value);
      if (!dbState.convocazioni) dbState.convocazioni = {};
      dbState.convocazioni[matchId] = selected;

      const updatePayload = {
        [`convocazioni.${matchId}`]: selected
      };

      if (dbState.listaRConfig && dbState.listaRConfig.customRowsByMatch && dbState.listaRConfig.customRowsByMatch[matchId]) {
        delete dbState.listaRConfig.customRowsByMatch[matchId];
        updatePayload[`listaRConfig.customRowsByMatch.${matchId}`] = firebase.firestore.FieldValue.delete();
      }

      const ok = await savePartialToDatabase(updatePayload);
      if (ok) {
        renderNewsCards();
        renderFullSchedule();
        alert(`Convocazioni pubblicate sul server per ${matchId} (${selected.length} atleti).`);
      }
    }

    function verifyDirigenteLogin() {
      const pass = document.getElementById('dirigente-pass').value;
      if (pass === 'Paganini2027') {
        document.getElementById('dirigente-login-container').classList.add('hidden');
        document.getElementById('dirigente-dashboard-container').classList.remove('hidden');
        initRegiaPanels();
      } else {
        alert("Password dirigente non valida.");
      }
    }

    function dirigenteLogout() {
      document.getElementById('dirigente-pass').value = "";
      document.getElementById('dirigente-dashboard-container').classList.add('hidden');
      document.getElementById('dirigente-login-container').classList.remove('hidden');
    }

    function switchRegiaTab(tab) {
      ['partite', 'ticker', 'roster', 'listar'].forEach(t => {
        document.getElementById('regia-content-' + t).classList.add('hidden');
        document.getElementById('regia-tab-' + t).className = "px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer whitespace-nowrap";
      });
      document.getElementById('regia-content-' + tab).classList.remove('hidden');
      document.getElementById('regia-tab-' + tab).className = "px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0f2544] text-white shadow transition cursor-pointer whitespace-nowrap";

      if (tab === 'partite') renderRegiaMatchesList();
      if (tab === 'ticker') populateTickerForm();
      if (tab === 'roster') renderRegiaRosterEditor();
    }

    function initRegiaPanels() {
      renderRegiaMatchesList();
      populateTickerForm();
      renderRegiaRosterEditor();
      populateListaRMatchSelect();
      renderListaRDobEditor();
      renderListaRPreview();
      if (dbState.partite && dbState.partite.length > 0) {
        loadMatchIntoRegiaForm(dbState.partite[0].id);
      }
    }

    function renderRegiaMatchesList() {
      const list = document.getElementById('regia-matches-list');
      if (!list || !dbState.partite) return;
      const activeId = document.getElementById('regia-match-id').value;

      list.innerHTML = dbState.partite.map(p => {
        const isSelected = p.id === activeId;
        const badgeColor = p.stato === 'prossimo_incontro'
          ? 'bg-emerald-100 text-emerald-800'
          : (p.stato === 'rinviata' ? 'bg-sky-100 text-sky-800' : (p.stato === 'conclusa' ? 'bg-slate-200 text-slate-800' : 'bg-amber-100 text-amber-900'));
        return `
          <button type="button" onclick="loadMatchIntoRegiaForm('${p.id}')" class="w-full text-left p-3.5 rounded-2xl border transition cursor-pointer ${isSelected ? 'bg-[#0f2544] text-white border-[#0f2544] shadow' : 'bg-slate-50 hover:bg-slate-100 text-[#0f2544] border-slate-200'}">
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-extrabold">${p.id}</span>
              <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : badgeColor}">${p.stato}</span>
            </div>
            <div class="text-xs font-bold mt-1 ${isSelected ? 'text-slate-200' : 'text-slate-700'}">vs ${p.avversario}</div>
            <div class="text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}">${p.data}${p.ora ? ' • ' + p.ora : ''}</div>
          </button>
        `;
      }).join('');
    }

        function importCalendarioDefinitivoToCloud() {
      if (!confirm("Sostituire l'elenco partite sul Database Cloud con le 14 gare ufficiali del Calendario Definitivo 2026/2027 (CU n. 0)?")) return;
      dbState.partite = JSON.parse(JSON.stringify(defaultDbState.partite));
      dbState.ticker = JSON.parse(JSON.stringify(defaultDbState.ticker));
      saveToDatabase('partite');
      renderRegiaMatchesList();
      populateTickerForm();
      renderAllPublicViews();
      if (dbState.partite.length > 0) {
        loadMatchIntoRegiaForm(dbState.partite[0].id);
      }
      alert("Calendario Definitivo (14 gare) pubblicato in tempo reale!");
    }

    function prepareNewMatch() {
      document.getElementById('regia-form-mode').innerText = "Nuova Partita / Amichevole";
      document.getElementById('regia-match-id').value = "__NEW__";
      document.getElementById('regia-f-id').value = "";
      document.getElementById('regia-f-gara').value = "";
      document.getElementById('regia-f-avversario').value = "";
      document.getElementById('regia-f-data').value = "";
      document.getElementById('regia-f-ora').value = "15:30";
      document.getElementById('regia-f-tipo').value = "In Casa";
      document.getElementById('regia-f-sede').value = "Via Monte Ortigara 2, Cinisello Balsamo";
      document.getElementById('regia-f-stato').value = "programmata";
      document.getElementById('regia-f-nota').value = "";
      toggleRegiaStateFields();
      buildTempiniInputs([]);
    }

    function loadMatchIntoRegiaForm(matchId) {
      const match = dbState.partite.find(p => p.id === matchId);
      if (!match) return;

      document.getElementById('regia-form-mode').innerText = `Modifica: ${match.id}`;
      document.getElementById('regia-match-id').value = match.id;
      document.getElementById('regia-f-id').value = match.id || "";
      document.getElementById('regia-f-gara').value = match.garaNumero || "";
      document.getElementById('regia-f-avversario').value = match.avversario || "";
      document.getElementById('regia-f-data').value = match.data || "";
      document.getElementById('regia-f-ora').value = match.ora || "";
      document.getElementById('regia-f-tipo').value = match.tipo || "In Casa";
      document.getElementById('regia-f-sede').value = match.sede || "";
      document.getElementById('regia-f-stato').value = match.stato || "programmata";
      document.getElementById('regia-f-nota').value = match.nota || "";

      toggleRegiaStateFields();
      buildTempiniInputs(match.tempini || []);
      renderRegiaMatchesList();
    }

    function toggleRegiaStateFields() {
      const stato = document.getElementById('regia-f-stato').value;
      const tempiniSec = document.getElementById('regia-box-tempini-section');
      const notaBox = document.getElementById('regia-box-nota');

      if (stato === 'conclusa') {
        tempiniSec.classList.remove('hidden');
      } else {
        tempiniSec.classList.add('hidden');
      }

      if (stato === 'rinviata') {
        notaBox.classList.remove('hidden');
      } else {
        notaBox.classList.add('hidden');
      }
    }

    function buildTempiniInputs(tempiniData) {
      const grid = document.getElementById('regia-tempini-inputs-grid');
      if (!grid) return;

      const defaultPeriods = [1, 2, 3, 4, 5, 6].map(n => {
        const found = (tempiniData || []).find(t => t.periodo === `${n}° Tempino`);
        return {
          periodo: `${n}° Tempino`,
          asa: found ? found.asa : 0,
          opp: found ? found.opp : 0
        };
      });

      grid.innerHTML = defaultPeriods.map((t, idx) => `
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <div class="text-[11px] font-black text-[#0f2544] uppercase">${t.periodo}</div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="text-[9px] font-bold text-slate-500 uppercase block">ASA</label>
              <input type="number" min="0" id="temp-asa-${idx}" value="${t.asa}" oninput="recalculateTempiniPreview()" class="w-full px-2 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-extrabold text-center" />
            </div>
            <div>
              <label class="text-[9px] font-bold text-slate-500 uppercase block">Opp.</label>
              <input type="number" min="0" id="temp-opp-${idx}" value="${t.opp}" oninput="recalculateTempiniPreview()" class="w-full px-2 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-extrabold text-center" />
            </div>
          </div>
        </div>
      `).join('');

      recalculateTempiniPreview();
    }

    function resetTempiniToZero() {
      for (let i = 0; i < 6; i++) {
        const a = document.getElementById(`temp-asa-${i}`);
        const o = document.getElementById(`temp-opp-${i}`);
        if (a) a.value = 0;
        if (o) o.value = 0;
      }
      recalculateTempiniPreview();
    }

    function recalculateTempiniPreview() {
      let ptAsa = 0, ptOpp = 0;
      let canAsa = 0, canOpp = 0;

      for (let i = 0; i < 6; i++) {
        const a = parseInt(document.getElementById(`temp-asa-${i}`)?.value || "0", 10) || 0;
        const o = parseInt(document.getElementById(`temp-opp-${i}`)?.value || "0", 10) || 0;
        canAsa += a;
        canOpp += o;
        if (a > o) {
          ptAsa += 3;
          ptOpp += 1;
        } else if (o > a) {
          ptOpp += 3;
          ptAsa += 1;
        } else {
          ptAsa += 2;
          ptOpp += 2;
        }
      }

      const scoreEl = document.getElementById('regia-live-score-preview');
      const canEl = document.getElementById('regia-live-canestri-preview');
      if (scoreEl) scoreEl.innerText = `${ptAsa} - ${ptOpp}`;
      if (canEl) canEl.innerText = `${canAsa} - ${canOpp}`;
    }

    function saveMatchFromRegia() {
      const originalId = document.getElementById('regia-match-id').value;
      const newId = document.getElementById('regia-f-id').value.trim();
      const garaNumero = document.getElementById('regia-f-gara').value.trim();
      const avversario = document.getElementById('regia-f-avversario').value.trim();
      const data = document.getElementById('regia-f-data').value.trim();
      const ora = document.getElementById('regia-f-ora').value.trim();
      const tipo = document.getElementById('regia-f-tipo').value;
      const sede = document.getElementById('regia-f-sede').value.trim();
      const stato = document.getElementById('regia-f-stato').value;
      const nota = document.getElementById('regia-f-nota').value.trim();

      if (!newId || !avversario || !data) {
        alert("Compila almeno Giornata/Titolo, Avversario e Data.");
        return;
      }

      let ptAsa = 0, ptOpp = 0;
      const tempini = [];
      for (let i = 0; i < 6; i++) {
        const a = parseInt(document.getElementById(`temp-asa-${i}`)?.value || "0", 10) || 0;
        const o = parseInt(document.getElementById(`temp-opp-${i}`)?.value || "0", 10) || 0;
        tempini.push({ periodo: `${i + 1}° Tempino`, asa: a, opp: o });
        if (a > o) {
          ptAsa += 3;
          ptOpp += 1;
        } else if (o > a) {
          ptOpp += 3;
          ptAsa += 1;
        } else {
          ptAsa += 2;
          ptOpp += 2;
        }
      }

      const existingIdx = originalId === "__NEW__" ? -1 : dbState.partite.findIndex(p => p.id === originalId);
      const existingMatch = existingIdx >= 0 ? dbState.partite[existingIdx] : {};

      const updatedMatch = {
        ...existingMatch,
        id: newId,
        garaNumero,
        avversario,
        data,
        ora,
        tipo,
        sede,
        stato,
        nota,
        tempini,
        risultato: stato === 'conclusa' ? `${ptAsa} - ${ptOpp}` : (existingMatch.risultato || "")
      };

      if (existingIdx >= 0) {
        dbState.partite[existingIdx] = updatedMatch;
      } else {
        dbState.partite.push(updatedMatch);
      }

      document.getElementById('regia-match-id').value = newId;
      saveToDatabase('partite');
      renderRegiaMatchesList();
      renderAllPublicViews();
    }

    function deleteCurrentMatch() {
      const matchId = document.getElementById('regia-match-id').value;
      if (!matchId || matchId === "__NEW__") return;
      if (!confirm(`Eliminare definitivamente "${matchId}"?`)) return;

      dbState.partite = dbState.partite.filter(p => p.id !== matchId);
      document.getElementById('regia-match-id').value = "";
      saveToDatabase('partite');
      renderRegiaMatchesList();
      renderAllPublicViews();
    }

    function populateTickerForm() {
      if (!dbState.ticker) return;
      document.getElementById('regia-ticker-active').checked = dbState.ticker.attivo !== false;
      document.getElementById('regia-ticker-text').value = dbState.ticker.testo || "";
    }

    function saveTickerFromRegia() {
      dbState.ticker = {
        attivo: document.getElementById('regia-ticker-active').checked,
        testo: document.getElementById('regia-ticker-text').value
      };
      saveToDatabase('ticker');
      renderTicker();
    }

    function renderRegiaRosterEditor() {
      const container = document.getElementById('regia-roster-editor');
      if (!container || !dbState.roster) return;

      container.innerHTML = dbState.roster.map((a, idx) => `
        <div class="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-2">
          <div class="min-w-0 flex-1">
            <div class="text-xs font-extrabold text-[#0f2544] truncate">${a.nome}</div>
          </div>
          <div class="flex items-center gap-1.5">
            <input type="text" value="${a.numero}" onchange="updatePlayerNumber(${idx}, this.value)" class="w-12 px-2 py-1 bg-white border border-slate-300 rounded-lg text-xs font-black text-center" />
            <button type="button" onclick="removePlayer(${idx})" class="text-xs font-bold text-red-600 hover:underline px-1.5 cursor-pointer">✕</button>
          </div>
        </div>
      `).join('');
    }

    function updatePlayerNumber(idx, val) {
      if (!dbState.roster[idx]) return;
      dbState.roster[idx].numero = val.trim() || "-";
      saveToDatabase('roster');
      renderRosterMain();
    }

    function addPlayerFromRegia() {
      const nameEl = document.getElementById('regia-new-player-name');
      const numEl = document.getElementById('regia-new-player-num');
      const nome = nameEl.value.trim();
      const numero = numEl.value.trim() || "-";
      if (!nome) return;

      dbState.roster.push({ nome, numero });
      nameEl.value = "";
      numEl.value = "";
      saveToDatabase('roster');
      renderRegiaRosterEditor();
      renderRosterMain();
    }


    // --- LISTA R / DISTINTA GARA FIP ---
    const FIP_LOMBARDIA_LOGO_IMG = `<img src="data:image/png;base64,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" alt="FIP Lombardia" class="h-12 w-auto object-contain" />`;
    const FIP_SPONSORS_BAR_IMG = `<img src="data:image/png;base64,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snpS7vPMUVTOGZNj46VSSUXCylrv2eWxqVA7GsZ7L54llM8hsh7kLVx+6Jve0KijpwqlsHIsE1Y/+tGPLrvs1z4bvPee+9/xX/991g++scVWs5gxe73qW96272v237dUwWML8/e850PLlz3R09M3NNg/OBjt96rd0jRXcB//xGeeXLT01C+eecyHjyqXzYc/dOh11/5xbFSefLIWlSvMrDV5IQaTNibR1oln7TMuVYdyn/cPzly6bPQjHz2pUsbIjJ4fnPWdkZGRShxJK+kOJOq58rR3ExTp8fHxBx98sGNi7Hi8H3roocsuuyxs7OnpqdVqHQvlWWed9f3vf79SqRx33HGf/exnnXNpmu62224PP/xwmqZhciSisbGxhx9++IorrmDmE0444YQTTtBa33jjja95zWtC+m7IRc+y7LLLLrvyyiur1erXvva1Qw89NI5jrfXRRx/97W9/u7OMeXAdf/KTnzzhhBP23HPPu+++2zm33nrr/fWvf11vvfWOPfbY733ve+eff7619uqrr955552dcytXrrzrrrtCbG0IrA2nqbX+61//+vGPf/zAAw+86KKLxLOI8tKqzKQ1QN57q1pygGpVPG0rms/5hViFjuWio3iHZeFGRkaUUvfff39IDP71r3/9gQ98YJtttlm4cKH3/tWvfvXee+8ddKrge9RahwoF1C5n0Hk8A2Dmnp6efffdd88997zqqqvK5XKWZSEf4dZbb+3p6QmxFc8iYD4sVjGljj+tlbGVtN0HYZYBsQI8CNAMCkk7YUKtVhMWmwuZpI+FajZfsmx0YGD9ngTjOUbHJbPJh49+96v23SJIPM5DC/oTJAo33+TOPPNb859c8vpD3/KKV+1NStabNSPSyPI8qVRRUT5tDg1U99huZHDuqZ849euu7nv6RupjdTee777NwLyZqGDjR+fPq0vVlCpljUZtrE81YJIUumGlVOqfbDR7q8nWW24WK/Xr839UZfTNwk+//9FXvO6DtbracJvtVixb+so9dz3lpL1KwBW/un7ffXbvGwAbNIEzzvzFAw8ubE40XrnX7m85ZB8dY89dN/7NLz77gWO//sS4najVS2aIXQ72YFKAYgp2DyLdqcn03D7ZOxJMSMQIQTonnnjiFVdcEW72Wq02Y8aMKIq++93vXn755ZdccsnY2Njy5ctnzZrV09OzySabXHjh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aOhzn/vca17zmr6+vr/85S8f+9jHHnzwQWY+44wzPvKRjyxYsODlL3950AEqlcoll1yy4YYbPvjggyeffPLdd989Njb27ne/2zl3+OGHH3XUUeecc061Wq3X6wCMMVtttdWXv/zlmTNn7r777ueff/7++++/YMGCk08+ebPNNrPWfuELX7jwwgvHxsbuuOOOb33rW2mavuxlL2s2m52o7zRNTznllIMPPrhWq3384x//4x//WCqVLr300qOPPvrMr58JDRb2LIAVRErBKFICNRW21Bn2/77y8iFJOMQphIsVUtmDwZiZzznnnOHhYWvthhtu+LWvfS08FUIyf7iaIQmic33D07fZbPb29tbr9Z6eHu/9eeedFx5yAwMDzDw8PCztOoXPwt+OYOVk6jZay3RrMQHtlYdCKRqFVS0i3LEwS6j7i1Z8uBCUrNSkqRSluSPVy2Sdb7AFAVogkggbjawnQrPJ1bKqRYgAI/AOu+48d+utPve9n1zyy5//7MXbb/Hjb3+xpHHmN8+7+k93NMQsWjQxPHu9WHMk2HWr+MufeNeJn//OkhVPbDpzRj62uC8GZeDJha/cefM9X7WjFfQoCFDNoWOkQMNBa9x++0SttvRlL900S3HRWYu1R0+EUhlXXvT1w479wsLH750zc4NqVC8p9Bvsv8emg3FWUskfrnvk9O+ff9dDy3tnbJLn0b0/ufry391wwgcPf9muG83twbveeuDJXz13vZENah6cunIUKxYNqPaqWSIQUkytVchXydZ7bjn33HPPPfdca+3ExMQRRxyxww47nHvuuY899tgBBxwQRZG19s1vfvPWW2998cUX33DDDc1m8/TTTz/xxBNvvPHGd77znYsXL07TdO+99z7++ON32223FStWXHfddbvssss222xzzTXXDA0NBZ9PkKIqlUoURUG+DFUbsiw79NBDr7/++rGxsYMOOui0006rVquNRuPYY4+99tprb7jhhsMOO+zss8++4447TjrppCRJli9ffvTRRx9yyCHXXXfdRz/60eHh4eOOO+4lL9llxx13HK1NDPYOhjPSWrN4UibnVryw82IZJUMKEQf5bfX+XLsgJRKKLQNamXKSCnsgKccD641c+7fr/ufLX/rm17+x/nrr15qNvJ7e8/hje+yxx6KxsY9+9tNDw0Mf+chHli9bvmV/r0+Svz9w/wYb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ugX0X0kn8z8kCYer06kKG8oTbLnllpOTk48//niz2SSio48+esaMGaOjo91mY2kvHNBdfCVN076+PudcT08PgGCWDmpS0OpDRXruWmflmSqBRGh/ESwwynhefd7g9uu0Vc3ba9tIe2EcoCtlKYhmhnKoOPeeVMlZEhOTxJoQFsnkUF1LsQEqkf3fL3/punvrJUWx1Gf1973zXW/fepst33PkQfPmbfTEYw/GlD/20OO77vDiDTfcukHl5XmekdKKfY6eBDu9YOg7Z3z8tK/84vZb7h8sK82oRJg1VLnyyt8sHxtvZGmllL7+tfuNmJ6x5Y2Lfv+7egpNlYULFuyz324lBguGe5JKDJv7KNaDPfjBtz7x3g+f/vgjy4jXqxrEkOFe1VemLMdFF16UNnRcmTvWLJukvzQQr6wt+873zt5jl88Zxh47bjLYW140MZappBLHtpF3RzJIKL0t7cCEf5ltPsg6p5xyShDyBgYGvvrVr1ar1cMPP3yLLbZwzg0ODu64445f+tKXkiR51ate9ZrXvGZ0dPTKK6886qijjj/++CzLBgYGTjvttNe85jUhcn7WrFkrVqwYHBys1WoHHXTQn/70p06+ZaiUGQouWmtvvvlma+2VV1553XXXAXjxi1/8pS99qVKpiMjIyMinP/3p448//rbbbrvpppu+/e1v9/f3N5tNEdlss80++tGPMvOWW275+9///m9/+9vs2bPPO++87bbbrr+33zkmUoYAAnsWjUiBAcuitWmtWhQKvD3D2z+ULhYSOCciXpyOKtbZuLeaiZ+/eFHTW2/kwksv/s6Z3x7z9oADDvj8Kac8unzxehtusPMeu42uWPmnv/7105/4pPNu880232uvvZYtXfrLX//qqHf+95IlS55Y9PgNt9168sc/cfrpp79k992feOKJcrl87wP33XbPXWLUX/52A0XmzG98M7XpK16296c+9amfXfzLH/7wh9XenlKp9L9nfefyyy/fdPPNrbXDg4N9swaX/n2sKfl7j/vQwsceW7x0yRe/8MUtt92mf3D4wl9ffNFFFy1ftuzI971ny803u/HGG884/fRTTz01qSTLli177/ve97Of/azRaJRKpQ033Pj++++74dab93vZ3mGpbRNHjm1idC7wAmeZJaxyBfXMrYEaEKVEbMgjXXzLbb/+7BnZo4s/95GPYPutsOkI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Ck9/8NFD1bq2UorylZ6+444+dv11122NCs1BLgA3mahZR4/f96AGxnSOmPXWzJ+dc/Y2221bMOG82XOV4LYb/0qJ87V6QQWX//HCns8X69QVdBARa1BeqXdmvffmqy9vsN4G4p21lkyQOhsSKAtGoiGV8t9BPRUbAsMBikFYdeedB999/4rbbi299uqGm26yxYabRuO6Lrnyii1nz5q4xmovvPLq3Jlvb7zhjPrS8kBvT2nqVIwdJWNGzo6rk/MRulqRxgOlsNpeXG+T9R+4++/3vPFSy4QJadeIMLGDuWJvMID2NkyZPPKhBz9+7R3YmMaMXLJkYVc+98pzzx3+7aOh+LVrr++dPXvLDWbcfNNfmled6h970nt/9513HXXe2SiEv/rlOWecccZVF184taVrwxGjy6Vo6pgOpoCI33/yqdUmtF3/52ur5b7Nt9hknb33+vQPf/j1ny7fo9w3ebN177zt1s/efmebrbf23bJ08YKqUXmllhhTKTVVgwgAWEiy6NJyiPt/oyjxxTfwUGDUEdh7KPK9fUs62jtzeXXDn68877zzbr31tptuvPHTjz/+7W9/Kx4A4lqSWiI453DIQQfecvNttUq89Vbb3nD99WuvOjWKkKaoJ+nrr79+1jm/mjf/09Ejur558EEmQC6kuFbWWhtFUahJ4L1TSokgF2nnUaslTaWwXq8rxYA1BrGF804zO59mAoGZ497IFK2AyFqeiP/n37vcGGUACgig156+ZmdLx/yBpWPHjP3olZkRAgMkPYOz3pgJuOZ807JlC2uVKoOUAImtp4MhYXCgTzq6lKIakhfffi3aX+2y4w5jJ0248Pqr6kgDE6YuHdU86oQTjp9bXnbSb86uVONJnW0hwqyWu69aHjN2bCnIKdgP33g78hRAudR19/br5lwpX1p91TVaCs0MYiEo8jzktxOzQPlsHshyWpMhEHUWKPvi/R06zXmwRohw3rx5Dz30UEZ2q7V24ljpelzv7un92x137LnnXsVCmDpkbJJhFM35eN79DzxUamqy1lZrNRMG/eXBLTfZfL111vApQk2DA+Ub77h94bJFQRhWq1V4PuzgIyeOGblofnnmOx+FXmutcnkjhIfveXSdjdZ87NGnd95re+fBzArERN57ERilE5+uPEi/mAP45/V42bKeP/zhD2uvs876689YsGB+mqZLliwq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R0wIjYc4iGLlUqeHBKOyCkQieHj+cjf1y1s25D0NV7lnnykOpMRj9pw5V/zp8jhNrcSFQk4J4nqqVOisJ1LOuawaoqmp0NPT09bWPn/e4lKxrbu7++933trcHPo0thJEmqKO0kV/+MWjj7/10zPOWfj54gt/d3Eub7yHiLDWqY2d91pr79I0bczTMAwziB9DiEQp2vXrO+QLYU4Zyq6cyXmQEDeGA1j8v4+Mr9A7K3EuJEny4cz315u6RuvYro/mzlEVq4Lwvffem/XmO6yDuk/Gdo4u5guB5lwYta87IzImCIKoELWWmtrCghhTb9KJViPL8IAKjYXU4IwxVE1CUpXBwWoSD/pkYHCQ4JMkWbhw4bRxkwed/eyTeWEUvP3+u++99149sYE2IhxxMGPdGX2LltYW983+YPbYDbYAmBga1jYKxzLVySy1lQktDu+0y38lYZhJpxETFy/e4/777pv/2We1Wk3AWgflcnn06LF77Lk3tEqT5MGHHqqUy/lCQSsVx/F9995bampasngxK6WVcs5lgdcDv/GNke0janH9lptvW7Tg84/txx9+9NGkSZPWWHWNEV1d4rB4/uIPZ87mlMizJvIAl9TG226kmmnympOs52cefNGkXO0dzJUKd9/6wMHH7tc+vskoxNYrz8wKw4UN/7Y1SIXByKQuWCkz5IBkCzAIzrFWcT0Jw3w9TrTWt956yzHHHPPNb35zypQpN95442abbRZFQZLYINC33HLL008/feyxx44eM3KbbbY5++yzzz777Hnz5u22x84PP/jIWquuPeejud3zljxxz6M//+nZ3X29L7/w8ovPv6ACnaFC0jQdGBwcNTYgxi1/venF51/45iEHPfPUE/949qkHHrzPJnGxWHTeRlHImgYG+nQYtLW1ZZi1/6T9D2Lp/xdddy/eO2IDKxCRUGuOU8/CxKQEIkzkScQlShll/LEnff3tT3Dazy/lXNdAf6U55K233viwYzfd7es7337viypfWlypdiforqFO+RyxTxC1jO9JEedGl3X7D8754+k/Pv3o7+5dwchX3/skdUmuqX3BYN/F1z8xdcq4jxfGibTO66c/3Tqn2j9Ytu1RoThQ6dvl4P2CFvz2wjtfe+31puaCtQn7W6+/9hc/Pv2gM864KqnXWppau5csLgtqZQzEVvJhreYKYRGR763UTjvr2yOb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wGB0NOvqTutNTVOyFt5HYnCKtUXiRchaw/AC76Vi2RKyel6tJAlDvDeGxOdszMyMHpWYFmZAfDUD6g1hZidxTxQFKVIDELLMq5Ax7IFQU2mD1u2RZVlXNWWGyyNRrMvyWi0ZGc5r1YQZ9YZPK+yF8hzWIsvQ1YNGFs8Qyr4AdFcxMtpI0zREBZyjNMHoULOrqzLazGvdiQLNunrnuqsJDJwgTUHA6IjvqhhXjF6wMrq7E+fhnQKoVMi5uCHmuVQqHHgSBzc0+7srIkhS5A71rNHXVTUKcULU7t1A0387z5RMngHzYVp4QexBz3/THaKCXFRgbr3j3q9+81v7HXjQK199xrcvvvRPN930lre8ZZedFj/+6IYvfu6zixYtettb3pzW8JWvXTR3zvzDjjjyXf/07tf/7d8ec8yBV195HbMee8yRbHHFFVevWvnY9jvucsutdxxw4EHzF8z6/Gc/+6pXvmbFiofXr1//6lf9zc0333TfPXdtt/32IyP1lSsfedPfv/Hmm2//0Y9++C//8r7582v//pmvveyMl9br9euvv37nnZfed+/dO+yw5NBDD730sp+IyPx5Cx9e9UhPd98pp5z8la99q6enZ9vtFj+8YkV3V/qqV5zdW6Usa9bSpCNrlNum+3OyMMZcpK1wSczG9JIDbOw3L7jkpj/detZZLz/w4P0/95kvs8E73/GWrhquu/62a665eqsttnjN616pio997FPvfve599xzz4Xfvuh973vfllvMOvfcf/3ABz4wf263V1z8nZ8QUX//7GXLlr3i5X9z66233n/fPUuXLt2wYcPAwMAbXvfqyy67InfNrp6egYFBJbz61S/73Oe+mkv+j297q4r856f/44MffP8l3//h0ODIzrvsce2115100slLt1v8ne9cvGjrxbXungeXP7LbHnsedPBeH/rwJw7Yb9/enp5HH1o5b1bfOWefbCEaOkI/s6bj5pjuCNUXqiAarTfTauW88768aKud5s2Zf91vfv3mf3jLpZdd9ugjjxx08MErH354dHT0ta991U9/+rPR0dFtttnmycdXE9HZZ5/21Qu/88Tjq9/5zncy86c+9Yl/ff/7b7/9tjv+fPvOuyy96/Y7Dj74oB2WbP/tiy/ccvEWXV1dt95660FHnbzLLju/733vP/Wkk51z9993zwEH7HPU0Qd71/zTTTevfmz4iit+cfbfvHSrrba66cZb77//gQMPfnElSbuq6QH77fP9734/bza23Xbbe++9d6ddd9lzj73+67zzDjz0sBNPPPTKX9585733vvGNr/ynt53731/79G9/d9stN9+w89Ltly1btmDBgped+dLLLvv5unUDixbMX/34Y12V9KVnnDK7v5umXdT7zLyRDtPdK6yxAjQyufY3v13x0CN/uPHGk048Zacdtskzf9Uvf7n77nuuXb/+0UcfP+ecc5YtW/bLX1518okn3nffPSMjI6961austZdf/vOBgYGtttn+wQceeMlLXjIwMPD973/3jFNPGxwcfOD+ZW9725uvuuqa9QNrZ82aVa/Xsyx71SvPPu+8by5/8sn3vufc/j7+5Mc+9/rXv/6BZfetXLly8YKFD6x44ID99tt5t53/53vf7+/vT22ybt3aeXPnHnHc8e9//78eefhhc2fPXr78gVl9fWe97PRaCirkwnOx9Uxjq2s1g3XOERkieuSRR+66667rb17e3VNbsuRF+++//y033fbYY4/1ze5pNptZTmeffdr553+bWHfcfodVD6/o7e0+55zTR+q46KJLFixaqEKPr3701a969Re//JVFixbNmzdv5cqVW2+99SGHHPK9710yd/bs/v7+e++9d4999tx7r72++KUvvWjrrf/mb856+KHV3774wnP/+dwLLjh/2xdtJ+IeuP/+s88+2+fusssu22uPPdc0Bx9Ytvz0009n5n//9/8486Wnq8vvvOP2448+8qAD9qZC4ErsNfR8Mt1FRYmbmTRz/cbXz99uydIHH1yx9U477bbbbh/5yIdfduaZjcboqocePuXUkwYGBm6++eatt966Ptq8++673/qOt69c+cgXvvCF9773vUu3n3/eeRcdccQRXV0911xz9RaLFw8MrOvqqp5++onX/Oq6lSsf3nLLLdetWyeiJ5988rXXXnv3Aw/vsfuuo4Mb1q5+7A2ve/X82d2S54aLOlACCj6XsKWZF4Ta9CzCtxd2JpoJ1g6OfO2bFy5/6JF/+/BHvddPf/JTs3p7/u2D//iJj39+6fZLemfNJqL999n77rvvvvIXV5x44okPrXyYSE84+aQrf3H1uoH1b33r60dH8ZEPf6xaqbzh9W/cdYdehXWCj/zfT+yy6x5z5y/+4x//eOCBBx5y6H4/+9nlv/nNb04+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1/zq6re+7c29fd3EWh8dVsXoaFar1QBas2bN3/3d322xxVaf/exn6/Wmc9hxh51e+9rX9vb033333T/92WXDw8NJmmaZB+Bclud5JQET/vSnGwNe+9rXGgaD/bNl6EzE5KssyNXQGWv+7P6hDUOvOPvlxxxzTDOrX3755Q8//KSou+eeuy769vm/+91v/uM//r27lvb1dK9fX2824V3W013Js9HBgaFXveo1O+644yc/+cnU2loNixYtesPr31irdV9//fU/+fGlxiRDQyOBXWBoaKRarQ6OAIZWPbryyqsuv/GmP5x40rH1RsZGuquJ97mxPDLapl7r6empVCpgAlGlUlk3UBeBSZPtd1gKYP68he95z3uu/dV1f/7zHbVKNW/Cez8ygvkLF+R5PtiAtXbnnXd2znf39Q6P1odHsWGo2Tern5kN/yUphlWECMwUtMfBwcHHH3+skSHLUK2mQ0Mb2GBkBMaytUZJ77zz9vPP/++Lvn3BG9/0hi0W1/Icu+2+05kvO6PWVfn2ty+84YY/5Hlz5cqVl1xy8Q9+8L3/+38/3NfXM2tWX5LYLIOIrl+/LkmxfsP6o458yete89pPf/rT69cPDA5s2Hef/V9x1tm1Wu2Pv/v9j376k8CavnbtsCoGBwdrXV3NDKP15h9uuOna66779iXffdnZZ42MSK02E/ccKcrtkiSJvNPM3dUKqXcZhjastZZHRhqpxfDIgDVEir7enut+/avvfPuiP910wz+/6x0MiOKMM04/6KADn1zz+Pe//72h4VFm/Pznl3/zm98YGFj39re/df3AmtH6iLEwhJGR4byZeY+8mX3gAx+45577zjvvPGMSAC878+x99tknz/111/3mrruW9ff3AwDDAtU0qdfrliCC22+/8+orr7rlpj8duP+Lh0dzAxjA5c2i2u25khDTx9Rv3vnMENWqlojOOuvMY446evXjj19++c+Y0Ww2fvWrX37r/P8+/vhjTz356IULF6xdu6Zi0duHwcGBvv6edevWbb311u9+z7v+8zOfvf3Pd6RJxSbJGWe8dP78+Q899NC3vvWtZhN5no+OjjabGBjQvr7+JEkHBwefePzRX1zx80suueSkk07abtstVDVNqpGABAAC1UfcUGbirJ1hUIn7UiDfYYVrYmDtwGmnnXb5zy7/+c9/ftBBB3V1VUWQVpNqd7W7r7u3t9crsiyrdVfTFAODeXd394YNG7yq9z7Pccl3v7vPvnst2WH7Sy/96aOPrAZQTUFEP/vZZT/4wQ9E5HWve913v/vdLRdtIbnv6en50Y9+NDCg1vLtd9x29VVX/fGG3x922GEAqlXUh4eMgWF47+bM6vvQv33wp5f+8Ior/tf7bGhodP78eQzq6eq2xiQG8+bMvu/eu2+/5bYLz//WK895RZpaS0gI4nzIeOIyW77E04axRKR51vCS12rVru5apZKO1uuNOoYGh7u6qmywYMG8W27507XXX/vJj3383HPPTS3mzJnz/ve//9fX/ernP78cwJw5s9KKFREFuntqoRmHqjeGh4Y21JtoZnmSUrVa7erpHhwauOmmG666+gpm2Wbb3rlz53Z1dSlgE6SVyvKHH7LWDA6NzJs3jxVdXV0Vm4yMDNXSRBSGmYj6unvyvGkM+vr6hoeH0zRtNBpsIIp58+ZtscUW1toksc0m3v3ud++77749PT3f/e53H3zw8eENg/PnzmWGc0hT1Go1jhXpeF4mUJd4qngei84iO0NYxEKZzOy+2kH77LrfgYf86Ic/OeXoUyrSnNub3Hzz7a8485SjDjuIiAaeePTJhx7dam7frDm9c7vMAXssXTibPvbBcy/41jf3WrqtjqJiseLO2+689/7ddt97r523Xbx4y8Wz0z12XPyOvz+nkrAIKlW8402v/9XVv3z84WWjo/Udtpz39je94qabb6ti5KiDd1zY//ZvXXhhfcMj0hi69sorDzjggF133HqHbecvmFN909+ec9E3v7Lbbrvdf/+yE489eOm21W22nH3ggQe/5Ii9f/ubfR+4/57RkawrtdU0VYQ2VJPpOc++7sOd9fRtHqzIKGYYCSDA4QcfNHfe/DNPO+23N/xu7522ecmBe8mozwYff98//v3Ouyzdd9cXfemLX+YmXnrikfN77bYLZ/clSw7Zd5tZ6SuvelE6u6+S581aV+WOP9/wyMoHFi+Ye+hBe233ovlDQ0N/+5qzTj/9hGqCwSHf12tedc5pP/v+d7fZZttVj68+7dgjF/bh+MNfPL8nOePvTv3BJbJyYb/N3Orl9zx0z+3zFy3efcftFy6Ye/RRB//xD9dceP7Xq9XqunWNc9/15pSxx87bnnPOK5Zut8UWc2c/tvJBOWAHqLOUqD4HQ8qTmu7ifWgfGhrw1hvNnq7qNVddtdv+I31pdvQhe249v7brdov23Xmbs84+u6ebR0c1NXTWycdc8o3zdthhhxUrVpxx/FG7b7/Vbtsu7Lf5P7z6uEW9yQ03/KHHYODxB39x762zZs3ad9clW2211cknv+SWP1x73mfO22WXXW6//fZ3vP2NqdUjDtv7zJceO29OVyVprH50+dLtFud+wItfNLfnJYfsW01cd2oXzO1auv1W7Ec2rB98WEZPPuGoY4865MJvfHXx4sWPPvrofvvtP6t3p523W7zlPHz+0+//xCe+uPRFu9gchx6816w+/MObXvvra65Y9+TDy+67b9slS/p6zbvf9bZvfP1Lhx568IoHl++9z267776Tc1qxz4EyH9itJ3zKnGUZmIxNJGv4rH7WGae6LOvvSf/xbW+68oqfrHjgHrbpku0WnnDcobfddtsbXvfys8460zISxuBIs7+ncvutv7/91j8u2nLJYfvtvvdO25Lqqcce9s53vBWAtWDGa88+7auf+9Q+++zz6OOPvfvtb9I6XnLg3nMWzDr0oD23ntPznW8P77bt3IsvvmbNmjU77LDDvrvssHSXnU478cAVd//50h9csuXixStXrnzt2S/t6cZpJx//ute8Zsst5uy05EUrH37wkP139R5FkLv1ZH9BJ2xo1KzMUWoFuixVVfX77bU0SUxXip132PLd73zTJRd9ZcedXvTg8uUvO+3orRZihxctOP2Ew3fbdY/eHps38wpB6iO/vvLSgw46qD/VXXfYalYX777j1mecccaOO24jgpGR5stPP2bV/Xd84wtf2nHHHe+88853v/mNfQYvP/m4Bd32I+9/51e/+vVms9mf4pbf/+qhOXO6u7v32GmbxXN7P/Iv7/nCF77wk+/8OJld/dONN/2/D/7T0NrVZ512zOtfeWZ/N/pTHV7/5NYLt7cA1Cc2gfPgBN6PocJ4Nmbr9JMMi8T4NsmBFj8JULXGOp8pJbWKuenGP6x54sk5s7u33W1Rl20cecge//CGV8zp70lTDG1wH/6Xcy/81rcuhdswNNRl3Rtfc9ajjz62x9It99xpwWf+46Mf//jH08QR/PXX/nzPPffcYuGslxz+4koqb33L3/788h/dd8+SNWvW7bhky733WLL60Yd23WnJqacefcef7//VL69a/cTA/Nl9yhQLLUlarWGK+o5J2oyW6ETR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" alt="Sponsor FIP Lombardia" class="w-full h-auto max-h-10 object-contain pt-2 border-t border-slate-200" />`;

function formatDobToItalian(rawDob) {
      if (!rawDob) return "";
      if (typeof rawDob === "object" && typeof rawDob.toDate === "function") {
        const d = rawDob.toDate();
        const dd = String(d.getDate()).padStart(2, "0");
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const yyyy = d.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
      }
      const s = String(rawDob).trim();
      if (!s) return "";
      const isoMatch = s.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
      if (isoMatch) {
        return `${isoMatch[3].padStart(2, "0")}/${isoMatch[2].padStart(2, "0")}/${isoMatch[1]}`;
      }
      const itMatch = s.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
      if (itMatch) {
        return `${itMatch[1].padStart(2, "0")}/${itMatch[2].padStart(2, "0")}/${itMatch[3]}`;
      }
      return s;
    }

    function normalizeAthleteKey(val) {
      return String(val || "").toLowerCase().replace(/\s+/g, " ").trim();
    }

let firestoreAtletiMap = null;
    let firestoreAtletiLoadingPromise = null;

    async function loadFirestoreAtletiMap() {
      if (firestoreAtletiMap) return firestoreAtletiMap;
      if (firestoreAtletiLoadingPromise) return firestoreAtletiLoadingPromise;

      firestoreAtletiLoadingPromise = (async () => {
        const map = new Map();
        try {
          if (typeof db !== "undefined" && db && typeof db.collection === "function") {
            const snap = await db.collection("atleti").get();
            snap.forEach(doc => {
              const d = doc.data() || {};
              const full = String(d.nome_completo || "").trim();
              const cognome = String(d.cognome || "").trim();
              const nome = String(d.nome || "").trim();

              const parts = full.split(/\s+/).filter(Boolean);
              const firstFromFull = parts[0] || "";
              const lastFromFull = parts.length > 1 ? parts[parts.length - 1] : "";

              // Se manca d.nome ma ci sono d.nome_completo e d.cognome (es. "Oliverio Mattia" e cognome "Oliverio")
              let derivedNome = nome;
              if (!derivedNome && full && cognome) {
                derivedNome = full.replace(new RegExp(`\\b${cognome}\\b`, "i"), "").trim();
              }
              const derivedParts = derivedNome.split(/\s+/).filter(Boolean);
              const firstName = derivedParts[0] || firstFromFull;
              const lastName = cognome || lastFromFull;

              const candidates = [
                full,
                `${nome} ${cognome}`,
                `${cognome} ${nome}`,
                `${derivedNome} ${lastName}`,
                `${lastName} ${derivedNome}`,
                `${firstName} ${lastName}`,
                `${lastName} ${firstName}`,
                cognome
              ];

              candidates.forEach(rawVal => {
                const k = normalizeAthleteKey(rawVal);
                if (k && !map.has(k)) {
                  map.set(k, d);
                }
              });
            });
          }
        } catch (err) {
          console.error("Errore lettura collezione atleti:", err);
        }
        firestoreAtletiMap = map;
        firestoreAtletiLoadingPromise = null;
        return map;
      })();

      return firestoreAtletiLoadingPromise;
    }



function extractPlayerDobFromDb(playerObj) {
      if (!playerObj) return "";
      const direct =
        playerObj.data_nascita ??
        playerObj.dataNascita ??
        playerObj.nascita ??
        playerObj.birthDate ??
        playerObj.dob ??
        "";
      const formattedDirect = formatDobToItalian(direct);
      if (formattedDirect) return formattedDirect;

      const cfg = dbState.listaRConfig || {};
      const fullName = playerObj.nome_completo || playerObj.nome || "";
      if (cfg.birthdays && fullName) {
        const rawMapDob = cfg.birthdays[fullName] || cfg.birthdays[fullName.trim()];
        const formattedMapDob = formatDobToItalian(rawMapDob);
        if (formattedMapDob) return formattedMapDob;
      }
      return "";
    }

    function getListaRConfig() {
      if (!dbState.listaRConfig) {
        dbState.listaRConfig = {
          trofeo: "SCOIATTOLI BIG",
          luogoDefault: "CINISELLO BALSAMO",
          istr1: { cognome: "Aresta", nome: "Gaia", nascita: "11/06/1985" },
          istr2: { cognome: "Di Pietro", nome: "Elisa", nascita: "01/01/1985" },
          birthdays: {},
          customRowsByMatch: {}
        };
      }
      if (!dbState.listaRConfig.istr1) {
        dbState.listaRConfig.istr1 = { cognome: "Aresta", nome: "Gaia", nascita: "11/06/1985" };
      }
      if (!dbState.listaRConfig.istr2) {
        dbState.listaRConfig.istr2 = { cognome: "Di Pietro", nome: "Elisa", nascita: "01/01/1985" };
      }
      if (!dbState.listaRConfig.customRowsByMatch) {
        dbState.listaRConfig.customRowsByMatch = {};
      }
      return dbState.listaRConfig;
    }

    function getPublishedConvocatiForMatch(matchId) {
      if (!matchId || !dbState.convocazioni) return [];
      const raw = dbState.convocazioni[matchId];
      if (!Array.isArray(raw)) return [];
      return raw.filter(n => typeof n === "string" && n.trim().length > 0);
    }

    function populateListaRMatchSelect() {
      const sel = document.getElementById('listar-match-select');
      if (!sel || !dbState.partite) return;
      const prevVal = sel.value;
      sel.innerHTML = dbState.partite.map(p => {
        const convCount = getPublishedConvocatiForMatch(p.id).length;
        const convTag = convCount > 0 ? ` • ${convCount} convocati` : ` • in attesa convocazioni`;
        return `<option value="${p.id}">${p.id} • ${p.data} • vs ${p.avversario}${p.garaNumero ? ' (Gara ' + p.garaNumero + ')' : ''}${convTag}</option>`;
      }).join('');
      if (prevVal && dbState.partite.some(p => p.id === prevVal)) {
        sel.value = prevVal;
      } else {
        const nextMatch = dbState.partite.find(p => p.stato === 'prossimo_incontro') || dbState.partite[0];
        if (nextMatch) sel.value = nextMatch.id;
      }

      const cfg = getListaRConfig();
      document.getElementById('listar-trofeo').value = cfg.trofeo || "SCOIATTOLI BIG";
      document.getElementById('listar-luogo').value = cfg.luogoDefault || "CINISELLO BALSAMO";
      document.getElementById('listar-istr1-cognome').value = cfg.istr1?.cognome || "Aresta";
      document.getElementById('listar-istr1-nome').value = cfg.istr1?.nome || "Gaia";
      document.getElementById('listar-istr1-nascita').value = cfg.istr1?.nascita || "11/06/1985";
      document.getElementById('listar-istr2-cognome').value = cfg.istr2?.cognome || "Di Pietro";
      document.getElementById('listar-istr2-nome').value = cfg.istr2?.nome || "Elisa";
      document.getElementById('listar-istr2-nascita').value = cfg.istr2?.nascita || "01/01/1985";
    }

    function renderListaRDobEditor() {
      const box = document.getElementById('listar-dob-editor');
      if (!box || !dbState.roster) return;

      box.innerHTML = dbState.roster.map(a => {
        const dob = extractPlayerDobFromDb(a);
        return `
          <div class="bg-white px-2.5 py-2 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
            <span class="text-[11px] font-bold text-[#0f2544] truncate">${a.nome} <span class="text-slate-400">#${a.numero}</span></span>
            <input type="text" value="${dob}" placeholder="GG/MM/AAAA" oninput="updateListaRBday('${a.nome.replace(/'/g, "\\'")}', this.value)" class="w-24 px-2 py-1 border border-slate-300 rounded-lg text-[11px] font-bold text-center" />
          </div>
        `;
      }).join('');
    }

    function updateListaRBday(playerName, val) {
      const cfg = getListaRConfig();
      if (!cfg.birthdays) cfg.birthdays = {};
      cfg.birthdays[playerName] = val.trim();
      renderListaRPreview();
    }

function saveListaRMetadata() {
      const cfg = getListaRConfig();
      cfg.trofeo = document.getElementById('listar-trofeo')?.value.trim() || "SCOIATTOLI BIG";
      cfg.luogoDefault = document.getElementById('listar-luogo')?.value.trim() || "CINISELLO BALSAMO";
      cfg.istr1 = {
        cognome: document.getElementById('listar-istr1-cognome')?.value.trim() || "",
        nome: document.getElementById('listar-istr1-nome')?.value.trim() || "",
        nascita: document.getElementById('listar-istr1-nascita')?.value.trim() || ""
      };
      cfg.istr2 = {
        cognome: document.getElementById('listar-istr2-cognome')?.value.trim() || "",
        nome: document.getElementById('listar-istr2-nome')?.value.trim() || "",
        nascita: document.getElementById('listar-istr2-nascita')?.value.trim() || ""
      };
      saveToDatabase('listaRConfig');
      renderListaRPreview();
    }

function generateAutoRowsFromConvocati(matchId) {
const convNames = getPublishedConvocatiForMatch(matchId);
      const roster = Array.isArray(dbState.roster) ? dbState.roster : [];
      const filledRows = [];

      for (let i = 0; i < 14; i++) {
        const name = convNames[i];
        if (!name) continue;

        const targetKey = normalizeAthleteKey(name);
        const rosterObj =
          roster.find(r => {
            const k1 = normalizeAthleteKey(r.nome_completo);
            const k2 = normalizeAthleteKey(r.nome);
            const k3 = normalizeAthleteKey(`${r.nome || ""} ${r.cognome || ""}`);
            return (k1 && k1 === targetKey) || (k2 && k2 === targetKey) || (k3 && k3 === targetKey);
          }) || {};

        const fsDoc = firestoreAtletiMap ? (firestoreAtletiMap.get(targetKey) || {}) : {};
        const mergedPlayer = { ...rosterObj, ...fsDoc };

        const fullNameStr = String(
          fsDoc.nome_completo ||
          ((fsDoc.nome && fsDoc.cognome) ? `${fsDoc.nome} ${fsDoc.cognome}` : "") ||
          rosterObj.nome_completo ||
          rosterObj.nome ||
          name
        ).trim();

        const knownLastName = String(fsDoc.cognome || rosterObj.cognome || "").trim();
        let cleanGivenName = String(fsDoc.nome || "").trim();

        if (!cleanGivenName && fullNameStr) {
          if (knownLastName) {
            cleanGivenName = fullNameStr
              .replace(new RegExp(`\\b${knownLastName}\\b`, "i"), "")
              .replace(/\s+/g, " ")
              .trim();
          }
          if (!cleanGivenName) {
            const parts = fullNameStr.split(/\s+/).filter(Boolean);
            cleanGivenName = parts[0] || "";
          }
        }

        const partsFallback = fullNameStr.split(/\s+/).filter(Boolean);
        const firstName = cleanGivenName || partsFallback[0] || "";
        const lastName = knownLastName || (partsFallback.length > 1 ? partsFallback.slice(1).join(" ") : "");

        const dob = extractPlayerDobFromDb(mergedPlayer);
        const rawJersey = mergedPlayer.numero_maglia ?? mergedPlayer.numero ?? "";
        const jersey =
          rawJersey !== null &&
          rawJersey !== undefined &&
          String(rawJersey).trim() !== "" &&
          String(rawJersey).trim() !== "-"
            ? String(rawJersey).trim()
            : "";

        filledRows.push({
          nome: firstName,
          cognome: lastName,
          maglia: jersey,
          nascita: dob
        });
      }

      // Ordina per numero di maglia crescente; chi non ha numero va in fondo ai convocati
      filledRows.sort((a, b) => {
        const numA = /^\d+$/.test(String(a.maglia || "").trim()) ? parseInt(a.maglia, 10) : Number.MAX_SAFE_INTEGER;
        const numB = /^\d+$/.test(String(b.maglia || "").trim()) ? parseInt(b.maglia, 10) : Number.MAX_SAFE_INTEGER;
        if (numA !== numB) return numA - numB;
        return `${a.cognome} ${a.nome}`.localeCompare(`${b.cognome} ${b.nome}`, "it", { sensitivity: "base" });
      });

      const rows = [];
      for (let i = 0; i < 14; i++) {
        if (filledRows[i]) {
          rows.push({
            idx: i + 1,
            ...filledRows[i]
          });
        } else {
          rows.push({ idx: i + 1, nome: "", cognome: "", maglia: "", nascita: "" });
        }
      }

      return rows;

}

    function getListaRRowsForMatch(matchId) {
      const autoRows = generateAutoRowsFromConvocati(matchId);
      const cfg = getListaRConfig();
      const customRows = cfg.customRowsByMatch?.[matchId];
      if (!Array.isArray(customRows) || customRows.length !== 14) {
        return autoRows;
      }
      return autoRows.map((autoRow, idx) => {
        const savedRow = customRows[idx] || {};
        return {
          idx: idx + 1,
          nome: savedRow.nome || autoRow.nome,
          cognome: savedRow.cognome || autoRow.cognome,
          maglia: savedRow.maglia || autoRow.maglia,
          nascita: savedRow.nascita || autoRow.nascita
        };
      });
    }

    function updateListaRCell(matchId, rowIdx, field, value) {
      const cfg = getListaRConfig();
      if (!cfg.customRowsByMatch) cfg.customRowsByMatch = {};
      if (!Array.isArray(cfg.customRowsByMatch[matchId]) || cfg.customRowsByMatch[matchId].length !== 14) {
        cfg.customRowsByMatch[matchId] = generateAutoRowsFromConvocati(matchId);
      }
      cfg.customRowsByMatch[matchId][rowIdx][field] = value;
      localStorage.setItem(DB_LIVE_KEY, JSON.stringify(dbState));
    }

    function resetListaRToConvocati() {
      const sel = document.getElementById('listar-match-select');
      const matchId = sel?.value;
      if (!matchId) return;
      const cfg = getListaRConfig();
      if (cfg.customRowsByMatch && cfg.customRowsByMatch[matchId]) {
        delete cfg.customRowsByMatch[matchId];
        saveToDatabase('listaRConfig');
      }
      renderListaRPreview();
    }

    function renderListaRPreview() {

if (typeof firestoreAtletiMap !== "undefined" && firestoreAtletiMap === null && typeof loadFirestoreAtletiMap === "function") {
      loadFirestoreAtletiMap().then(() => {
        if (typeof renderListaRPreview === "function") {
          renderListaRPreview();
        }
      });
    }

      const box = document.getElementById('listar-preview-box');
      const sel = document.getElementById('listar-match-select');
      if (!box || !sel || !dbState.partite) return;

      const match = dbState.partite.find(p => p.id === sel.value) || dbState.partite[0];
      if (!match) return;

      const cfg = getListaRConfig();
      const trofeo = document.getElementById('listar-trofeo')?.value.trim() || cfg.trofeo || "SCOIATTOLI BIG";
      const luogo = document.getElementById('listar-luogo')?.value.trim() || cfg.luogoDefault || "CINISELLO BALSAMO";
      const sqCasa = match.squadraCasa || (match.tipo === 'In Casa' ? 'ASA Cinisello' : match.avversario);
      const sqTrasf = match.squadraTrasferta || (match.tipo === 'In Casa' ? match.avversario : 'ASA Cinisello');
      const garaNum = match.garaNumero || "";

      const convNames = getPublishedConvocatiForMatch(match.id);
      const hasPublishedConv = convNames.length > 0;
      const isCustomized = !!(cfg.customRowsByMatch && Array.isArray(cfg.customRowsByMatch[match.id]));
      const rows = getListaRRowsForMatch(match.id);

      const istr1 = {
        cognome: document.getElementById('listar-istr1-cognome')?.value ?? cfg.istr1?.cognome ?? "Aresta",
        nome: document.getElementById('listar-istr1-nome')?.value ?? cfg.istr1?.nome ?? "Gaia",
        nascita: document.getElementById('listar-istr1-nascita')?.value ?? cfg.istr1?.nascita ?? "11/06/1985"
      };
      const istr2 = {
        cognome: document.getElementById('listar-istr2-cognome')?.value ?? cfg.istr2?.cognome ?? "Di Pietro",
        nome: document.getElementById('listar-istr2-nome')?.value ?? cfg.istr2?.nome ?? "Elisa",
        nascita: document.getElementById('listar-istr2-nascita')?.value ?? cfg.istr2?.nascita ?? "01/01/1985"
      };

      let statusBanner = "";
      if (!hasPublishedConv && !isCustomized) {
        statusBanner = `
          <div class="mb-3 px-3.5 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center justify-between flex-wrap gap-2">
            <span>Convocazioni non ancora pubblicate da Gaia per <strong>${match.id}</strong>: la distinta è vuota (puoi comunque compilare o modificare le celle direttamente qui).</span>
          </div>
        `;
      } else {
        statusBanner = `
          <div class="mb-3 px-3.5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center justify-between flex-wrap gap-2">
            <span>${isCustomized ? 'Distinta personalizzata in Area Dirigente (modifiche dell\'ultimo minuto attive).' : `Lista pronta: caricate automaticamente ${convNames.length} convocazioni pubblicate per <strong>${match.id}</strong> con numeri maglia e date di nascita.`} Celle editabili al volo.</span>
            ${isCustomized && hasPublishedConv ? `<button type="button" onclick="resetListaRToConvocati()" class="text-[11px] font-extrabold underline text-emerald-950 hover:text-[#c8102e] cursor-pointer">Riallinea a convocazioni coach</button>` : ''}
          </div>
        `;
      }

      const escAttr = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
      const escHtml = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      box.innerHTML = `
        ${statusBanner}
        <div id="lista-r-printable-sheet" class="max-w-3xl mx-auto border-2 border-slate-900 p-5 bg-white text-slate-900 space-y-4">
          <div class="flex items-start justify-between gap-4 border-b border-slate-300 pb-3">
            <div>
              ${FIP_LOMBARDIA_LOGO_IMG}
            </div>
            <div class="text-[11px] leading-snug text-[#184785]">
              <div class="font-extrabold">Comitato Regionale Lombardia</div>
              <div>Via G.B.Piranesi 46<br/>20137 Milano</div>
              <div>Settore Tel. +39 027002091<br/>@lombardia.fip.it</div>
              <div class="font-bold underline">www.fip.it/lombardia</div>
            </div>
          </div>

          <h4 class="text-center text-base sm:text-lg font-black uppercase tracking-wide" style="font-family: Georgia, 'Times New Roman', serif;">
            LISTA NOMINATIVI MINIATLETI E ISTRUTTORI
          </h4>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs font-bold border-b border-slate-900 pb-3">
            <div>Data: <span class="underline decoration-slate-900 font-extrabold">${escHtml(match.data || "")}</span></div>
            <div>Luogo: <span class="underline decoration-slate-900 font-extrabold">${escHtml(luogo)}</span></div>
            <div>Gara n°: <span class="underline decoration-slate-900 font-extrabold">${escHtml(garaNum)}</span></div>
            <div class="sm:col-span-2">Squadra A: <span class="underline decoration-slate-900 font-extrabold">${escHtml(sqCasa)}</span></div>
            <div>Squadra B: <span class="underline decoration-slate-900 font-extrabold">${escHtml(sqTrasf)}</span></div>
            <div class="sm:col-span-3">Competizione: <span class="underline decoration-slate-900 font-extrabold">${escHtml(trofeo)}</span></div>
          </div>

          <table class="w-full border-collapse text-xs">
            <thead>
              <tr class="bg-slate-100">
                <th class="border-2 border-slate-900 px-2 py-1.5 w-10 text-center font-black">##</th>
                <th class="border-2 border-slate-900 px-2 py-1.5 text-left font-black">NOME</th>
                <th class="border-2 border-slate-900 px-2 py-1.5 text-left font-black">COGNOME</th>
                <th class="border-2 border-slate-900 px-2 py-1.5 w-20 text-center font-black">N° Maglia</th>
                <th class="border-2 border-slate-900 px-2 py-1.5 w-28 text-center font-black">Data di Nascita</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((r, i) => `
                <tr>
                  <td class="border border-slate-900 px-2 py-1 text-center font-bold">${r.idx}</td>
                  <td class="border border-slate-900 px-1 py-0.5 font-semibold">
                    <input type="text" data-print-val="${escAttr(r.nome)}" value="${escAttr(r.nome)}" oninput="updateListaRCell('${match.id.replace(/'/g, "\\'")}', ${i}, 'nome', this.value); this.setAttribute('data-print-val', this.value);" class="w-full px-1 py-0.5 text-xs font-semibold bg-transparent focus:bg-amber-50 focus:outline-none" />
                  </td>
                  <td class="border border-slate-900 px-1 py-0.5 font-semibold">
                    <input type="text" data-print-val="${escAttr(r.cognome)}" value="${escAttr(r.cognome)}" oninput="updateListaRCell('${match.id.replace(/'/g, "\\'")}', ${i}, 'cognome', this.value); this.setAttribute('data-print-val', this.value);" class="w-full px-1 py-0.5 text-xs font-semibold bg-transparent focus:bg-amber-50 focus:outline-none" />
                  </td>
                  <td class="border border-slate-900 px-1 py-0.5 text-center font-bold">
                    <input type="text" data-print-val="${escAttr(r.maglia)}" value="${escAttr(r.maglia)}" oninput="updateListaRCell('${match.id.replace(/'/g, "\\'")}', ${i}, 'maglia', this.value); this.setAttribute('data-print-val', this.value);" class="w-full px-1 py-0.5 text-xs font-bold text-center bg-transparent focus:bg-amber-50 focus:outline-none" />
                  </td>
                  <td class="border border-slate-900 px-1 py-0.5 text-center">
                    <input type="text" data-print-val="${escAttr(r.nascita)}" value="${escAttr(r.nascita)}" oninput="updateListaRCell('${match.id.replace(/'/g, "\\'")}', ${i}, 'nascita', this.value); this.setAttribute('data-print-val', this.value);" class="w-full px-1 py-0.5 text-xs text-center bg-transparent focus:bg-amber-50 focus:outline-none" />
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <table class="w-full border-collapse text-xs">
            <tbody>
              <tr>
                <td class="border-2 border-slate-900 px-2 py-1.5 w-20 text-center font-black bg-slate-50">ISTR. 1</td>
                <td class="border-2 border-slate-900 px-2 py-1.5 font-semibold">${escHtml(istr1.cognome)}</td>
                <td class="border-2 border-slate-900 px-2 py-1.5 font-semibold">${escHtml(istr1.nome)}</td>
                <td class="border-2 border-slate-900 px-2 py-1.5 w-20"></td>
                <td class="border-2 border-slate-900 px-2 py-1.5 w-28 text-center font-semibold">${escHtml(istr1.nascita)}</td>
              </tr>
              <tr>
                <td class="border-2 border-slate-900 px-2 py-1.5 w-20 text-center font-black bg-slate-50">ISTR.2</td>
                <td class="border-2 border-slate-900 px-2 py-1.5 font-semibold">${escHtml(istr2.cognome)}</td>
                <td class="border-2 border-slate-900 px-2 py-1.5 font-semibold">${escHtml(istr2.nome)}</td>
                <td class="border-2 border-slate-900 px-2 py-1.5 w-20"></td>
                <td class="border-2 border-slate-900 px-2 py-1.5 w-28 text-center font-semibold">${escHtml(istr2.nascita)}</td>
              </tr>
            </tbody>
          </table>

          <div class="pt-2 text-xs font-bold">
            Firma: <span class="inline-block w-64 border-b border-slate-900 align-baseline"></span>
          </div>

          ${FIP_SPONSORS_BAR_IMG}
        </div>
      `;
    }

    function downloadListaRCsv() {
      const sel = document.getElementById('listar-match-select');
      const match = dbState.partite.find(p => p.id === sel?.value) || dbState.partite[0];
      if (!match) return;

      const cfg = getListaRConfig();
      const trofeo = document.getElementById('listar-trofeo')?.value.trim() || cfg.trofeo || "SCOIATTOLI BIG";
      const luogo = document.getElementById('listar-luogo')?.value.trim() || cfg.luogoDefault || "CINISELLO BALSAMO";
      const sqCasa = match.squadraCasa || (match.tipo === 'In Casa' ? 'ASA Cinisello' : match.avversario);
      const sqTrasf = match.squadraTrasferta || (match.tipo === 'In Casa' ? match.avversario : 'ASA Cinisello');
      const rows = getListaRRowsForMatch(match.id);

      const istr1 = {
        cognome: document.getElementById('listar-istr1-cognome')?.value ?? cfg.istr1?.cognome ?? "Aresta",
        nome: document.getElementById('listar-istr1-nome')?.value ?? cfg.istr1?.nome ?? "Gaia",
        nascita: document.getElementById('listar-istr1-nascita')?.value ?? cfg.istr1?.nascita ?? "11/06/1985"
      };
      const istr2 = {
        cognome: document.getElementById('listar-istr2-cognome')?.value ?? cfg.istr2?.cognome ?? "Di Pietro",
        nome: document.getElementById('listar-istr2-nome')?.value ?? cfg.istr2?.nome ?? "Elisa",
        nascita: document.getElementById('listar-istr2-nascita')?.value ?? cfg.istr2?.nascita ?? "01/01/1985"
      };

      const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
      const lines = [
        [esc("LISTA NOMINATIVI MINIATLETI E ISTRUTTORI"), "", "", "", ""],
        [esc("Data"), esc(match.data || ""), esc("Luogo"), esc(luogo), esc("Gara n°: " + (match.garaNumero || ""))],
        [esc("Squadra A"), esc(sqCasa), esc("Squadra B"), esc(sqTrasf), ""],
        [esc("Competizione:"), esc(trofeo), "", "", ""],
        ["", "", "", "", ""],
        [esc("##"), esc("NOME"), esc("COGNOME"), esc("N° Maglia"), esc("Data di Nascita")]
      ];

      rows.forEach(r => {
        lines.push([esc(r.idx), esc(r.nome), esc(r.cognome), esc(r.maglia), esc(r.nascita)]);
      });

      lines.push([esc("ISTR. 1"), esc(istr1.cognome), esc(istr1.nome), "", esc(istr1.nascita)]);
      lines.push([esc("ISTR.2"), esc(istr2.cognome), esc(istr2.nome), "", esc(istr2.nascita)]);

      const csvContent = "\uFEFF" + lines.map(l => l.join(";")).join("\r\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const safeId = (match.id || "Gara").replace(/[^a-zA-Z0-9_-]/g, "_");
      a.href = url;
      a.download = `Lista_R_${safeId}_${(match.data || "").replace(/\//g, "-")}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

  function printListaRPdf() {const sheet = document.getElementById('lista-r-printable-sheet');
      if (!sheet) return;
      const clone = sheet.cloneNode(true);
      clone.querySelectorAll('input').forEach(inp => {
        const span = document.createElement('span');
        span.textContent = inp.value || '';
        span.className = 'inline-block w-full text-[12.5px] leading-snug ' + (inp.classList.contains('text-center') ? 'text-center ' : '') + (inp.classList.contains('font-bold') ? 'font-bold' : 'font-semibold');
        inp.parentNode.replaceChild(span, inp);
      });

      // Individua il blocco "Firma:" e l'eventuale barra grigia sopra gli sponsor
      clone.querySelectorAll('*').forEach(el => {
        const directText = Array.from(el.childNodes)
          .filter(n => n.nodeType === Node.TEXT_NODE)
          .map(n => n.textContent.trim())
          .join(' ');
        if (/^firma\s*:?/i.test(directText)) {
          el.classList.add('lista-r-firma-block');
          const prev = el.previousElementSibling;
          if (prev && prev.tagName === 'HR') {
            prev.classList.add('lista-r-hidden-divider');
          }
        }
        // Se contiene una striscia di immagini sponsor, nasconde l'eventuale separatore subito sopra
        const imgs = el.querySelectorAll('img');
        if (imgs.length >= 3 && el.children.length === imgs.length) {
          el.classList.add('lista-r-sponsors-row');
          const prev = el.previousElementSibling;
          if (prev) {
            if (prev.tagName === 'HR') {
              prev.classList.add('lista-r-hidden-divider');
            } else {
              const styleAttr = (prev.getAttribute('style') || '') + ' ' + (prev.className || '');
              const isThinBar = prev.getBoundingClientRect ? prev.getBoundingClientRect().height <= 6 : false;
              if (isThinBar || /border-t|border-b|bg-gray|bg-slate|divider|hr/i.test(styleAttr)) {
                prev.classList.add('lista-r-hidden-divider');
              }
            }
          }
        }
      });

      const win = window.open("", "_blank", "width=950,height=800");
      if (!win) {
        alert("Consenti l'apertura dei pop-up per stampare o salvare la Lista R in PDF.");
        return;
      }
      win.document.write(`
        <!DOCTYPE html>
        <html lang="it">
        <head>
          <meta charset="UTF-8" />
          <title>Lista R — FIP Lombardia</title>
          <script src="https://cdn.tailwindcss.com"><\/script>
          <style>
            @page {
              size: A4 portrait;
              margin: 6mm 7mm;
            }
            * {
              box-sizing: border-box;
            }
            html, body {
              width: 100%;
              margin: 0;
              padding: 0;
              background: #ffffff;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .print-fit-wrapper {
              width: 100%;
              margin: 0 auto;
              display: flex;
              justify-content: center;
            }
            #lista-r-printable-sheet {
              max-width: 100% !important;
              width: 100% !important;
              margin: 0 auto !important;
              padding: 16px 20px !important;
              border: none !important;
              box-shadow: none !important;
              background: #ffffff !important;
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }
            #lista-r-printable-sheet table {
              width: 100% !important;
              border-collapse: collapse !important;
              font-size: 12.5px !important;
              line-height: 1.3 !important;
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }
            #lista-r-printable-sheet table.roster-main-table,
            #lista-r-printable-sheet > div > table:first-child {
              table-layout: fixed !important;
            }
            #lista-r-printable-sheet > div > table:first-child th:nth-child(1),
            #lista-r-printable-sheet > div > table:first-child td:nth-child(1) {
              width: 6% !important;
              text-align: center !important;
            }
            #lista-r-printable-sheet > div > table:first-child th:nth-child(2),
            #lista-r-printable-sheet > div > table:first-child td:nth-child(2) {
              width: 28% !important;
            }
            #lista-r-printable-sheet > div > table:first-child th:nth-child(3),
            #lista-r-printable-sheet > div > table:first-child td:nth-child(3) {
              width: 30% !important;
            }
            #lista-r-printable-sheet > div > table:first-child th:nth-child(4),
            #lista-r-printable-sheet > div > table:first-child td:nth-child(4) {
              width: 14% !important;
              text-align: center !important;
            }
            #lista-r-printable-sheet > div > table:first-child th:nth-child(5),
            #lista-r-printable-sheet > div > table:first-child td:nth-child(5) {
              width: 22% !important;
              text-align: center !important;
            }
            #lista-r-printable-sheet th,
            #lista-r-printable-sheet td {
              padding-top: 7px !important;
              padding-bottom: 7px !important;
              padding-left: 8px !important;
              padding-right: 8px !important;
            }
            #lista-r-printable-sheet > div > table:first-child th,
            #lista-r-printable-sheet > div > table:first-child td {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            #lista-r-printable-sheet tr {
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }
            .lista-r-firma-block {
              margin-top: 22mm !important;
            }
            .lista-r-sponsors-row {
              margin-top: 8mm !important;
              border-top: none !important;
            }
            .lista-r-hidden-divider {
              display: none !important;
              border: none !important;
              background: transparent !important;
            }
            @media print {
              html, body {
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
              }
            }
          </style>
        </head>
        <body class="bg-white">
          <div id="print-fit-wrapper" class="print-fit-wrapper">
            ${clone.outerHTML}
          </div>
          <script>
            function fitListaRToSinglePage() {
              const sheetEl = document.getElementById('lista-r-printable-sheet');
              if (!sheetEl) return;
              sheetEl.style.zoom = '1';
              sheetEl.style.transform = '';
              sheetEl.style.width = '100%';

              const maxHeightPx = 1060;
              const rect = sheetEl.getBoundingClientRect();
              if (rect.height > maxHeightPx) {
                const scale = Math.max(0.75, maxHeightPx / rect.height);
                if ('zoom' in sheetEl.style) {
                  sheetEl.style.zoom = scale.toFixed(4);
                } else {
                  sheetEl.style.transform = 'scale(' + scale.toFixed(4) + ')';
                  sheetEl.style.transformOrigin = 'top left';
                  sheetEl.style.width = (100 / scale).toFixed(2) + '%';
                }
              }
            }
            window.addEventListener('beforeprint', fitListaRToSinglePage);
            window.onload = function() {
              const runPrint = function() {
                fitListaRToSinglePage();
                setTimeout(function() {
                  fitListaRToSinglePage();
                  window.print();
                }, 400);
              };
              if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(runPrint);
              } else {
                runPrint();
              }
            };
          <\/script>
        </body>
        </html>
      `);
      win.document.close();
    }

    function removePlayer(idx) {
      if (!dbState.roster[idx]) return;
      if (!confirm(`Rimuovere ${dbState.roster[idx].nome} dal roster?`)) return;
      dbState.roster.splice(idx, 1);
      saveToDatabase('roster');
      renderRegiaRosterEditor();
      renderRosterMain();
    }