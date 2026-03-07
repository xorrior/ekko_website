"use client";

import { motion } from "framer-motion";

interface Risk {
  name: string;
  severity: "Low" | "Medium" | "High" | "Very Low";
  note: string;
}

const severityConfig = {
  "Very Low": { color: "bg-emerald-400", bar: "w-1/12", text: "text-emerald-400", bg: "bg-emerald-400/10" },
  Low: { color: "bg-accent-cyan", bar: "w-3/12", text: "text-accent-cyan", bg: "bg-accent-cyan/10" },
  Medium: { color: "bg-amber-400", bar: "w-6/12", text: "text-amber-400", bg: "bg-amber-400/10" },
  High: { color: "bg-red-400", bar: "w-10/12", text: "text-red-400", bg: "bg-red-400/10" },
};

export default function RiskGrid({ risks }: { risks: Risk[] }) {
  return (
    <div className="my-6 space-y-2">
      {risks.map((risk, i) => {
        const s = severityConfig[risk.severity];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className="rounded-xl bg-surface border border-border p-4 group hover:border-border/80 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <p className="text-sm font-medium text-foreground">{risk.name}</p>
              <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.text} ${s.bg}`}>
                {risk.severity}
              </span>
            </div>
            {/* Severity bar */}
            <div className="h-1 w-full rounded-full bg-border/50 mb-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 + 0.2, duration: 0.5 }}
                className={`h-full rounded-full ${s.color} ${s.bar}`}
              />
            </div>
            <p className="text-xs text-muted leading-relaxed">{risk.note}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
