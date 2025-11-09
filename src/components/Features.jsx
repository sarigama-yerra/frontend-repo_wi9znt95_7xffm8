import React from 'react';
import { ShieldCheck, Radar, Cloud, KeyRound } from 'lucide-react';

const cards = [
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Access',
    desc: 'Granular identity-first policies for users, devices, and services across your stack.'
  },
  {
    icon: Radar,
    title: 'Threat Detection',
    desc: 'AI-assisted anomaly detection and automated triage to stop attacks early.'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'Continuous posture management and drift alerts for multi-cloud environments.'
  },
  {
    icon: KeyRound,
    title: 'Encryption Everywhere',
    desc: 'Enterprise-grade encryption in transit and at rest with auditable keys.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Security without complexity</h2>
          <p className="mt-3 text-slate-600">Simple to deploy. Powerful when you need it. Built for modern teams.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-16 bg-indigo-600 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
