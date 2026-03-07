"use client";

import { motion } from "framer-motion";

interface TransportSecurity {
  name: string;
  color: string;
  confidentiality: string;
  forwardSecrecy: string;
  anonymity: string;
  anonymityLevel: "high" | "medium" | "low";
  offline: boolean;
  maxSize: string;
}

const anonymityColors = {
  high: "text-emerald-400 bg-emerald-400/10",
  medium: "text-amber-400 bg-amber-400/10",
  low: "text-red-400 bg-red-400/10",
};

export default function SecurityMatrix({ transports }: { transports: TransportSecurity[] }) {
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {transports.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="rounded-2xl bg-surface border border-border p-5 hover:border-accent-cyan/20 transition-colors"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${t.color}`} />
            <h4 className="font-bold">{t.name}</h4>
          </div>

          <div className="space-y-3">
            {/* Confidentiality */}
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider">Encryption</p>
                <p className="text-xs text-foreground">{t.confidentiality}</p>
              </div>
            </div>

            {/* Forward Secrecy */}
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-accent-purple mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider">Forward Secrecy</p>
                <p className="text-xs text-foreground">{t.forwardSecrecy}</p>
              </div>
            </div>

            {/* Anonymity */}
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider">Anonymity</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-foreground">{t.anonymity}</p>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase ${anonymityColors[t.anonymityLevel]}`}>
                    {t.anonymityLevel}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <span className={`flex items-center gap-1 text-[10px] font-medium ${t.offline ? "text-emerald-400" : "text-muted"}`}>
                {t.offline ? (
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                ) : (
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                )}
                Offline
              </span>
              <span className="text-[10px] text-muted">Max: {t.maxSize}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
