import { useState } from 'react';
import Button from '../UI/Button';

export default function SMSForm({ onSubmit, loading }) {
  const [message, setMessage] = useState('');

  return (
    <form
      className="card-shell space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ message });
      }}
    >
      <h3 className="text-lg font-bold tracking-tight text-white">SMS Analysis</h3>
      <textarea rows={8} placeholder="Paste SMS content..." value={message} onChange={(e) => setMessage(e.target.value)} required />
      <Button type="submit" loading={loading}>Analyze SMS</Button>
    </form>
  );
}
