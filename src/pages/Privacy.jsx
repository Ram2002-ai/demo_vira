export default function Privacy() {
  return (
    <section className="section-space">
      <div className="container-page max-w-4xl">
        <h1 className="theme-headline text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <div className="mt-6 space-y-4 text-slate-200">
          <div className="card-shell">
            <h2 className="text-lg font-bold text-white">Data Collection</h2>
            <p className="mt-2 text-sm text-slate-300">
              We collect only the data required to process fraud analysis requests, support security operations, and improve service quality.
            </p>
          </div>
          <div className="card-shell">
            <h2 className="text-lg font-bold text-white">Data Retention</h2>
            <p className="mt-2 text-sm text-slate-300">
              Data is retained according to customer agreements, legal obligations, and configurable retention settings.
            </p>
          </div>
          <div className="card-shell">
            <h2 className="text-lg font-bold text-white">Security Controls</h2>
            <p className="mt-2 text-sm text-slate-300">
              Sentinel AI uses role-based access, transport encryption, and monitoring controls to protect customer information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
