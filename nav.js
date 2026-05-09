// shared nav - injected into each page
const NAV_ITEMS = [
  { href: 'index.html',   label: '🏠 Overview',   cls: '' },
  { href: 'session1.html', label: 'Session 1 · Governance',     cls: 'nav-s1' },
  { href: 'session2.html', label: 'Session 2 · Strategy',       cls: 'nav-s2' },
  { href: 'session3.html', label: 'Session 3 · Competition',    cls: 'nav-s3' },
  { href: 'session4.html', label: 'Session 4 · International',  cls: 'nav-s4' },
  { href: 'exam.html',     label: '📋 Exam Prep',               cls: 'nav-exam' },
];

function buildNav(activePage) {
  const topbar = document.getElementById('topbar');
  const brand = document.createElement('div');
  brand.className = 'topbar-brand';
  brand.textContent = 'MGT2004 · MMPA';
  topbar.appendChild(brand);

  const nav = document.createElement('nav');
  nav.className = 'topbar-nav';

  NAV_ITEMS.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    if (item.cls) a.classList.add(item.cls);
    if (item.href === activePage) a.classList.add('active');
    nav.appendChild(a);
  });

  topbar.appendChild(nav);
}
