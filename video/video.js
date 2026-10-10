/* Neobligātas lokālas ērtības. Saturs ir lasāms bez šī faila. */
(() => {
  'use strict';
  document.documentElement.classList.add('has-js');
  const lesson = document.querySelector('[data-lesson]');
  if (!lesson) return;
  const status = document.querySelector('.action-status');
  const checks = [...lesson.querySelectorAll('[data-scene-check]')];
  const key = `eb-keramika:video:${lesson.dataset.lesson}:ainas`;
  let stored = {};
  try {
    const value = JSON.parse(localStorage.getItem(key) || '{}');
    if (value && typeof value === 'object' && !Array.isArray(value)) stored = value;
  } catch { /* Glabāšana nav obligāta. */ }
  const progress = () => {
    const el = document.querySelector('.scene-progress');
    if (el) el.textContent = `${checks.filter(c => c.checked).length} no ${checks.length} ainām atzīmētas kā nofilmētas.`;
  };
  checks.forEach(check => {
    check.checked = stored[check.dataset.sceneCheck] === true;
    check.addEventListener('change', () => {
      progress();
      try { localStorage.setItem(key, JSON.stringify(Object.fromEntries(checks.map(c => [c.dataset.sceneCheck, c.checked])))); }
      catch { if (status) status.textContent = 'Atzīmi var izmantot šajā lapā, bet pārlūks neļauj to saglabāt nākamajai reizei.'; }
    });
  });
  progress();
  document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => {
    document.body.dataset.print = button.dataset.print;
    window.print();
  }));
  window.addEventListener('afterprint', () => { delete document.body.dataset.print; });
  document.querySelector('[data-copy-quotes]')?.addEventListener('click', async () => {
    const text = [...lesson.querySelectorAll('.scene-card')].map(scene => `${scene.querySelector('h3').textContent.trim()}\n${scene.querySelector('.scene-quote').textContent.trim()}`).join('\n\n');
    try { await navigator.clipboard.writeText(text); status.textContent = 'Runājamais teksts nokopēts ainu secībā.'; }
    catch { status.textContent = 'Kopēšana šeit nav pieejama. Iezīmē tekstu ainu kartītēs vai izdrukā stundas plānu.'; }
  });
})();
