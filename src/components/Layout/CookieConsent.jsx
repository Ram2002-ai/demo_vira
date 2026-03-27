import { useEffect, useState } from 'react';

const KEY = 'sentinel_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(KEY);
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-white/15 bg-slate-950/90 p-4 text-white shadow-2xl backdrop-blur-xl md:left-auto md:w-[420px]">
      <p className="text-sm text-slate-200">We use cookies to improve security, analytics, and product performance.</p>
      <button
        onClick={() => {
          localStorage.setItem(KEY, 'accepted');
          setVisible(false);
        }}
        className="mt-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:opacity-95"
      >
        Accept
      </button>
    </div>
  );
}
