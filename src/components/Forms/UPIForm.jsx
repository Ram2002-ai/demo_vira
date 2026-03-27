import { useState } from 'react';
import Button from '../UI/Button';

export default function UPIForm({ onSubmit, loading }) {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('');

  return (
    <form
      className="card-shell space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ amount: Number(amount), frequency: Number(frequency) });
      }}
    >
      <h3 className="text-lg font-bold tracking-tight text-white">UPI Analysis</h3>
      <input type="number" min="0" placeholder="Transaction amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input type="number" min="1" placeholder="Transaction frequency (24h)" value={frequency} onChange={(e) => setFrequency(e.target.value)} required />
      <Button type="submit" loading={loading}>Analyze UPI</Button>
    </form>
  );
}
