"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";

const categories = [
  { value: "bug", label: "Bug Report" },
  { value: "feature", label: "Feature Request" },
  { value: "security", label: "Security Issue" },
  { value: "general", label: "General Feedback" },
];

export default function SupportPage() {
  const [form, setForm] = useState({
    category: "bug",
    title: "",
    description: "",
    steps: "",
    contact: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit report");
      }

      setStatus("success");
      setForm({ category: "bug", title: "", description: "", steps: "", contact: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const isBug = form.category === "bug";

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-32 md:pb-20">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-semibold uppercase tracking-wider">
                Support
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Report an <span className="gradient-text">Issue</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              Found a bug or have a suggestion? Submit a report and it will be
              tracked in our project issue tracker.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          {status === "success" ? (
            <AnimatedSection>
              <div className="rounded-2xl bg-surface border border-emerald-400/30 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Report Submitted</h2>
                <p className="text-muted mb-6">
                  Your issue has been created in the project tracker. Thank you
                  for helping improve Ekko Chat.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 text-sm font-semibold rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 transition-all"
                >
                  Submit Another
                </button>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Category
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => setForm({ ...form, category: cat.value })}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                          form.category === cat.value
                            ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan"
                            : "border-border bg-surface text-muted hover:border-accent-cyan/30 hover:text-foreground"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-foreground mb-2">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Brief summary of the issue"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={5}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Describe the issue in detail"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all resize-y min-h-[120px]"
                  />
                </div>

                {/* Steps to Reproduce (bug only) */}
                {isBug && (
                  <div>
                    <label htmlFor="steps" className="block text-sm font-semibold text-foreground mb-2">
                      Steps to Reproduce
                    </label>
                    <textarea
                      id="steps"
                      rows={4}
                      value={form.steps}
                      onChange={(e) => setForm({ ...form, steps: e.target.value })}
                      placeholder={"1. Open the app\n2. Go to...\n3. Tap on...\n4. See error"}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all resize-y min-h-[100px]"
                    />
                  </div>
                )}

                {/* Contact (optional) */}
                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-foreground mb-2">
                    Contact <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    id="contact"
                    type="text"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="Email or other way to reach you for follow-up"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-background hover:shadow-lg hover:shadow-accent-cyan/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Report"}
                </button>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
