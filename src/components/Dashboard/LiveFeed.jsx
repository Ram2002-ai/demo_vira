import { useWebSocket } from '../../hooks/useWebSocket';

export default function LiveFeed() {
  const { messages } = useWebSocket();

  return (
    <div className="card-shell p-6">
      <h4 className="text-lg font-bold tracking-tight text-white">Live Fraud Alerts</h4>
      <ul className="mt-4 max-h-56 space-y-2 overflow-auto text-sm">
        {messages.length === 0 && <li className="text-slate-300">Waiting for real-time events...</li>}
        {messages.map((item, idx) => (
          <li key={`${item.timestamp}-${idx}`} className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-200">
            <strong>{item.type || 'Alert'}:</strong> {item.message || 'Event received'}
          </li>
        ))}
      </ul>
    </div>
  );
}
