import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-x-0 top-0 -z-[1] h-40 bg-gradient-to-b from-indigo-100/70 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-semibold">Ready to raise your security posture?</h3>
          <p className="mt-2 text-white/70 max-w-2xl">Book a 30‑minute demo with our security engineers and get a tailored roadmap for your environment.</p>

          <form className="mt-6 grid gap-3 sm:grid-cols-3">
            <input type="text" placeholder="Your name" className="col-span-1 sm:col-span-1 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <input type="email" placeholder="Work email" className="col-span-1 sm:col-span-1 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <button type="submit" className="col-span-1 rounded-md bg-white text-slate-900 px-3 py-2 text-sm font-semibold hover:bg-white/90">Request demo</button>
          </form>
          <p className="mt-3 text-xs text-white/60">By requesting a demo, you agree to our privacy policy and acceptable use.</p>
        </div>
      </div>
    </section>
  );
}
