import Button from '../UI/Button';

export default function FeatureCard({ icon, title, description, accuracy, useCases, onClick, color = 'primary' }) {
  const toneClass = color === 'secondary' ? 'bg-blue-500/20 text-cyan-200' : 'bg-cyan-500/20 text-cyan-200';

  return (
    <article className="card-shell group relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${toneClass}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
      <span className="mt-4 inline-flex w-fit rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
        {accuracy}
      </span>
      <ul className="mt-4 flex-1 list-disc space-y-2 pl-5 text-sm text-slate-300">
        {useCases.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button onClick={onClick} className="mt-5">Analyze {'->'}</Button>
    </article>
  );
}
