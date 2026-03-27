import { useMemo, useState } from 'react';
import SMSForm from '../components/Forms/SMSForm';
import UPIForm from '../components/Forms/UPIForm';
import VoiceUpload from '../components/Forms/VoiceUpload';
import DeepfakeUpload from '../components/Forms/DeepfakeUpload';
import ResultCard from '../components/Cards/ResultCard';
import LiveFeed from '../components/Dashboard/LiveFeed';
import { useAnalytics } from '../hooks/useAnalytics';

const tabs = ['SMS', 'UPI', 'VOICE', 'DEEPFAKE'];

export default function Analyzer() {
  const [tab, setTab] = useState('SMS');
  const { loading, result, runAnalysis } = useAnalytics(tab);

  const formNode = useMemo(() => {
    if (tab === 'SMS') return <SMSForm loading={loading} onSubmit={({ message }) => runAnalysis({ message })} />;
    if (tab === 'UPI') return <UPIForm loading={loading} onSubmit={({ amount, frequency }) => runAnalysis({ amount, frequency })} />;
    if (tab === 'VOICE') return <VoiceUpload loading={loading} onSubmit={({ file }) => runAnalysis({ file })} />;
    return <DeepfakeUpload loading={loading} onSubmit={({ file }) => runAnalysis({ file })} />;
  }, [tab, loading, runAnalysis]);

  return (
    <section className="section-space">
      <div className="container-page">
        <h1 className="theme-headline text-3xl font-bold tracking-tight">Fraud Analyzer</h1>
        <p className="mt-2 text-slate-300">Run secure multimodal checks with explainable outputs and live alert signals.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                tab === item
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {formNode}
          <ResultCard result={result} />
        </div>
        <div className="mt-6">
          <LiveFeed />
        </div>
      </div>
    </section>
  );
}
