import { useState } from 'react';
import Button from '../components/UI/Button';
import { useToast } from '../components/UI/Toast';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { notify } = useToast();

  return (
    <section className="section-space">
      <div className="container-page max-w-3xl">
        <h1 className="theme-headline text-3xl font-bold tracking-tight">Contact Us</h1>
        <form
          className="card-shell mt-6 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 800));
            setLoading(false);
            notify('Message sent. Our team will contact you soon.', 'success');
            e.currentTarget.reset();
          }}
        >
          <input placeholder="Full name" required />
          <input type="email" placeholder="Work email" required />
          <input placeholder="Company" required />
          <textarea rows={5} placeholder="How can we help?" required />
          <Button type="submit" loading={loading}>Submit Request</Button>
        </form>
      </div>
    </section>
  );
}
