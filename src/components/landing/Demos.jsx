import { PlayCircle, Github, Server } from "lucide-react";

export const Demos = () => {
  return (
    <section
      id="demos"
      data-testid="demos-section"
      className="relative py-24 md:py-32 bg-white dark:bg-transparent transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-noise opacity-50 dark:opacity-100 mix-blend-overlay pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500 mb-4">
            // see it in action
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            From setup to <span className="text-orange-600 dark:text-orange-500">supercharged.</span>
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Watch how RepoReview works out of the box to deliver senior-level
            insights directly to your pull requests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <DemoCard
            title="The Reviewer in Action"
            subtitle="Automated, line-by-line analysis before you even ask."
            videoSrc="/major.mp4"
            icon={PlayCircle}
            id="major-demo"
          />
          <DemoCard
            title="GitHub Integration"
            subtitle="Zero-dashboards. Seamlessly integrated into your CI/CD."
            videoSrc="/MAJOR 2.mp4"
            icon={Github}
            id="github-demo"
          />
        </div>
      </div>
    </section>
  );
};

const DemoCard = ({ title, subtitle, videoSrc, icon: Icon, id }) => (
  <div
    data-testid={`demo-card-${id}`}
    className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0f0f0f] shadow-sm transition-all duration-300 hover:border-orange-500/40"
  >
    {/* Header */}
    <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-200 dark:border-white/5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-orange-200 dark:border-orange-500/30 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>

    {/* Video Container */}
    <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-orange-600/10 dark:bg-orange-600/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10" />
      <video
        className="w-full h-full object-cover rounded-b-xl"
        controls
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);
