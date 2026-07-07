const ITEMS = [
  "< 45s Review Time",
  "0 Configuration",
  "Powered by LLaMA 3.3",
  "Groq LPU Speed",
  "100% Serverless",
  "GitHub Actions Native",
  "Exact Line Numbers",
  "Auto Suggestions",
];

export const Marquee = () => {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section
      data-testid="marquee-section"
      className="relative border-y border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black overflow-hidden transition-colors duration-300"
    >
      {/* fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-black to-transparent transition-colors duration-300" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-black to-transparent transition-colors duration-300" />

      <div className="flex animate-marquee whitespace-nowrap py-5">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="mx-8 flex items-center gap-8 font-mono text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500"
          >
            <span className="text-orange-500">◆</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};