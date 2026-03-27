import { useEffect, useState } from 'react';
import Button from '../UI/Button';

export default function VoiceUpload({ onSubmit, loading }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    if (!file) {
      setPreviewUrl('');
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <form
      className="card-shell space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (file) onSubmit({ file });
      }}
    >
      <h3 className="text-lg font-bold tracking-tight text-white">Voice Fraud Analysis</h3>
      <label className="block cursor-pointer rounded-xl border-2 border-dashed border-white/20 bg-white/5 p-6 text-center text-sm text-slate-300 hover:border-primary-500">
        <input className="hidden" type="file" accept="audio/*" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
        {file ? file.name : 'Drag and drop or click to upload audio'}
      </label>
      {previewUrl && (
        <audio controls className="w-full">
          <source src={previewUrl} />
          Your browser does not support audio preview.
        </audio>
      )}
      <Button type="submit" loading={loading} disabled={!file}>Analyze Voice</Button>
    </form>
  );
}
