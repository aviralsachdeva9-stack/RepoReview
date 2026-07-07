import { Zap, Server, Crosshair } from "lucide-react";

const FEATURES = [
  {
    id: "lightning",
    icon: Zap,
    tag: "01 · Speed",
    title: "Lightning Fast",
    desc: "Groq's Language Processing Unit delivers tokens up to 10× faster than legacy GPUs. Reviews finish before CI wakes up.",
    metric: "500+ tok/s",
    metricLabel: "sustained throughput",
  },
  {
    id: "serverless",
    icon: Server,
    tag: "02 · Infra",
    title: "Serverless Architecture",
    desc: "No servers to babysit, no webhooks to wire. 100% native to GitHub Actions — the reviewer boots on every PR and vanishes when done.",
    metric: "0",
    metricLabel: "servers to manage",
  },
  {
    id: "precision",
    icon: Crosshair,
    tag: "03 · Accuracy",
    title: "Precision Analysis",
    desc: "Identifies bugs, security risks, and anti-patterns — then suggests code replacements pinned to the exact line number.",
    metric: "line-accurate",
    metricLabel: "suggested fixes",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 md:py-32 bg-white dark:bg-transparent transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500">
            // features
          </div>
          <h2
            data-testid="features-heading"
            className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            Built for engineers who ship at
            <span className="text-orange-600 dark:text-orange-500"> ludicrous speed.</span>
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Three things. Done well. Nothing else in the way.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, tag, title, desc, metric, metricLabel, id }) => (
  <div
    data-testid={`feature-card-${id}`}
    className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0f0f0f] p-8 transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1"
  >
    {/* Hover glow */}
    <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-orange-100 dark:bg-orange-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative flex items-start justify-between">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-orange-200 dark:border-orange-500/30 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
        {tag}
      </span>
    </div>

    <h3 className="relative mt-8 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
      {title}
    </h3>
    <p className="relative mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>

    <div className="relative mt-8 flex items-baseline gap-3 border-t border-slate-200 dark:border-white/5 pt-6 transition-colors duration-300">
      <div className="font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
        {metric}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
        {metricLabel}
      </div>
    </div>
  </div>
);