import { useState } from "react";
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";
import { SETUP_YAML } from "@/lib/landing";

function renderValue(val, key) {
  if (val.includes("${")) {
    const idx = val.indexOf("${");
    return (
      <>
        <span className="text-emerald-300">{val.slice(0, idx)}</span>
        <span className="text-purple-300">{val.slice(idx)}</span>
      </>
    );
  }
  if (val.includes("[")) return <span className="text-amber-200">{val}</span>;
  if (key === "uses") return <span className="text-orange-300">{val}</span>;
  return <span className="text-emerald-300">{val}</span>;
}

function renderLine(line) {
  const indent = line.match(/^(\s*)/)[1];
  let rest = line.slice(indent.length);
  const nodes = [];

  if (rest.startsWith("- ")) {
    nodes.push(
      <span key="dash" className="text-zinc-500">
        -{" "}
      </span>
    );
    rest = rest.slice(2);
  }

  const kv = rest.match(/^([\w.-]+)(:)(.*)$/);
  if (kv) {
    const [, key, colon, value] = kv;
    nodes.push(
      <span key="k" className="text-sky-300">
        {key}
      </span>
    );
    nodes.push(
      <span key="c" className="text-zinc-500">
        {colon}
      </span>
    );
    if (value.trim()) {
      nodes.push(<span key="v">{renderValue(value, key)}</span>);
    }
  } else {
    nodes.push(<span key="r">{rest}</span>);
  }

  return (
    <>
      <span>{indent}</span>
      {nodes}
    </>
  );
}

export default function CodeWindow() {
  const [copied, setCopied] = useState(false);
  const lines = SETUP_YAML.split("\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SETUP_YAML);
      setCopied(true);
      toast.success("Workflow YAML copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy to clipboard");
    }
  };

  return (
    <div
      data-testid="setup-code-window"
      className="overflow-hidden rounded-xl border border-border/60 bg-[#0D1117] shadow-2xl"
    >
      {/* Title bar */}
      <div className="flex h-10 items-center gap-3 border-b border-white/5 bg-[#161B22] px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="ml-2 font-mono text-xs text-zinc-400">
          .github/workflows/ai-review.yml
        </span>
        <button
          onClick={copy}
          data-testid="setup-copy-yaml-btn"
          aria-label="Copy YAML"
          className="ml-auto inline-flex h-7 items-center gap-1.5 rounded-md border border-white/10 px-2.5 text-xs text-zinc-300 transition-colors hover:bg-white/5"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="mr-4 w-6 shrink-0 select-none text-right text-zinc-600">
                  {i + 1}
                </span>
                <span className="whitespace-pre text-zinc-300">{renderLine(line)}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}