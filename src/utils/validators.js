export function validateAnalyzerInput(type, payload) {
  if (type === 'SMS' && (!payload.message || payload.message.trim().length < 5)) {
    return 'Please provide a valid SMS message.';
  }
  if (type === 'UPI') {
    if (!Number.isFinite(payload.amount) || payload.amount <= 0) return 'Enter a valid amount.';
    if (!Number.isFinite(payload.frequency) || payload.frequency <= 0) return 'Enter a valid frequency.';
  }
  if ((type === 'VOICE' || type === 'DEEPFAKE') && !payload.file) {
    return 'Please upload a file.';
  }
  return null;
}
