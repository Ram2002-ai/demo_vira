export default function MetricCard({ title, value, detail }) {
  return (
    <div className="card-shell p-6">
      <p className="text-sm text-slate-300">{title}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{detail}</p>
    </div>
  );
}
