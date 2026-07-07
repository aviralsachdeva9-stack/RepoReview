import { Github, Linkedin, Sparkles, ArrowUpRight } from "lucide-react";

const MEMBERS = [
  {
    id: "aviral",
    name: "Aviral Sachdeva",
    role: "Builder · GitHub Action",
    github: "https://github.com/aviralsachdeva9-stack",
    linkedin: "https://www.linkedin.com/in/aviral-sachdeva-202289265/",
    handle: "aviralsachdeva9-stack",
  },
  {
    id: "krishan",
    name: "Krishan Kant Sharma",
    role: "Builder · Systems & UX",
    github: null,
    linkedin: "https://www.linkedin.com/in/krishan-kant-sharma/",
    handle: "krishan-kant-sharma",
  },
];

export const Footer = () => {
  return (
    <footer
      id="team"
      data-testid="site-footer"
      className="relative border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black py-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500">
              // RepoReview
            </div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
              A love letter to fast pull requests,
              <br />
              <span className="text-slate-500">
                shipped by Team Decoders.
              </span>
            </h3>
            <div
              data-testid="footer-team-badge"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-100 dark:bg-orange-500/10 px-3 py-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
                Team Decoders · 2026
              </span>
            </div>
          </div>

          {/* Team members */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 mb-5">
              // the team
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {MEMBERS.map((m) => (
                <MemberCard key={m.id} {...m} />
              ))}
            </div>

            {/* Sublinks */}
            <div className="mt-8 grid grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <div className="uppercase tracking-widest text-slate-500 mb-3">
                  Product
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>
                    <a
                      href="#features"
                      data-testid="footer-features-link"
                      className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      data-testid="footer-pricing-link"
                      className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#install"
                      data-testid="footer-install-link"
                      className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      Install
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/marketplace"
                      target="_blank"
                      rel="noreferrer"
                      data-testid="footer-marketplace-link"
                      className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      Marketplace →
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="uppercase tracking-widest text-slate-500 mb-3">
                  Repo
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <Github className="h-3.5 w-3.5" />
                    <a
                      href="https://github.com/aviralsachdeva9-stack/RepoReview"
                      target="_blank"
                      rel="noreferrer"
                      data-testid="footer-github-link"
                      className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      RepoReview
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span className="text-slate-500 dark:text-slate-400">v1.0.0 · MIT</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200 dark:border-white/5 pt-6 transition-colors duration-300">
          <div className="font-mono text-[11px] text-slate-500">
            © {new Date().getFullYear()} Team Decoders — All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-slate-500">
            Built with <span className="text-orange-600 dark:text-orange-400">Groq LPU</span> +{" "}
            <span className="text-orange-600 dark:text-orange-400">LLaMA 3.3</span> · Runs on GitHub
            Actions
          </div>
        </div>
      </div>
    </footer>
  );
};

const MemberCard = ({ id, name, role, github, linkedin, handle }) => {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      data-testid={`team-member-${id}`}
      className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f0f0f] p-5 transition-all hover:border-orange-500/40 hover:-translate-y-0.5"
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-orange-100 dark:bg-orange-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-orange-200 dark:border-orange-500/30 bg-gradient-to-br from-orange-100 to-red-50 dark:from-orange-500/20 dark:to-red-500/10 font-display text-lg font-bold text-orange-600 dark:text-orange-300">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display text-lg text-slate-900 dark:text-white truncate">{name}</div>
          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-orange-600/80 dark:text-orange-400/80">
            {role}
          </div>
          <div className="mt-1 font-mono text-[11px] text-slate-500 truncate">
            @{handle}
          </div>
          <div className="mt-3 flex items-center gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                data-testid={`team-${id}-github`}
                className="inline-flex items-center gap-1.5 rounded border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Github className="h-3 w-3" /> GitHub
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid={`team-${id}-linkedin`}
                className="inline-flex items-center gap-1.5 rounded border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-3 w-3" /> LinkedIn
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};