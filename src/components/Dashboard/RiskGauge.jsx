export default function RiskGauge({ confidence = 0, risk = 'LOW' }) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, confidence));
  const offset = circumference - (clamped / 100) * circumference;

  const color = risk === 'HIGH' ? '#ef4444' : risk === 'MEDIUM' ? '#f59e0b' : '#22c55e';

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
      <defs>
        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r={radius} stroke="#e5e7eb" strokeWidth="10" fill="none" />
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="url(#gaugeGradient)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 60 60)"
      />
      <text x="60" y="66" textAnchor="middle" className="fill-gray-800 text-xl font-bold">
        {clamped}%
      </text>
    </svg>
  );
}
