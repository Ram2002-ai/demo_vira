import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import { useToast } from '../components/UI/Toast';

export default function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const { notify } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    notify('Account created successfully.', 'success');
    navigate('/login');
  };

  return (
    <section className="section-space">
      <div className="container-page max-w-xl">
        <div className="card-shell">
          <p className="theme-chip">Get Started</p>
          <h1 className="theme-headline mt-4 text-3xl font-bold tracking-tight">Create your Sentinel AI account</h1>
          <p className="mt-2 text-slate-300">Set up secure access for your fraud prevention team.</p>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <input
              placeholder="Full name"
              value={form.fullName}
              onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
              required
            />
            <input
              placeholder="Company name"
              value={form.company}
              onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
              required
            />
            <input
              type="email"
              placeholder="Work email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
            <input
              type="password"
              placeholder="Create password"
              minLength={8}
              value={form.password}
              onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              required
            />
            <Button type="submit" loading={loading} className="w-full">
              Sign Up
            </Button>
          </form>

          <p className="mt-5 text-sm text-slate-300">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-cyan-300 hover:text-cyan-200">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
