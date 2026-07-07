import { useState } from "react";
import { ArrowUpRight, Copy, Check, Github, Zap } from "lucide-react";
import { toast } from "sonner";

const SETUP_YAML = `name: RepoReview
on:
  pull_request:
    types: [opened, synchronize]

permissions:
  pull-requests: write
  contents: read

jobs:
  code_review:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run LLaMA 3.3 Code Reviewer
        uses: aviralsachdeva9-stack/RepoReview@v1.0.0
        env:
          PR_NUMBER: \${{ github.event.pull_request.number }}
        with:
          groq_api_key: \${{ secrets.GROQ_API_KEY }}`;

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SETUP_YAML);
      setCopied(true);
      toast.success("Setup YAML copied to clipboard", {
        description: "Paste it into .github/workflows/ai-review.yml",
      });
      setTimeout(() => setCopied(false), 2200);
    } catch {
      toast.error("Copy failed", { description: "Please copy manually" });
    }
  };

  const scrollToInstall = () => {
    document.getElementById("install")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-transparent transition-colors duration-300"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-100 pointer-events-none" />
      <div className="glow-orb top-10 -left-24 h-[380px] w-[380px] bg-orange-200 dark:bg-orange-600 blur-3xl rounded-full absolute" />
      <div className="glow-orb bottom-0 right-0 h-[420px] w-[420px] bg-red-200 dark:bg-red-700 opacity-50 dark:opacity-25 blur-3xl rounded-full absolute" />
      <div className="absolute inset-0 bg-noise opacity-50 dark:opacity-100 mix-blend-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Badge */}
        <div
          data-testid="hero-badge"
          className="fade-up inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-50 dark:bg-orange-500/10 px-3 py-1 mb-8"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
          </span>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
            v1.0.0 · Powered by Groq LPU + LLaMA 3.3
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <h1
              data-testid="hero-headline"
              className="fade-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-slate-900 dark:text-white"
              style={{ animationDelay: "80ms" }}
            >
              Zero-config
              <br />
              <span className="text-slate-900 dark:text-white">code reviews</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 dark:from-orange-400 dark:via-orange-500 dark:to-red-600 bg-clip-text text-transparent">
                  in under 45s.
                </span>
                <span className="caret-blink ml-2 inline-block h-[0.9em] w-[6px] translate-y-1 bg-orange-600 dark:bg-orange-500 align-middle" />
              </span>
            </h1>

            <p
              data-testid="hero-subheadline"
              className="fade-up mt-8 max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              style={{ animationDelay: "160ms" }}
            >
              An autonomous AI reviewer that lives inside your GitHub Actions.
              Ships bug reports, suggested fixes, and exact line numbers on
              every pull request — before your coffee cools.
            </p>

            <div
              className="fade-up mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="https://github.com/marketplace"
                target="_blank"
                rel="noreferrer"
                data-testid="github-marketplace-cta"
                className="group inline-flex items-center gap-2 rounded-md bg-orange-600 hover:bg-orange-700 dark:hover:bg-orange-500 text-white px-6 py-3.5 font-medium transition-all shadow-[0_0_28px_rgba(234,88,12,0.2)] dark:shadow-[0_0_28px_rgba(234,88,12,0.35)] hover:shadow-[0_0_36px_rgba(234,88,12,0.3)] dark:hover:shadow-[0_0_36px_rgba(234,88,12,0.55)]"
              >
                <Github className="h-4 w-4" />
                View on GitHub Marketplace
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                data-testid="copy-setup-cta"
                className="group inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/[0.03] hover:border-orange-500/50 hover:bg-orange-50 dark:hover:bg-orange-500/10 text-slate-700 dark:text-white px-6 py-3.5 font-mono text-sm transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Setup Code
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={scrollToInstall}
                data-testid="hero-jump-install"
                className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Zap className="h-3.5 w-3.5" />
                or read install guide
              </button>
            </div>

            {/* Micro stats */}
            <div
              className="fade-up mt-12 grid grid-cols-3 gap-6 max-w-md"
              style={{ animationDelay: "320ms" }}
            >
              <Stat value="<45s" label="Avg review time" />
              <Stat value="0" label="Config files" />
              <Stat value="100%" label="Serverless" />
            </div>
          </div>

          {/* Right visual: mock PR review card */}
          <div className="lg:col-span-5">
            <PRReviewMock />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="border-l border-orange-500/40 pl-4">
    <div className="font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
      {value}
    </div>
    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
      {label}
    </div>
  </div>
);

const PRReviewMock = () => {
  return (
    <div
      data-testid="pr-review-mock"
      className="fade-up relative"
      style={{ animationDelay: "400ms" }}
    >
      <div className="absolute -inset-3 bg-gradient-to-tr from-orange-200/50 dark:from-orange-600/30 via-transparent to-red-200/50 dark:to-red-600/20 blur-2xl rounded-3xl" />
      <div className="relative rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] shadow-xl dark:shadow-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#111] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
            pull-request #427
          </div>
          <div className="font-mono text-[10px] text-orange-600 dark:text-orange-400">reviewing…</div>
        </div>

        {/* Diff */}
        <div className="font-mono text-[12.5px] leading-6 bg-white dark:bg-transparent">
          <DiffLine n={12} type="ctx" text="function calculateTotal(items) {" />
          <DiffLine n={13} type="del" text="  let total = 0;" />
          <DiffLine n={14} type="del" text="  for (let i = 0; i <= items.length; i++) {" />
          <DiffLine n={15} type="add" text="  return items.reduce((sum, item) =>" />
          <DiffLine n={16} type="add" text="    sum + item.price * item.qty, 0);" />
          <DiffLine n={17} type="ctx" text="}" />
        </div>

        {/* AI Comment */}
        <div className="border-t border-slate-100 dark:border-white/5 bg-gradient-to-b from-orange-50 to-white dark:from-orange-500/[0.06] dark:to-transparent p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-orange-400 to-red-500 dark:from-orange-500 dark:to-red-600 shadow-[0_0_18px_rgba(234,88,12,0.2)] dark:shadow-[0_0_18px_rgba(234,88,12,0.4)]">
              <Zap className="h-4 w-4 text-white dark:text-black" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-900 dark:text-white">
                  RepoReview
                </span>
                <span className="rounded-sm bg-orange-100 dark:bg-orange-500/15 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-orange-700 dark:text-orange-400">
                  bot · line 14
                </span>
              </div>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="text-orange-700 dark:text-orange-400 font-medium">Off-by-one</span> — the loop
                uses <span className="font-mono text-slate-800 dark:text-white bg-slate-100 dark:bg-transparent px-1 rounded">i &lt;= items.length</span>{" "}
                which will read <span className="font-mono text-slate-800 dark:text-white bg-slate-100 dark:bg-transparent px-1 rounded">undefined</span>.
                Replace with a functional reducer (lines 15–16) for O(n) safety.
              </p>
              <div className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                <span className="text-emerald-600 dark:text-green-400">● suggested fix ready</span>
                <span>·</span>
                <span>2.1s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiffLine = ({ n, type, text }) => {
  const bg =
    type === "add"
      ? "bg-emerald-50 dark:bg-green-500/[0.08]"
      : type === "del"
      ? "bg-red-50 dark:bg-red-500/[0.08]"
      : "";
  const prefix = type === "add" ? "+" : type === "del" ? "-" : " ";
  const prefixColor =
    type === "add"
      ? "text-emerald-600 dark:text-green-400"
      : type === "del"
      ? "text-red-600 dark:text-red-400"
      : "text-slate-400 dark:text-slate-600";
  const textColor =
    type === "add"
      ? "text-emerald-900 dark:text-green-100"
      : type === "del"
      ? "text-red-900 dark:text-red-100/80"
      : "text-slate-600 dark:text-slate-400";

  return (
    <div className={`flex ${bg}`}>
      <span className="w-10 shrink-0 select-none border-r border-slate-100 dark:border-white/5 px-2 py-0.5 text-right text-slate-400 dark:text-slate-600">
        {n}
      </span>
      <span className={`w-6 shrink-0 select-none px-2 py-0.5 ${prefixColor}`}>
        {prefix}
      </span>
      <span className={`py-0.5 pr-4 ${textColor}`}>{text}</span>
    </div>
  );
};