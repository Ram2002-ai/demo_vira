export default function Documentation() {
  return (
    <section className="section-space">
      <div className="container-page max-w-4xl">
        <h1 className="theme-headline text-3xl font-bold tracking-tight">Documentation</h1>
        <div className="mt-6 space-y-4 text-slate-200">
          <div className="card-shell">
            <h2 className="text-lg font-bold text-white">Endpoints</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
              <li><code>POST /analyze-sms</code> - Body: message</li>
              <li><code>POST /analyze-upi</code> - Body: amount, frequency</li>
              <li><code>POST /analyze-voice</code> - FormData: audio file</li>
              <li><code>POST /analyze-deepfake</code> - FormData: media file</li>
            </ul>
          </div>
          <div className="card-shell">
            <h2 className="text-lg font-bold text-white">How It Works</h2>
            <p className="mt-2 text-sm text-slate-300">
              Input signals are preprocessed, scored by modality-specific models, and combined into a calibrated risk engine that returns confidence and explanation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
