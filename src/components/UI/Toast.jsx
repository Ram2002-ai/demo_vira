import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ToastContext = createContext({ notify: () => {} });

export default function ToastProvider({ children }) {
  const [items, setItems] = useState([]);

  const notify = useCallback((message, type = 'error') => {
    const id = crypto.randomUUID();
    setItems((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }, 3500);
  }, []);

  const value = useMemo(() => ({ notify }), [notify]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-20 z-[60] space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`min-w-[240px] rounded-xl px-4 py-3 text-sm text-white shadow-lg ${item.type === 'error' ? 'bg-red-600' : 'bg-green-600'}`}
          >
            {item.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
