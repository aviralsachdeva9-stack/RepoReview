import { useState } from "react";
import { Copy, Check, KeyRound, FileCode2, Github, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const YAML_CODE = `name: RepoReview
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

const SECRET_CMD = `gh secret set GROQ_API_KEY --body "gsk_xxx..."`;

export const Install = () => {
  const [copiedYaml, setCopiedYaml] = useState(false);
  const [copiedSecret, setCopiedSecret] = useState(false);

  const copy = async (text, setFn, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setFn(true);
      toast.success(`${label} copied`);
      setTimeout(() => setFn(false), 2000);
    } catch {
      toast.error("Copy failed");
    }
  };

  return (
    <section
      id="install"
      data-testid="install-section"
      className="relative py-24 md:py-32 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-transparent transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-noise opacity-50 dark:opacity-100 pointer-events-none" />
      <div className="glow-orb top-1/3 -right-24 h-[300px] w-[300px] bg-orange-200 dark:bg-orange-700 blur-3xl rounded-full absolute opacity-50 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500">
              // installation
            </div>
            <h2
              data-testid="install-heading"
              className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              Two steps.
              <br />
              <span className="text-slate-500 dark:text-slate-400">One coffee sip.</span>
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              Drop the workflow into any repository. On every pull request the
              action wakes up, calls Groq's LLaMA 3.3, posts inline review
              comments, and shuts down. No dashboards. No SDKs. No bills.
            </p>

            <a
              href="https://github.com/marketplace"
              target="_blank"
              rel="noreferrer"
              data-testid="install-marketplace-link"
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-4 py-2.5 text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-white hover:border-orange-500/50 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all"
            >
              <Github className="h-3.5 w-3.5" />
              Install on Marketplace
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Right: steps */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1 */}
            <StepShell
              stepNumber="01"
              icon={KeyRound}
              title="Add GROQ_API_KEY to repository secrets"
              subtitle="Grab a key at console.groq.com and store it as a repo secret."
              testId="install-step-1"
            >
              <CodeBlock
                filename="terminal"
                lang="bash"
                testId="install-secret-block"
                onCopy={() => copy(SECRET_CMD, setCopiedSecret, "Command")}
                copied={copiedSecret}
              >
                <span className="text-orange-600 dark:text-orange-400">$</span>{" "}
                <span className="text-slate-600 dark:text-slate-300">{SECRET_CMD}</span>
              </CodeBlock>
              <div className="mt-3 font-mono text-[11px] text-slate-500">
                Or add via{" "}
                <span className="text-slate-700 dark:text-white">
                  Settings → Secrets and variables → Actions → New repository secret
                </span>
              </div>
            </StepShell>

            {/* Step 2 */}
            <StepShell
              stepNumber="02"
              icon={FileCode2}
              title="Create .github/workflows/ai-review.yml"
              subtitle="Paste the workflow below. Commit. That's it — the next PR gets reviewed."
              testId="install-step-2"
            >
              <CodeBlock
                filename=".github/workflows/ai-review.yml"
                lang="yaml"
                testId="install-yaml-block"
                onCopy={() => copy(YAML_CODE, setCopiedYaml, "YAML")}
                copied={copiedYaml}
              >
                <pre className="whitespace-pre">
                  <YamlHighlight code={YAML_CODE} />
                </pre>
              </CodeBlock>
            </StepShell>

            {/* Complete callout */}
            <div
              data-testid="install-complete-callout"
              className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-50 dark:from-orange-500/10 to-red-50 dark:to-red-500/[0.03] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors duration-300"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-orange-600 dark:text-orange-400">
                  // done
                </div>
                <div className="mt-1 font-display text-lg text-slate-900 dark:text-white">
                  Open a PR. Watch the bot review in{" "}
                  <span className="text-orange-600 dark:text-orange-400">under 45s</span>.
                </div>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                → next PR triggers automatically
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepShell = ({ stepNumber, icon: Icon, title, subtitle, children, testId }) => (
  <div
    data-testid={testId}
    className="relative rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0f0f0f] p-6 md:p-8 transition-colors duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-orange-200 dark:border-orange-500/30 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-orange-600 dark:text-orange-500">
            step {stepNumber}
          </span>
          <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
        </div>
        <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{subtitle}</p>
      </div>
    </div>
    <div className="mt-6">{children}</div>
  </div>
);

const CodeBlock = ({ filename, lang, children, onCopy, copied, testId }) => (
  <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-black shadow-sm transition-colors duration-300">
    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-[#111] px-4 py-2">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-orange-500" />
        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{filename}</span>
        <span className="rounded bg-slate-200 dark:bg-white/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-slate-600 dark:text-slate-500">
          {lang}
        </span>
      </div>
      <button
        type="button"
        onClick={onCopy}
        data-testid={`${testId}-copy`}
        className="inline-flex items-center gap-1.5 rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 text-orange-600 dark:text-orange-400" /> Copied
          </>
        ) : (
          <>
            <Copy className="h-3 w-3" /> Copy
          </>
        )}
      </button>
    </div>
    <div
      data-testid={testId}
      className="overflow-x-auto p-4 font-mono text-[12.5px] leading-6 text-slate-700 dark:text-slate-300 bg-white dark:bg-transparent"
    >
      {children}
    </div>
  </div>
);

const YamlHighlight = ({ code }) => {
  const lines = code.split("\n");
  return (
    <>
      {lines.map((line, idx) => (
        <div key={idx} className="flex">
          <span className="w-8 shrink-0 select-none pr-3 text-right text-slate-400 dark:text-slate-600">
            {idx + 1}
          </span>
          <span className="flex-1">{colorize(line)}</span>
        </div>
      ))}
    </>
  );
};

const colorize = (line) => {
  if (line.trim().startsWith("#")) {
    return <span className="text-slate-400 dark:text-slate-500">{line}</span>;
  }
  const kvMatch = line.match(/^(\s*)([\w.-]+)(:)(.*)$/);
  if (kvMatch) {
    const [, indent, key, colon, rest] = kvMatch;
    return (
      <>
        <span>{indent}</span>
        <span className="text-orange-600 dark:text-orange-400">{key}</span>
        <span className="text-slate-500 dark:text-slate-500">{colon}</span>
        <span className="text-slate-800 dark:text-slate-200">{highlightValue(rest)}</span>
      </>
    );
  }
  const listMatch = line.match(/^(\s*)(-\s)(.*)$/);
  if (listMatch) {
    const [, indent, dash, rest] = listMatch;
    return (
      <>
        <span>{indent}</span>
        <span className="text-red-600 dark:text-red-400">{dash}</span>
        <span className="text-slate-800 dark:text-slate-200">{highlightValue(rest)}</span>
      </>
    );
  }
  return <span className="text-slate-600 dark:text-slate-300">{line}</span>;
};

const highlightValue = (val) => {
  if (!val) return val;
  if (val.includes("${{")) {
    const parts = val.split(/(\$\{\{[^}]+\}\})/g);
    return parts.map((p, i) =>
      p.startsWith("${{") ? (
        <span key={i} className="text-orange-500 dark:text-orange-300">
          {p}
        </span>
      ) : (
        <span key={i}>{p}</span>
      )
    );
  }
  return val;
};