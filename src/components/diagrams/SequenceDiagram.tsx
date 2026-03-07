"use client";

import { motion } from "framer-motion";

interface SeqMessage {
  from: "left" | "right";
  label: string;
  detail?: string;
  encrypted?: boolean;
}

interface SequenceDiagramProps {
  leftLabel: string;
  rightLabel: string;
  messages: SeqMessage[];
  result?: string;
}

export default function SequenceDiagram({ leftLabel, rightLabel, messages, result }: SequenceDiagramProps) {
  return (
    <div className="my-6 rounded-2xl bg-surface border border-border p-6 overflow-hidden">
      {/* Headers */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-cyan" />
          <span className="text-sm font-semibold text-accent-cyan">{leftLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-accent-purple">{rightLabel}</span>
          <div className="w-3 h-3 rounded-full bg-accent-purple" />
        </div>
      </div>

      {/* Vertical lines */}
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-accent-cyan/20" />
        <div className="absolute right-3 top-0 bottom-0 w-px bg-accent-purple/20" />

        {/* Messages */}
        <div className="space-y-3 py-2">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative px-6"
            >
              {/* Arrow */}
              <div className={`flex items-center gap-2 ${msg.from === "right" ? "flex-row-reverse" : ""}`}>
                {/* Arrow line with head */}
                <div className="flex-1 relative h-8 flex items-center">
                  <div className={`absolute inset-x-0 top-1/2 h-px ${msg.encrypted ? "bg-gradient-to-r from-accent-cyan to-accent-purple" : "bg-border"}`} />
                  {/* Arrow head */}
                  <div className={`absolute ${msg.from === "left" ? "right-0" : "left-0"} top-1/2 -translate-y-1/2`}>
                    <svg width="8" height="12" viewBox="0 0 8 12" className={`${msg.from === "left" ? "" : "rotate-180"} ${msg.encrypted ? "text-accent-purple" : "text-border"}`}>
                      <path d="M0 0L8 6L0 12" fill="currentColor" />
                    </svg>
                  </div>
                  {/* Label on arrow */}
                  <div className="absolute inset-x-0 -top-1 flex justify-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium bg-background ${msg.encrypted ? "text-accent-cyan" : "text-muted"}`}>
                      {msg.encrypted && (
                        <svg className="inline w-3 h-3 mr-1 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                      )}
                      {msg.label}
                    </span>
                  </div>
                </div>
              </div>
              {msg.detail && (
                <p className={`text-[10px] text-muted mt-0.5 ${msg.from === "left" ? "text-right" : "text-left"}`}>
                  {msg.detail}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: messages.length * 0.1, duration: 0.4 }}
            className="mx-6 mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/20 text-center"
          >
            <span className="text-xs font-semibold gradient-text">{result}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
