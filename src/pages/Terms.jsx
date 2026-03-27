export default function Terms() {
  return (
    <section className="section-space">
      <div className="container-page max-w-4xl">
        <h1 className="theme-headline text-3xl font-bold tracking-tight">Terms and Conditions</h1>
        <div className="mt-6 space-y-4 text-slate-200">
          <div className="card-shell">
            <h2 className="text-lg font-bold text-white">Use of Service</h2>
            <p className="mt-2 text-sm text-slate-300">
              Sentinel AI services are intended for lawful fraud prevention, risk analysis, and enterprise monitoring workflows.
            </p>
          </div>
          <div className="card-shell">
            <h2 className="text-lg font-bold text-white">Account Responsibility</h2>
            <p className="mt-2 text-sm text-slate-300">
              You are responsible for account credentials, access management, and all activity performed under your organization account.
            </p>
          </div>
          <div className="card-shell">
            <h2 className="text-lg font-bold text-white">Limitations</h2>
            <p className="mt-2 text-sm text-slate-300">
              Results are risk indicators and should be combined with investigator judgment and internal compliance controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
