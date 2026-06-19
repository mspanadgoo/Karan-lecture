import './style.css';
import { pilots } from './data.js';

// ── State ──────────────────────────────────────────────
let current = 0;
const TOTAL = pilots.length + 4; // cover + pilots + karan + karanWhy + end

// ── Stars background ──────────────────────────────────
function createStars() {
  const container = document.createElement('div');
  container.className = 'stars';
  for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      --d:${(Math.random() * 4 + 2).toFixed(1)}s;
      --delay:${(Math.random() * 5).toFixed(1)}s;
      --max-op:${(Math.random() * 0.7 + 0.1).toFixed(2)};
    `;
    container.appendChild(s);
  }
  return container;
}

// ── Cover Slide ────────────────────────────────────────
function buildCoverSlide() {
  const slide = document.createElement('div');
  slide.className = 'slide slide-cover';
  slide.dataset.index = 0;

  slide.innerHTML = `
    <span class="cover-plane-icon">✈️</span>
    <h1 class="cover-title">Famous Pilots<br>of History</h1>
    <p class="cover-subtitle">A Journey Through Aviation History</p>
    <div class="cover-pills">
      <span class="cover-pill">✈️ 8 Amazing Pilots</span>
      <span class="cover-pill">🌍 3 Countries</span>
      <span class="cover-pill">⏳ 1903 – Today</span>
      <span class="cover-pill">🏆 Record Breakers</span>
    </div>
    <div class="cover-flags">
      <span title="Iran">🇮🇷</span>
      <span title="Germany">🇩🇪</span>
      <span title="United States">🇺🇸</span>
    </div>
    <div class="cover-student-card">
      <div class="cover-student-row">
        <span class="cover-student-label">👦 Presented by</span>
        <span class="cover-student-name">Karan Panadgoo</span>
      </div>
      <div class="cover-student-row">
        <span class="cover-student-label">👩‍🏫 Teacher</span>
        <span class="cover-student-name">Ms. Zahra Mirzapour</span>
      </div>
    </div>
    <button class="cover-start-btn" id="startBtn">
      Let's Start! 🚀
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  `;
  return slide;
}

// ── Karan Slide ────────────────────────────────────────
function buildKaranSlide() {
  const slide = document.createElement('div');
  slide.className = 'slide slide-karan';

  slide.innerHTML = `
    <div class="karan-left">
      <img src="/images/karan-panadgoo.PNG" alt="Karan Panadgoo" class="karan-photo" />
      <div class="karan-sparkles">
        <span>✨</span><span>⭐</span><span>✨</span>
      </div>
    </div>
    <div class="karan-right">
      <div class="karan-tag">🎤 And Now...</div>
      <h2 class="karan-title">Now Let's Talk<br>About <span class="karan-name-highlight">Me!</span> 😄</h2>

      <div class="karan-card">
        <div class="karan-info-row">✈️ <strong>Name:</strong> Karan Panadgoo</div>
        <div class="karan-info-row">🎂 <strong>Age:</strong> 8 years old</div>
        <div class="karan-info-row">👩‍🏫 <strong>Teacher:</strong> Ms. Zahra Mirzapour</div>
        <div class="karan-info-row">❤️ <strong>I love:</strong> Airplanes and flying!</div>
        <div class="karan-info-row">🌟 <strong>My dream:</strong> To be a pilot one day!</div>
      </div>

      <div class="karan-speech">
        <p>
          Hi! I'm <strong>Karan</strong>. I chose pilots for my talk because I think
          flying is the coolest thing in the world! 🌍
          One day I want to fly a plane too — just like the amazing pilots
          we learned about today. Thank you for watching! 🛩️
        </p>
      </div>

      <div class="karan-costume-note">
        🥸 Yes, that is a real mustache. Real pilots have mustaches. 😎
      </div>
    </div>
  `;
  return slide;
}

// ── Karan Why Slide ────────────────────────────────────
function buildKaranWhySlide() {
  const slide = document.createElement('div');
  slide.className = 'slide slide-karan-why';

  slide.innerHTML = `
    <div class="why-header">
      <div class="why-plane-deco">✈️</div>
      <div class="why-header-text">
        <div class="karan-tag" style="margin-bottom:10px;">💭 Karan Speaks!</div>
        <h2 class="why-main-title">My Big Love for Flying ❤️</h2>
      </div>
    </div>

    <div class="why-body">

      <!-- Section 1 -->
      <div class="why-section">
        <h3 class="why-section-title">🛩️ Why I Dream of Being a Pilot</h3>
        <div class="why-reasons">
          <div class="why-reason-card">
            <span class="why-emoji">🏔️</span>
            <p>When I fly in an airplane, I love looking down and seeing everything from way up high — buildings, oceans, mountains and tiny little cars!</p>
          </div>
          <div class="why-reason-card">
            <span class="why-emoji">🚀</span>
            <p>When I fly a super fast jet, I love zooming through the clouds and going on exciting missions in the sky!</p>
          </div>
          <div class="why-reason-card">
            <span class="why-emoji">🤝</span>
            <p>I love the idea of flying people safely to where they want to go. It feels really great when everyone trusts you as their pilot!</p>
          </div>
          <div class="why-reason-card">
            <span class="why-emoji">🌍</span>
            <p>As a pilot, I can travel to every country in the world and see so many amazing places. That sounds so cool to me!</p>
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="why-section">
        <h3 class="why-section-title">💺 What I Love About Airplanes</h3>
        <div class="why-reasons">
          <div class="why-reason-card">
            <span class="why-emoji">🔊</span>
            <p>I LOVE the sound of the airplane engine when it starts! It is super loud and powerful and it makes me feel so excited inside!</p>
          </div>
          <div class="why-reason-card">
            <span class="why-emoji">🪖</span>
            <p>I love wearing the pilot uniform with the hat and the badge. When I put it on, I really feel like a real pilot!</p>
          </div>
          <div class="why-reason-card">
            <span class="why-emoji">🌤️</span>
            <p>I love flying above the clouds. From up there the clouds look like fluffy white cotton candy — it is SO beautiful!</p>
          </div>
          <div class="why-reason-card">
            <span class="why-emoji">🏁</span>
            <p>Taking off is my favourite part! When the plane goes really fast on the runway and then lifts up — my heart jumps with joy every time!</p>
          </div>
        </div>
      </div>

    </div>
  `;
  return slide;
}

// ── Pilot Slide ────────────────────────────────────────
function buildPilotSlide(pilot, slideIndex) {
  const slide = document.createElement('div');
  slide.className = 'slide slide-pilot';
  slide.dataset.index = slideIndex;

  // Dynamic bg color based on pilot
  slide.style.background = `linear-gradient(135deg, ${pilot.color} 0%, #050a14 100%)`;

  slide.innerHTML = `
    <!-- Left panel -->
    <div class="pilot-left">
      <img
        class="pilot-portrait"
        src="${pilot.image}"
        alt="Portrait of ${pilot.name}"
        loading="lazy"
        onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'"
      />
      <div class="pilot-bg-overlay"></div>
      <div class="pilot-left-content">
        <div class="pilot-badge" style="color:${pilot.accentColor}; border-color:${pilot.accentColor}40;">
          ${pilot.badge}
        </div>
        <h2 class="pilot-name-big">${pilot.name}</h2>
        <p class="pilot-tagline">${pilot.tagline}</p>
      </div>
    </div>

    <!-- Right panel -->
    <div class="pilot-right">

      <!-- Meta chips -->
      <div class="pilot-meta">
        <div class="meta-chip">
          <span class="label">Born</span>${pilot.years}
        </div>
        <div class="meta-chip">
          <span class="label">Nation</span>${pilot.nationality}
        </div>
        <div class="meta-chip">
          <span class="label">Era</span>${pilot.era}
        </div>
      </div>

      <!-- Achievement banner -->
      <div class="achievement-banner" style="color:${pilot.accentColor}; border:1px solid ${pilot.accentColor}30;">
        <div class="ach-label">⭐ Greatest Achievement</div>
        <div class="ach-title">${pilot.achievement}</div>
        <div class="ach-detail">${pilot.achievementDetail}</div>
      </div>

      <!-- Bio -->
      <p class="pilot-bio">${pilot.bio}</p>

      <!-- Plane image -->
      <div class="plane-image-row">
        <img
          src="${pilot.planeImage}"
          alt="Aircraft associated with ${pilot.name}"
          loading="lazy"
          onerror="this.style.display='none'"
        />
        <div class="plane-caption">✈ ${pilot.planeCaption}</div>
      </div>

      <!-- Facts -->
      <div class="facts-section">
        <div class="facts-title">Key Facts</div>
        <ul class="facts-list">
          ${pilot.facts.map(f => `
            <li>
              <span class="fact-bullet" style="background:${pilot.accentColor};"></span>
              ${f}
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Quote -->
      <blockquote class="pilot-quote" style="border-color:${pilot.accentColor};">
        <p>"${pilot.quote}"</p>
        <span>${pilot.quoteAuthor}</span>
      </blockquote>

    </div>
  `;
  return slide;
}

// ── End Slide ──────────────────────────────────────────
function buildEndSlide(slideIndex) {
  const slide = document.createElement('div');
  slide.className = 'slide slide-end';
  slide.dataset.index = slideIndex;

  const chips = pilots.map(p => `
    <div class="pilot-grid-chip">
      <span>${p.badge.split(' ')[0]}</span>
      <span>${p.name}</span>
    </div>
  `).join('');

  slide.innerHTML = `
    <div class="end-icon">🌟</div>
    <h2 class="end-title">The Sky Is Not<br>The Limit!</h2>
    <p class="end-sub">
      Amazing job, Karan! 🎉<br>
      You learned about 7 incredible pilots who changed the world.
    </p>
    <div class="pilot-grid">${chips}</div>
    <div class="end-credit">
      <span>👦 <strong>Karan Panadgoo</strong></span>
      <span>👩‍🏫 Teacher: <strong>Ms. Zahra Mirzapour</strong></span>
    </div>
    <button class="restart-btn" id="restartBtn">
      ↩ Watch Again!
    </button>
  `;
  return slide;
}

// ── Navigation Bar ─────────────────────────────────────
function buildNavBar() {
  const nav = document.createElement('nav');
  nav.className = 'nav-bar';

  nav.innerHTML = `
    <div class="slide-counter" id="counter">01 / ${String(TOTAL).padStart(2,'0')}</div>

    <div class="dot-track" id="dotTrack">
      ${Array.from({length: TOTAL}, (_, i) =>
        `<button class="dot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Go to slide ${i+1}"></button>`
      ).join('')}
    </div>

    <div class="nav-btns">
      <button class="nav-btn" id="prevBtn" disabled aria-label="Previous slide">&#8592;</button>
      <button class="nav-btn" id="nextBtn" aria-label="Next slide">&#8594;</button>
    </div>
  `;
  return nav;
}

// ── Progress Bar ───────────────────────────────────────
function buildProgressBar() {
  const track = document.createElement('div');
  track.className = 'progress-bar-track';
  track.innerHTML = `<div class="progress-bar-fill" id="progressFill"></div>`;
  return track;
}

// ── Keyboard hint ──────────────────────────────────────
function buildKeyboardHint() {
  const hint = document.createElement('div');
  hint.className = 'keyboard-hint';
  hint.id = 'kbHint';
  hint.textContent = '← → Arrow keys to navigate';
  return hint;
}

// ── Navigate ───────────────────────────────────────────
function goTo(index, direction) {
  if (index < 0 || index >= TOTAL) return;

  const slides = document.querySelectorAll('.slide');
  const fromSlide = slides[current];
  const toSlide = slides[index];

  // Position the incoming slide off-screen using a class, not inline style
  const enterClass = direction === 'forward' ? 'enter-right' : 'enter-left';
  const exitClass  = direction === 'forward' ? 'exit-left'   : 'exit-right';

  // 1. Place incoming slide off-screen (no transition yet)
  toSlide.classList.add(enterClass);

  // 2. Force a reflow so the browser registers the starting position
  // eslint-disable-next-line no-unused-expressions
  toSlide.offsetHeight;

  // 3. Now trigger both transitions simultaneously
  fromSlide.classList.remove('active');
  fromSlide.classList.add(exitClass);
  toSlide.classList.remove(enterClass);
  toSlide.classList.add('active');

  // 4. Clean up exit class after transition completes
  setTimeout(() => fromSlide.classList.remove(exitClass), 600);

  current = index;
  updateUI();
}

function updateUI() {
  // Counter
  document.getElementById('counter').textContent =
    `${String(current + 1).padStart(2,'0')} / ${String(TOTAL).padStart(2,'0')}`;

  // Dots
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });

  // Buttons
  document.getElementById('prevBtn').disabled = current === 0;
  document.getElementById('nextBtn').disabled = current === TOTAL - 1;

  // Progress
  const pct = (current / (TOTAL - 1)) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
}

// ── Init ───────────────────────────────────────────────
function init() {
  const app = document.getElementById('app');

  // Stars
  app.appendChild(createStars());

  // Progress bar
  app.appendChild(buildProgressBar());

  // Slides wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'slides-wrapper';

  // Build all slides
  const coverSlide = buildCoverSlide();
  coverSlide.classList.add('active');
  wrapper.appendChild(coverSlide);

  pilots.forEach((pilot, i) => {
    wrapper.appendChild(buildPilotSlide(pilot, i + 1));
  });

  // Karan math slide — second to last
  wrapper.appendChild(buildKaranSlide());

  // Karan "why I love flying" slide
  wrapper.appendChild(buildKaranWhySlide());

  wrapper.appendChild(buildEndSlide(TOTAL - 1));
  app.appendChild(wrapper);

  // Nav bar
  const navBar = buildNavBar();
  app.appendChild(navBar);

  // Keyboard hint
  const kbHint = buildKeyboardHint();
  app.appendChild(kbHint);
  setTimeout(() => kbHint.classList.add('hidden'), 4000);

  // ── Event listeners ──
  document.getElementById('startBtn').addEventListener('click', () => goTo(1, 'forward'));
  document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1, 'backward'));
  document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1, 'forward'));

  document.getElementById('restartBtn')?.addEventListener
    ? null
    : document.addEventListener('click', (e) => {
        if (e.target.id === 'restartBtn') goTo(0, 'backward');
      });

  // Delegate for restartBtn (rendered later)
  app.addEventListener('click', (e) => {
    if (e.target.id === 'restartBtn') goTo(0, 'backward');
  });

  // Dot clicks
  document.getElementById('dotTrack').addEventListener('click', (e) => {
    const btn = e.target.closest('.dot');
    if (!btn) return;
    const i = parseInt(btn.dataset.i);
    goTo(i, i > current ? 'forward' : 'backward');
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1, 'forward');
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1, 'backward');
  });

  // Touch swipe
  let touchStartX = 0;
  app.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  app.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? goTo(current + 1, 'forward') : goTo(current - 1, 'backward');
    }
  });

  updateUI();
}

init();
