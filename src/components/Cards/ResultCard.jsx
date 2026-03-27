import RiskGauge from '../Dashboard/RiskGauge';

const riskClass = {
  HIGH: 'bg-red-500/20 text-red-300',
  MEDIUM: 'bg-yellow-500/20 text-yellow-300',
  LOW: 'bg-green-500/20 text-green-300',
};

export default function ResultCard({ result }) {
  if (!result) {
    return <div className="card-shell h-full text-slate-300">Run an analysis to view results here.</div>;
  }

  return (
    <div className="card-shell h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight text-white">Analysis Result</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${riskClass[result.risk] || 'bg-white/10 text-slate-200'}`}>
          {result.risk}
        </span>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-[140px_1fr] md:items-center">
        <RiskGauge confidence={result.confidence} risk={result.risk} />
        <div>
          <p className="text-sm text-slate-300">Confidence</p>
          <p className="text-3xl font-bold tracking-tight text-white">{result.confidence}%</p>
        </div>
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
        {result.explanation || 'No explanation provided by model.'}
      </div>
      <p className="mt-4 text-xs text-slate-400">{new Date(result.timestamp).toLocaleString()}</p>
    </div>
  );
}
