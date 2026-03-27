import Spinner from './Spinner';

export default function Button({ children, loading, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}
