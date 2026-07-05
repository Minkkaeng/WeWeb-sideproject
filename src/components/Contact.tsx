import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-deep-black tracking-tighter mb-6">
          Let's create something <br/> extraordinary.
        </h2>
        <p className="text-gray-500 font-light mb-12">
          새로운 프로젝트에 대한 고민이 있으신가요? <br/> 공간에 떠오르는 창의적인 솔루션을 제안해 드립니다.
        </p>

        {status === 'success' && (
          <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium">
            Message sent. Thank you.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium">
            Message could not be sent. Please try again.
          </div>
        )}

        <form className="flex flex-col gap-4 max-w-md mx-auto text-left" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              maxLength={100}
              className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blood-coral/20 transition-all font-light"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              maxLength={200}
              className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blood-coral/20 transition-all font-light"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              maxLength={2000}
              className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blood-coral/20 transition-all font-light resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-4 px-8 py-4 bg-blood-coral text-white font-semibold rounded-xl shadow-floating hover:-translate-y-1 hover:shadow-lg transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </section>
  );
};
