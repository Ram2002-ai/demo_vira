import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CookieConsent from './components/Layout/CookieConsent';
import ToastProvider from './components/UI/Toast';
import Home from './pages/Home';
import Analyzer from './pages/Analyzer';
import Results from './pages/Results';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen text-slate-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyzer" element={<Analyzer />} />
            <Route path="/results" element={<Results />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </ToastProvider>
  );
}
