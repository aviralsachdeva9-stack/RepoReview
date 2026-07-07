import { motion } from "framer-motion";
import { CheckCircle2, GitPullRequest, Sparkles, Bot } from "lucide-react";

export default function PRMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
      data-testid="hero-pr-mockup"
      className="relative mx-auto w-full max-w-2xl"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_8px_40px_-12px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_40px_-8px_rgb(0,0,0,0.5)]">
        {/* PR header */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <GitPullRequest className="h-3.5 w-3.5" />
            Open
          </span>
          <p className="truncate text-sm font-medium text-foreground">
            feat: add rate limiter to auth service
          </p>
          <span className="ml-auto font-mono text-xs text-muted-foreground">#218</span>
        </div>

        {/* Bot review comment */}
        <div className="p-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
              <Bot className="h-4 w-4 text-foreground" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-foreground">RepoReview</span>
                <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  bot
                </span>
                <span className="text-xs text-muted-foreground">reviewed in 41s</span>
              </div>

              <div className="mt-3 space-y-2.5">
                <ReviewLine
                  status="pass"
                  text="No security vulnerabilities detected"
                />
                <ReviewLine status="pass" text="Type safety verified across 6 files" />
                <div className="rounded-lg border border-border bg-surface/60 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-foreground/70" />
                    Suggestion · line 42
                  </div>
                  <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted-foreground">
                    Consider memoizing <span className="text-foreground">getUserToken()</span> to
                    avoid redundant calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checks passed footer */}
        <div className="flex items-center gap-2 border-t border-border bg-emerald-500/[0.06] px-5 py-3.5">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            All checks have passed
          </span>
          <span className="ml-auto text-xs text-muted-foreground">2 successful checks</span>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewLine({ text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
      <span>{text}</span>
    </div>
  );
}