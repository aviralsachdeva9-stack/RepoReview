import { motion } from "framer-motion";
import { KeyRound, FileCode2 } from "lucide-react";
import CodeWindow from "@/components/landing/CodeWindow";

const STEPS = [
  {
    n: "01",
    icon: KeyRound,
    title: "Add your Groq API Key",
    desc: (
      <>
        Go to <span className="font-medium text-foreground">Repo Settings → Secrets</span> and add
        a new repository secret named{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px] text-foreground">
          GROQ_API_KEY
        </code>
        .
      </>
    ),
    testid: "setup-step-1",
  },
  {
    n: "02",
    icon: FileCode2,
    title: "Create the Workflow File",
    desc: (
      <>
        Add the workflow below to{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px] text-foreground">
          .github/workflows/ai-review.yml
        </code>{" "}
        and commit. That&apos;s it — reviews run on every pull request.
      </>
    ),
    testid: "setup-step-2",
  },
];

export default function Setup() {
  return (
    <section id="setup" className="scroll-mt-20 border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Onboarding
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Install in 2 Minutes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            No servers, no SDKs, no dashboards. Two steps and your repository is fully covered.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.n} data-testid={s.testid} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="pt-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                      <h3 className="text-lg font-medium tracking-tight">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Code window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}