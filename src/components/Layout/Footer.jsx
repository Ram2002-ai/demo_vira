import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/60">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white">Sentinel AI</h3>
          <p className="mt-3 text-sm text-slate-300">Enterprise-grade multimodal fraud detection with explainable AI outputs.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Products</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>SMS Shield</li>
            <li>UPI Guard</li>
            <li>Voice Sentinel</li>
            <li>Deepfake Detector</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Case Studies</li>
            <li><Link to="/terms" className="text-cyan-300 hover:text-cyan-200">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="text-cyan-300 hover:text-cyan-200">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>support@sentinel-ai.com</li>
            <li>+91-00000-00000</li>
            <li>24/7 Enterprise Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
