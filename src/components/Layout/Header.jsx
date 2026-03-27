import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/analyzer', label: 'Analyzer' },
  { to: '/results', label: 'Results' },
  { to: '/documentation', label: 'Docs' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-white">
          Sentinel AI
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="hidden rounded-xl border border-cyan-300/25 bg-white/5 px-3 py-2 text-sm font-semibold text-cyan-200 hover:bg-white/10 md:inline-flex">
            Login
          </Link>
          <Link to="/signup" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
