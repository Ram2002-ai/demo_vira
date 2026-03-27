import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import { useToast } from '../components/UI/Toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { notify } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
    notify('Login successful.', 'success');
    navigate('/analyzer');
  };

  return (
    <section className="section-space">
      <div className="container-page max-w-xl">
        <div className="card-shell">
          <p className="theme-chip">Welcome Back</p>
          <h1 className="theme-headline mt-4 text-3xl font-bold tracking-tight">Login to Sentinel AI</h1>
          <p className="mt-2 text-slate-300">Securely access your fraud analysis workspace.</p>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" loading={loading} className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-5 text-sm text-slate-300">
            New to Sentinel AI?{' '}
            <Link to="/signup" className="font-semibold text-cyan-300 hover:text-cyan-200">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
