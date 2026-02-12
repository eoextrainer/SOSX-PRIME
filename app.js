// SPA Navigation and Rendering
const app = document.getElementById('app');

const state = {
  page: 'home',
  error: null
};

function render() {
  try {
    app.innerHTML = `
      <header class="header">
        <div class="header-title">Eternelles</div>
        <div class="header-date">Dimanche 8 Mars 2026, 13h - 20h</div>
        <div class="header-location">2 Rue de Saint-Gobain, 37700 Saint-Pierre-des-Corps</div>
      </header>
      <section class="hero">
        <div class="hero-title">Journée Internationale des Droits des Femmes</div>
        <div class="hero-desc">Un événement unique pour célébrer la grandeur, la beauté, la sagesse et la diversité des femmes de tous horizons.</div>
        <button class="cta-btn" onclick="navigate('rsvp')">Je participe !</button>
      </section>
      <main class="main-content">
        ${renderPage(state.page)}
      </main>
      <nav class="bottom-nav">
        <button class="nav-btn${state.page==='home' ? ' active' : ''}" onclick="navigate('home')">
          <span>🏠</span><span style="font-size:0.8rem;">Accueil</span>
        </button>
        <button class="nav-btn${state.page==='schedule' ? ' active' : ''}" onclick="navigate('schedule')">
          <span>🗓️</span><span style="font-size:0.8rem;">Programme</span>
        </button>
        <button class="nav-btn${state.page==='rsvp' ? ' active' : ''}" onclick="navigate('rsvp')">
          <span>💌</span><span style="font-size:0.8rem;">RSVP</span>
        </button>
        <button class="nav-btn${state.page==='info' ? ' active' : ''}" onclick="navigate('info')">
          <span>ℹ️</span><span style="font-size:0.8rem;">Infos</span>
        </button>
      </nav>
    `;
  } catch (err) {
    handleError(err);
  }
}

function renderPage(page) {
  switch(page) {
    case 'home':
      return `
        <div class="card">
          <div class="card-title">À propos de l'événement</div>
          <div class="card-content">
            Rejoignez-nous pour une journée festive avec des activités de basketball, des spectacles de danse, et des défilés de mode. Ouvert à toutes et tous !
          </div>
        </div>
        <div class="card">
          <div class="card-title">Thèmes principaux</div>
          <div class="card-content">
            <ul>
              <li>Activités ludiques autour du basketball</li>
              <li>Danses et spectacles</li>
              <li>Défilés de mode</li>
            </ul>
          </div>
        </div>
      `;
    case 'schedule':
      return `
        <div class="card">
          <div class="card-title">Programme</div>
          <div class="card-content">
            <ul>
              <li>13h00 - Accueil & Ouverture</li>
              <li>13h30 - Ateliers Basketball</li>
              <li>15h00 - Spectacles de danse</li>
              <li>16h30 - Défilé de mode</li>
              <li>18h00 - Remise des prix</li>
              <li>19h00 - Clôture festive</li>
            </ul>
          </div>
        </div>
      `;
    case 'rsvp':
      return `
        <div class="card">
          <div class="card-title">Confirmez votre présence</div>
          <div class="card-content">
            <form id="rsvp-form" onsubmit="submitRSVP(event)">
              <input type="text" name="name" placeholder="Votre nom" required style="width:100%;margin-bottom:0.5rem;padding:0.5rem;border-radius:8px;border:1px solid #D1B3C4;" />
              <input type="email" name="email" placeholder="Votre email" required style="width:100%;margin-bottom:0.5rem;padding:0.5rem;border-radius:8px;border:1px solid #D1B3C4;" />
              <button class="cta-btn" type="submit">Envoyer</button>
            </form>
            <div id="rsvp-success" style="display:none;color:#2D1E2F;margin-top:1rem;">Merci pour votre inscription !</div>
          </div>
        </div>
      `;
    case 'info':
      return `
        <div class="card">
          <div class="card-title">Informations pratiques</div>
          <div class="card-content">
            <ul>
              <li>Adresse : 2 Rue de Saint-Gobain, 37700 Saint-Pierre-des-Corps</li>
              <li>Date : Dimanche 8 Mars 2026</li>
              <li>Heure : 13h - 20h</li>
              <li>Entrée gratuite, tout public</li>
            </ul>
          </div>
        </div>
      `;
    default:
      return '';
  }
}

function navigate(page) {
  state.page = page;
  render();
}

window.navigate = navigate;

function submitRSVP(event) {
  event.preventDefault();
  document.getElementById('rsvp-form').style.display = 'none';
  document.getElementById('rsvp-success').style.display = 'block';
}
window.submitRSVP = submitRSVP;

function handleError(err) {
  state.error = err;
  app.innerHTML = `<div style="color:red;padding:2rem;text-align:center;">Une erreur est survenue : ${err.message}</div>`;
  // Self-healing: try to reload after 2s
  setTimeout(() => {
    state.error = null;
    render();
  }, 2000);
}

// Initial render
render();
