/* nav.js — sidebar logic for MGT2004 notes */

const SITE = {
  sessions: [
    {
      id: 's1', page: 'session1.html', dot: 'dot-s1',
      label: 'Session 1', title: 'Governance & the Board',
      topics: [
        { id: 's1-1',  text: '1.1  Why the Board Matters' },
        { id: 's1-2',  text: '1.2  Governance vs Management' },
        { id: 's1-3',  text: '1.3  Governance & Ownership' },
        { id: 's1-4',  text: '1.4  Director\'s Mindset' },
        { id: 's1-5',  text: '1.5  Legal Duties' },
        { id: 's1-6',  text: '1.6  Board Responsibilities' },
        { id: 's1-7',  text: '1.7  Composition & Trends' },
        { id: 's1-8',  text: '1.8  Board Committees' },
        { id: 's1-9',  text: '1.9  Purpose of the Corporation' },
        { id: 's1-10', text: '1.10 Performance Measurement' },
        { id: 's1-11', text: '1.11 CEO Compensation' },
      ]
    },
    {
      id: 's2', page: 'session2.html', dot: 'dot-s2',
      label: 'Session 2', title: 'Strategic Direction',
      topics: [
        { id: 's2-1', text: '2.1  Five-Stage Framework' },
        { id: 's2-2', text: '2.2  Vision, Mission & Values' },
        { id: 's2-3', text: '2.3  Setting Objectives' },
        { id: 's2-4', text: '2.4  Balanced Scorecard' },
        { id: 's2-5', text: '2.5  Strategy Levels' },
        { id: 's2-6', text: '2.6  Strategy Execution' },
        { id: 's2-7', text: '2.7  Board\'s Role in Strategy' },
      ]
    },
    {
      id: 's3', page: 'session3.html', dot: 'dot-s3',
      label: 'Session 3', title: 'Competitive Strategy',
      topics: [
        { id: 's3-1', text: '3.1  Strategic Offense' },
        { id: 's3-2', text: '3.2  Defensive Strategies' },
        { id: 's3-3', text: '3.3  First vs Late Mover' },
        { id: 's3-4', text: '3.4  M&A vs Organic Growth' },
        { id: 's3-5', text: '3.5  Vertical Integration' },
        { id: 's3-6', text: '3.6  Outsourcing & Alliances' },
        { id: 's3-7', text: '3.7  Strategic Overload' },
        { id: 's3-8', text: '3.8  Value Maps & Complements' },
        { id: 's3-9', text: '3.9  Case Study: Intel Corporation' },
      ]
    },
    {
      id: 's4', page: 'session4.html', dot: 'dot-s4',
      label: 'Session 4', title: 'International Strategy',
      topics: [
        { id: 's4-1', text: '4.1  Why Enter Foreign Markets' },
        { id: 's4-2', text: '4.2  Porter\'s Diamond' },
        { id: 's4-3', text: '4.3  Exchange Rate Risk' },
        { id: 's4-4', text: '4.4  Three Pre-Entry Questions' },
        { id: 's4-5', text: '4.5  Five Modes of Entry' },
        { id: 's4-6', text: '4.6  Three International Strategies' },
        { id: 's4-7', text: '4.7  Concentrate vs Disperse' },
        { id: 's4-8', text: '4.8  Government Policies' },
        { id: 's4-9', text: '4.9  Developing Countries' },
      ]
    }
  ]
};

function buildSidebar(currentPage) {
  // topbar
  const topbar = document.getElementById('topbar');

  const ham = document.createElement('button');
  ham.className = 'topbar-hamburger';
  ham.id = 'hamburger';
  ham.setAttribute('aria-label', 'Toggle menu');
  ham.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6">
    <line x1="2" y1="5" x2="16" y2="5"/><line x1="2" y1="9" x2="16" y2="9"/><line x1="2" y1="13" x2="16" y2="13"/>
  </svg>`;
  topbar.appendChild(ham);

  const ttitle = document.createElement('span');
  ttitle.className = 'topbar-title';
  ttitle.textContent = 'MGT2004 Advanced Business Cliches';
  topbar.appendChild(ttitle);

  const tcourse = document.createElement('span');
  tcourse.className = 'topbar-course';
  tcourse.textContent = 'UofT MMPA · Prof. Kevin Yousie';
  topbar.appendChild(tcourse);

  // overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  document.body.appendChild(overlay);

  // sidebar
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';

  // sidebar header
  //const hdr = document.createElement('div');
  //hdr.className = 'sidebar-header';
 // hdr.innerHTML = `
  //  <div class="sidebar-course-label">MGT2004</div>
  //  <div class="sidebar-course-title">Advanced Business Cliches</div>
  //`;
  //sidebar.appendChild(hdr);

  const nav = document.createElement('nav');
  nav.className = 'sidebar-nav';
  sidebar.appendChild(nav);

  // index link
  const idxLink = document.createElement('a');
  idxLink.href = 'index.html';
  idxLink.className = 'nav-index-link' + (currentPage === 'index.html' ? ' active' : '');
  idxLink.innerHTML = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="1" y="1" width="11" height="11" rx="1.5"/>
    <line x1="4" y1="4.5" x2="9" y2="4.5"/>
    <line x1="4" y1="6.5" x2="9" y2="6.5"/>
    <line x1="4" y1="8.5" x2="7" y2="8.5"/>
  </svg> Overview`;
  nav.appendChild(idxLink);

  const div1 = document.createElement('div');
  div1.className = 'sidebar-divider';
  nav.appendChild(div1);

  // session groups
  SITE.sessions.forEach(session => {
    const isCurrentPage = (currentPage === session.page);
    const group = document.createElement('div');
    group.className = 'nav-group';

    const btn = document.createElement('button');
    btn.className = 'nav-group-btn' + (isCurrentPage ? ' page-active' : '');
    btn.setAttribute('aria-expanded', isCurrentPage ? 'true' : 'false');
    btn.innerHTML = `
      <span class="nav-dot ${session.dot}"></span>
      <span class="nav-group-text">${session.label} · ${session.title}</span>
      <svg class="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6">
        <polyline points="2,4 6,8 10,4"/>
      </svg>`;
    group.appendChild(btn);

    const topicList = document.createElement('div');
    topicList.className = 'nav-topics' + (isCurrentPage ? ' open' : '');
    group.appendChild(topicList);

    session.topics.forEach(t => {
      const a = document.createElement('a');
      // anchor links on same page, full links on other pages
      a.href = isCurrentPage ? `#${t.id}` : `${session.page}#${t.id}`;
      a.className = 'nav-topic';
      a.textContent = t.text;
      topicList.appendChild(a);
    });

    // toggle
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      topicList.classList.toggle('open', !open);
    });

    nav.appendChild(group);
  });

  const div2 = document.createElement('div');
  div2.className = 'sidebar-divider';
  nav.appendChild(div2);

  // exam link
  const examLink = document.createElement('a');
  examLink.href = 'exam.html';
  examLink.className = 'nav-exam' + (currentPage === 'exam.html' ? ' active' : '');
  examLink.innerHTML = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="1.5" y="1" width="10" height="11" rx="1.5"/>
    <line x1="4" y1="4.5" x2="9" y2="4.5"/>
    <line x1="4" y1="6.5" x2="9" y2="6.5"/>
    <line x1="4" y1="8.5" x2="7" y2="8.5"/>
  </svg> Exam Prep & Glossary`;
  nav.appendChild(examLink);

  document.body.insertBefore(sidebar, document.body.firstChild);

  // hamburger toggle
  ham.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  // active anchor highlight on scroll
  if (currentPage !== 'index.html' && currentPage !== 'exam.html') {
    const anchors = document.querySelectorAll('.section[id]');
    const topicLinks = document.querySelectorAll('.nav-topic');

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          topicLinks.forEach(l => l.classList.remove('current'));
          const active = document.querySelector(`.nav-topic[href="#${e.target.id}"]`);
          if (active) active.classList.add('current');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    anchors.forEach(a => obs.observe(a));
  }
}

// 拖拽调整侧边栏宽度
const resizer = document.createElement('div');
resizer.style.cssText = `
  position: fixed;
  top: 0; bottom: 0;
  left: var(--sidebar-w);
  width: 4px;
  cursor: col-resize;
  z-index: 300;
`;
document.body.appendChild(resizer);

resizer.addEventListener('mousedown', (e) => {
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  const newW = Math.min(Math.max(e.clientX, 180), 480);
  document.documentElement.style.setProperty('--sidebar-w', newW + 'px');
  resizer.style.left = newW + 'px';
}

function stopResize() {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}
