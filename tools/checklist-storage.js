(() => {
  "use strict";

  const PROFILE_KEY = "eb-keramika";
  const TABLE_NAME = "checklist_state";
  const LOCAL_STORAGE_KEY = `eb-keramika:${PROFILE_KEY}:tools-checklist`;
  const CONFIG = window.EB_KERAMIKA_SUPABASE || {};
  const scriptElement = document.currentScript;

  const SUPABASE_URL = normalizeUrl(
    CONFIG.url || scriptElement?.dataset.supabaseUrl || ""
  );
  const SUPABASE_ANON_KEY =
    CONFIG.anonKey || scriptElement?.dataset.supabaseAnonKey || "";

  function normalizeUrl(url) {
    return String(url).trim().replace(/\/+$/, "");
  }

  function hasSupabaseConfig() {
    return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
  }

  function getCheckboxes() {
    return Array.from(
      document.querySelectorAll('input[type="checkbox"][data-tool-id]')
    );
  }

  function readLocalState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");
      return Object.fromEntries(
        Object.entries(parsed).map(([toolId, checked]) => [
          toolId,
          Boolean(checked),
        ])
      );
    } catch (error) {
      console.warn("Neizdevās nolasīt lokāli saglabātās atzīmes.", error);
      return {};
    }
  }

  function writeLocalState(state) {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Neizdevās lokāli saglabāt kontrolsaraksta atzīmes.", error);
    }
  }

  function saveLocalToolState(toolId, checked) {
    const state = readLocalState();
    state[toolId] = checked;
    writeLocalState(state);
  }

  function applyLocalStateToCheckboxes(checkboxes, state, changedAfterLoad) {
    checkboxes.forEach((checkbox) => {
      const toolId = checkbox.dataset.toolId;

      if (!toolId || changedAfterLoad.has(toolId)) {
        return;
      }

      if (Object.prototype.hasOwnProperty.call(state, toolId)) {
        checkbox.checked = Boolean(state[toolId]);
      }
    });
  }

  function applySupabaseStateToCheckboxes(
    checkboxes,
    checkedToolIds,
    changedAfterLoad
  ) {
    checkboxes.forEach((checkbox) => {
      const toolId = checkbox.dataset.toolId;

      if (!toolId || changedAfterLoad.has(toolId)) {
        return;
      }

      checkbox.checked = checkedToolIds.has(toolId);
    });
  }

  function getCurrentCheckboxState(checkboxes) {
    return Object.fromEntries(
      checkboxes.map((checkbox) => [
        checkbox.dataset.toolId,
        Boolean(checkbox.checked),
      ])
    );
  }

  function getSupabaseHeaders(extraHeaders = {}) {
    return {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      ...extraHeaders,
    };
  }

  async function loadSupabaseCheckedToolIds() {
    const query = new URLSearchParams({
      select: "tool_id,checked",
      profile_key: `eq.${PROFILE_KEY}`,
    });
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?${query.toString()}`,
      {
        headers: getSupabaseHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error(`Supabase ielādes kļūda: ${response.status}`);
    }

    const rows = await response.json();
    return new Set(
      rows
        .filter((row) => row.checked === true)
        .map((row) => String(row.tool_id))
    );
  }

  async function saveSupabaseToolState(toolId, checked) {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?on_conflict=profile_key,tool_id`,
      {
        method: "POST",
        headers: getSupabaseHeaders({
          "Content-Type": "application/json",
          Prefer: "resolution=merge-duplicates,return=minimal",
        }),
        body: JSON.stringify({
          profile_key: PROFILE_KEY,
          tool_id: toolId,
          checked,
          updated_at: new Date().toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Supabase saglabāšanas kļūda: ${response.status}`);
    }
  }

  function bindCheckboxStorage(checkboxes, changedAfterLoad) {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const toolId = checkbox.dataset.toolId;

        if (!toolId) {
          return;
        }

        const checked = checkbox.checked;
        changedAfterLoad.add(toolId);
        saveLocalToolState(toolId, checked);

        if (!hasSupabaseConfig()) {
          return;
        }

        saveSupabaseToolState(toolId, checked).catch((error) => {
          console.warn("Neizdevās saglabāt atzīmi Supabase datubāzē.", error);
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const checkboxes = getCheckboxes();
    const changedAfterLoad = new Set();

    if (!checkboxes.length) {
      return;
    }

    applyLocalStateToCheckboxes(checkboxes, readLocalState(), changedAfterLoad);
    bindCheckboxStorage(checkboxes, changedAfterLoad);

    if (!hasSupabaseConfig()) {
      console.info(
        "Supabase konfigurācija nav norādīta. Kontrolsaraksts izmanto pārlūka lokālo atmiņu."
      );
      return;
    }

    try {
      const checkedToolIds = await loadSupabaseCheckedToolIds();
      applySupabaseStateToCheckboxes(
        checkboxes,
        checkedToolIds,
        changedAfterLoad
      );
      writeLocalState(getCurrentCheckboxState(checkboxes));
    } catch (error) {
      console.warn("Neizdevās ielādēt atzīmes no Supabase datubāzes.", error);
    }
  });
})();
