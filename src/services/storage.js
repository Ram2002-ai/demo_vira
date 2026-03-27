const KEY = 'sentinel_analysis_history';

export function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveHistory(entry) {
  const prev = getHistory();
  const next = [entry, ...prev].slice(0, 100);
  localStorage.setItem(KEY, JSON.stringify(next));
}
