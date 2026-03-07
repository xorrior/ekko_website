"use client";

import { motion } from "framer-motion";

interface TransportRisk {
  transport: string;
  level: "Low" | "Medium" | "High";
  detail: string;
}

interface AttackScenarioProps {
  title: string;
  description?: string;
  risks?: TransportRisk[];
  children?: React.ReactNode;
}

const levelConfig = {
  Low: { bg: "bg-emerald-400", width: "25%", badge: "bg-emerald-400/10 text-emerald-400" },
  Medium: { bg: "bg-amber-400", width: "55%", badge: "bg-amber-400/10 text-amber-400" },
  High: { bg: "bg-red-400", width: "85%", badge: "bg-red-400/10 text-red-400" },
};

export default function AttackScenario({ title, description, risks, children }: AttackScenarioProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl bg-surface border border-border p-6 my-4"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-red-400/10 flex items-center justify-center shrink-0 mt-0.5">
          <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          {description && <p className="text-sm text-muted mt-1">{description}</p>}
        </div>
      </div>

      {risks && (
        <div className="space-y-3 ml-11">
          {risks.map((risk, i) => {
            const l = levelConfig[risk.level];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">{risk.transport}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${l.badge}`}>{risk.level}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-border/50 mb-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: l.width }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.6, ease: "easeOut" }}
                    className={`h-full rounded-full ${l.bg}`}
                  />
                </div>
                <p className="text-xs text-muted">{risk.detail}</p>
              </motion.div>
            );
          })}
        </div>
      )}

      {children && <div className="ml-11">{children}</div>}
    </motion.div>
  );
}
