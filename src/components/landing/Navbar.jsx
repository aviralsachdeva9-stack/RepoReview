import { Github, Terminal } from "lucide-react";
import ThemeToggle from "@/components/landing/ThemeToggle";

export const Navbar = () => {
  return (
    <nav
      data-testid="site-navbar"
      className="fixed top-0 inset-x-0 z-50 border-b border-black/5 dark:border-white/5 backdrop-blur-md bg-white/70 dark:bg-black/40 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-400 to-red-500 dark:from-orange-500 dark:to-red-600 shadow-[0_0_18px_rgba(234,88,12,0.3)] dark:shadow-[0_0_18px_rgba(234,88,12,0.5)]">
            <Terminal className="h-4 w-4 text-white dark:text-black" strokeWidth={2.5} />
          </span>
          <span className="font-mono text-sm tracking-tight text-slate-900 dark:text-white">
            RepoReview
            <span className="text-orange-600 dark:text-orange-500">.yml</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">
          <a
            href="#demos"
            data-testid="nav-demos"
            className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
          >
            Demos
          </a>
          <a
            href="#features"
            data-testid="nav-features"
            className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
          >
            Features
          </a>
          <a
            href="#install"
            data-testid="nav-install"
            className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
          >
            Install
          </a>
          <a
            href="#team"
            data-testid="nav-team"
            className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
          >
            Team
          </a>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://github.com/marketplace"
            target="_blank"
            rel="noreferrer"
            data-testid="nav-github-btn"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-4 py-2 text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-white hover:border-orange-500/50 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all"
          >
            <Github className="h-3.5 w-3.5" />
            Get Action
          </a>
        </div>
      </div>
    </nav>
  );
};