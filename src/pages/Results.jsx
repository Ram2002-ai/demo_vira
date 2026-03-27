import { useMemo, useState } from 'react';
import ResultCard from '../components/Cards/ResultCard';
import { getHistory } from '../services/storage';
import { formatDate } from '../utils/formatters';

export default function Results() {
  const history = useMemo(() => getHistory(), []);
  const [selected, setSelected] = useState(history[0] || null);

  return (
    <section className="section-space">
      <div className="container-page">
        <h1 className="theme-headline text-3xl font-bold tracking-tight">Analysis History</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="card-shell overflow-x-auto p-0">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="bg-white/5 text-slate-300">
                <tr>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Input Preview</th>
                  <th className="px-4 py-3">Risk</th>
                  <th className="px-4 py-3">Confidence</th>
                  <th className="px-4 py-3">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {history.map((row) => (
                  <tr key={row.id} className="cursor-pointer border-t border-white/10 hover:bg-white/5" onClick={() => setSelected(row)}>
                    <td className="px-4 py-3 font-medium">{row.type}</td>
                    <td className="max-w-[220px] truncate px-4 py-3 text-slate-300">{row.preview}</td>
                    <td className="px-4 py-3">{row.risk}</td>
                    <td className="px-4 py-3">{row.confidence}%</td>
                    <td className="px-4 py-3 text-slate-400">{formatDate(row.timestamp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {history.length === 0 && <p className="p-4 text-slate-300">No analysis history yet.</p>}
          </div>
          <ResultCard result={selected} />
        </div>
      </div>
    </section>
  );
}
