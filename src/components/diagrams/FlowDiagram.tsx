"use client";

import { motion } from "framer-motion";

interface FlowStep {
  label: string;
  detail?: string;
  color?: "cyan" | "purple" | "blue" | "emerald";
}

const colorMap = {
  cyan: { bg: "bg-accent-cyan/10", border: "border-accent-cyan/30", text: "text-accent-cyan", dot: "bg-accent-cyan" },
  purple: { bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", dot: "bg-accent-purple" },
  blue: { bg: "bg-accent-blue/10", border: "border-accent-blue/30", text: "text-accent-blue", dot: "bg-accent-blue" },
  emerald: { bg: "bg-emerald-400/10", border: "border-emerald-400/30", text: "text-emerald-400", dot: "bg-emerald-400" },
};

export default function FlowDiagram({ steps, title }: { steps: FlowStep[]; title?: string }) {
  return (
    <div className="my-6">
      {title && <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">{title}</h4>}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-blue" />

        <div className="space-y-0">
          {steps.map((step, i) => {
            const c = colorMap[step.color || "cyan"];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-4 py-2"
              >
                {/* Node dot */}
                <div className="relative z-10 mt-1.5 shrink-0">
                  <div className={`w-2.5 h-2.5 rounded-full ${c.dot} ring-4 ring-background`} />
                </div>

                {/* Content */}
                <div className={`flex-1 px-4 py-3 rounded-xl ${c.bg} border ${c.border}`}>
                  <p className={`text-sm font-semibold ${c.text}`}>{step.label}</p>
                  {step.detail && (
                    <p className="text-xs text-muted mt-1 leading-relaxed">{step.detail}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
