import { useCallback, useState } from 'react';
import { analyzeDeepfake, analyzeSMS, analyzeUPI, analyzeVoice } from '../services/api';
import { saveHistory } from '../services/storage';
import { useToast } from '../components/UI/Toast';
import { validateAnalyzerInput } from '../utils/validators';

export function useAnalytics(type) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { notify } = useToast();

  const runAnalysis = useCallback(
    async (payload) => {
      const issue = validateAnalyzerInput(type, payload);
      if (issue) {
        notify(issue);
        return;
      }

      setLoading(true);
      try {
        let response;
        if (type === 'SMS') response = await analyzeSMS(payload.message);
        else if (type === 'UPI') response = await analyzeUPI(payload.amount, payload.frequency);
        else if (type === 'VOICE') response = await analyzeVoice(payload.file);
        else response = await analyzeDeepfake(payload.file);

        const data = response.data || {};
        const normalized = {
          id: crypto.randomUUID(),
          type,
          risk: (data.risk || 'LOW').toUpperCase(),
          confidence: Number(data.confidence ?? 0),
          explanation: data.explanation || 'No explanation provided.',
          timestamp: data.timestamp || Date.now(),
          preview: payload.message || payload.file?.name || `${payload.amount || ''} / ${payload.frequency || ''}`,
        };

        setResult(normalized);
        saveHistory(normalized);
        notify('Analysis completed successfully.', 'success');
      } catch (error) {
        const message = error?.response?.data?.detail || error?.message || 'Analysis failed. Please try again.';
        notify(message);
      } finally {
        setLoading(false);
      }
    },
    [notify, type]
  );

  return { loading, result, runAnalysis };
}
