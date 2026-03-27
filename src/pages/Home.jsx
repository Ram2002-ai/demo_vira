import { Link, useNavigate } from 'react-router-dom';
import FeatureCard from '../components/Cards/FeatureCard';
import MetricCard from '../components/Cards/MetricCard';
import Button from '../components/UI/Button';

const features = [
  {
    key: 'sms',
    title: 'SMS Fraud Detection',
    description: 'Detect phishing links, impersonation tactics, and social engineering patterns in real time.',
    accuracy: 'Accuracy: 99.2%',
    useCases: ['Banking alerts validation', 'OTP scam detection', 'Smishing prevention'],
    icon: 'SMS',
  },
  {
    key: 'upi',
    title: 'UPI Fraud Detection',
    description: 'Flag anomalies in payment behavior with dynamic thresholds and explainable outputs.',
    accuracy: 'Accuracy: 98.9%',
    useCases: ['Merchant abuse detection', 'Burst payment risk', 'Mule account protection'],
    icon: 'UPI',
  },
  {
    key: 'voice',
    title: 'Voice Fraud Detection',
    description: 'Analyze call artifacts and biometric mismatch signals to detect voice spoofing attacks.',
    accuracy: 'Accuracy: 98.6%',
    useCases: ['Call center verification', 'Vishing detection', 'Identity spoof alerts'],
    icon: 'VOC',
  },
  {
    key: 'deepfake',
    title: 'Deepfake Detection',
    description: 'Identify manipulated image/video media using temporal and spectral consistency checks.',
    accuracy: 'Accuracy: 99.0%',
    useCases: ['Executive impersonation', 'KYC media screening', 'Synthetic media moderation'],
    icon: 'DF',
  },
];

const faqs = [
  {
    q: 'How quickly does Sentinel AI process fraud requests?',
    a: 'Most API requests return in under 2 seconds, with media-heavy analysis completed asynchronously when needed.',
  },
  {
    q: 'Can Sentinel AI integrate with existing systems?',
    a: 'Yes, Sentinel AI provides REST APIs and WebSocket events for easy integration into enterprise workflows.',
  },
  {
    q: 'Does the platform provide explainable outputs?',
    a: 'Every prediction returns confidence, risk level, and model rationale to support investigator decisions.',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="section-space">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="theme-chip">Enterprise Fraud Intelligence</p>
            <h1 className="theme-headline mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Discover the True Power of AI Fraud Detection
            </h1>
            <p className="theme-subtle mt-5 max-w-2xl text-lg">
              Protect onboarding, payments, and communications with real-time SMS, UPI, Voice, and Deepfake analysis engineered for enterprise security teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-gradient-to-r from-cyan-500 to-primary-600 hover:opacity-95" onClick={() => navigate('/analyzer')}>
                Start Analyzing
              </Button>
              <button
                onClick={() => navigate('/documentation')}
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
              >
                See Case Study
              </button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <MetricCard title="Accuracy" value="99.2%" detail="Model precision at enterprise scale" />
              <MetricCard title="FAR" value="<5%" detail="Low false acceptance across channels" />
              <MetricCard title="FRR" value="0.8%" detail="Minimal friction for real users" />
            </div>
          </div>

          <div className="relative">
            <div className="card-shell relative overflow-hidden p-6">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-blue-500/25 blur-3xl" />
              <p className="text-sm font-semibold text-slate-300">Fraud Detection ROI Trend</p>
              <svg viewBox="0 0 620 260" className="mt-3 w-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path d="M0 220 L620 220" stroke="rgba(148,163,184,0.35)" />
                <path d="M0 40 L0 240" stroke="rgba(148,163,184,0.35)" />
                <path
                  className="hero-graph-line"
                  d="M20 205 C120 198, 140 150, 220 146 C290 140, 300 88, 380 94 C460 101, 500 55, 598 34"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="mt-4 grid grid-cols-7 gap-2">
                {[45, 64, 58, 74, 80, 86, 92].map((height, index) => (
                  <div key={height} className="flex h-20 items-end justify-center">
                    <div
                      className="bar-pulse w-4 rounded-full bg-gradient-to-t from-cyan-400/60 to-blue-500/90"
                      style={{ height: `${height}%`, animationDelay: `${index * 120}ms` }}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-400">$3.2M annual fraud loss prevention potential</p>
            </div>

            <div className="floating-card absolute -left-3 top-8 rounded-2xl border border-white/20 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 backdrop-blur">
              Accuracy 99.2%
            </div>
            <div className="floating-card absolute -right-2 bottom-8 rounded-2xl border border-white/20 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 backdrop-blur [animation-delay:400ms]">
              FAR {'<'}5%
            </div>
            <div className="floating-card absolute left-16 bottom-[-12px] rounded-2xl border border-white/20 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 backdrop-blur [animation-delay:800ms]">
              FRR 0.8%
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-page">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-slate-400">Trusted By</p>
          <div className="grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((x) => (
              <div key={x} className="h-14 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <h2 className="theme-headline text-3xl font-bold tracking-tight">Our Technology</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((item) => (
              <FeatureCard key={item.key} {...item} color="primary" onClick={() => navigate('/analyzer')} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            'Award-winning AI technology',
            'Effortless integration',
            'Full-spectrum fraud defense',
          ].map((item) => (
            <div key={item} className="card-shell p-6 text-center font-semibold text-white">{item}</div>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="container-page max-w-4xl">
          <h2 className="theme-headline text-3xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="card-shell p-5">
                <summary className="cursor-pointer font-semibold text-white">{item.q}</summary>
                <p className="mt-3 text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page card-shell flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h3 className="theme-headline text-2xl font-bold tracking-tight">Protect Your Business</h3>
            <p className="mt-2 text-slate-300">Get enterprise onboarding and dedicated fraud intelligence support.</p>
            <div className="mt-3 flex items-center justify-center gap-4 text-sm md:justify-start">
              <Link to="/terms" className="text-cyan-300 hover:text-cyan-200">Terms & Conditions</Link>
              <Link to="/privacy" className="text-cyan-300 hover:text-cyan-200">Privacy Policy</Link>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
    </>
  );
}
