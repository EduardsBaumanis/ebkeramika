/* Personīgā inventāra atzīmes saglabājas tikai šajā pārlūkā. */
(() => {
  'use strict';
  const key = 'eb-keramika:eb-keramika:tools-checklist';
  const checks = [...document.querySelectorAll('[data-tool-id]')];
  const status = document.querySelector('.checklist-state');
  let state = {};
  try {
    const value = JSON.parse(localStorage.getItem(key) || '{}');
    if (value && typeof value === 'object' && !Array.isArray(value)) state = value;
  }
  catch { if (status) status.textContent = 'Iepriekšējās atzīmes nav pieejamas. Sarakstu vari izmantot un izdrukāt.'; }
  checks.forEach(check => {
    check.checked = state[check.dataset.toolId] === true;
    check.addEventListener('change', () => {
      state[check.dataset.toolId] = check.checked;
      try {
        localStorage.setItem(key, JSON.stringify(state));
        if (status) status.textContent = 'Atzīmes saglabātas šajā pārlūkā.';
      } catch {
        if (status) status.textContent = 'Pārlūks neļauj saglabāt atzīmes. Tās vari izmantot šajā lapā un izdrukā.';
      }
    });
  });
})();
