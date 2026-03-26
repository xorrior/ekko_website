"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";

const sections = [
  {
    title: "Why Ekko Chat Exists",
    content: `Every mainstream messaging app — WhatsApp, Signal, iMessage, Telegram — relies on central servers operated by a single company. Even when messages are encrypted, the server still knows who you're talking to, when, and how often. If the company goes down, gets hacked, or is compelled by a government to hand over data, your communication is at risk.\n\nEkko Chat takes a fundamentally different approach: there is no server. Your messages travel through decentralized networks that no single entity controls. Your identity is a cryptographic key stored only on your device — not an email address, not a phone number, not a username tied to any service.`,
  },
  {
    title: "Who Ekko Chat is For",
    items: [
      { label: "Journalists & Activists", desc: "Operating in environments where communication metadata can be dangerous" },
      { label: "Privacy-Conscious Individuals", desc: "Who don't want their social graph harvested" },
      { label: "Communities with Unreliable Internet", desc: "Where Bluetooth and mesh networking keep communication alive" },
      { label: "Anyone Who Believes", desc: "Messaging infrastructure shouldn't depend on the goodwill of a corporation" },
    ],
  },
];

const transportOverview = [
  {
    name: "Bluetooth (BLE)",
    desc: "When you're physically near someone (within about 30 feet), Ekko Chat sends messages directly over Bluetooth. No internet needed. This is the fastest path and works even if all networks are down.",
    detail: "Your phone quietly advertises its presence via Bluetooth. When a contact's phone is nearby, the two devices establish an encrypted tunnel and exchange messages instantly.",
  },
  {
    name: "Internet (DHT)",
    desc: "When you're not nearby, Ekko Chat uses a global peer-to-peer network called a Distributed Hash Table — the same kind of network that powers BitTorrent.",
    detail: "Think of it like a public bulletin board where messages are written in a code only the intended recipient can read. The bulletin board is maintained by thousands of independent computers worldwide.",
  },
  {
    name: "Onion Routing (Tor)",
    desc: "For maximum privacy, Ekko Chat establishes a direct connection through the Tor network. Messages bounce through multiple encrypted layers so neither party reveals their location.",
    detail: "Each device creates a hidden address that's only reachable through Tor. Messages travel through three layers of encryption across different countries.",
  },
  {
    name: "QUIC P2P (iroh)",
    desc: "Some networks block direct connections. Ekko Chat uses QUIC to punch through barriers and establish a direct peer-to-peer link.",
    detail: "Devices exchange small endpoint IDs through the decentralized network, then connect directly using a protocol faster and more reliable than traditional connections.",
  },
  {
    name: "Private Relay",
    desc: "For always-on delivery, you can subscribe to a private relay server. Messages are stored encrypted and pushed to your device the moment you come online.",
    detail: "The relay sees only ciphertext — it cannot read your messages. You can invite contacts to share your relay for faster mutual delivery. Messages queue while you're offline and deliver instantly when you reconnect.",
  },
  {
    name: "Mesh Relay (BLE Gossip)",
    desc: "After a normal Bluetooth exchange, devices share encrypted blobs meant for other people. Every Ekko Chat device acts as a potential courier.",
    detail: "The relay person can't decrypt messages and doesn't even know who the intended recipients are. This extends Ekko Chat's reach into areas with spotty connectivity.",
  },
];

const roadmap = [
  {
    title: "DHT Subscription Service",
    status: "Planned",
    features: [
      "Push notifications instead of polling",
      "Extended message retention",
      "Priority publishing for faster propagation",
      "Larger payloads without chunking overhead",
    ],
  },
  {
    title: "Relay Subscription Service",
    status: "Available",
    features: [
      "Dedicated high-availability relay infrastructure",
      "Offline message queuing with E2E encryption",
      "Push-based delivery for near-instant message receipt",
      "Invite contacts to share your relay for faster mutual delivery",
    ],
  },
];

export default function DocsPage() {
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
                Documentation
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Ekko Chat <span className="gradient-text">Overview</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              Understand how Ekko Chat works, why it exists, and the technology behind
              decentralized, encrypted messaging.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/docs/transport-security"
                className="px-5 py-2.5 text-sm font-semibold rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 transition-all"
              >
                Transport Security Docs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Ekko Chat Exists */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {sections.map((section, si) => (
            <AnimatedSection key={section.title} delay={si * 0.1} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
                {section.title}
              </h2>
              {section.content && (
                <div className="space-y-4">
                  {section.content.split("\n\n").map((p, i) => (
                    <p key={i} className="text-muted leading-relaxed">{p}</p>
                  ))}
                </div>
              )}
              {section.items && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {section.items.map((item) => (
                    <div key={item.label} className="p-5 rounded-xl bg-surface border border-border">
                      <h3 className="font-semibold text-accent-cyan mb-1">{item.label}</h3>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* How Messages Travel */}
      <section className="py-16 md:py-24 bg-surface/50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              How Messages Travel
            </h2>
            <p className="mt-4 text-muted">
              Ekko Chat uses six different communication paths to deliver your
              messages. The app automatically selects the best available path.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {transportOverview.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <motion.details
                  className="group rounded-2xl bg-background border border-border overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-surface-light/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 text-accent-cyan flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold">{t.name}</h3>
                        <p className="text-sm text-muted mt-0.5">{t.desc}</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-muted shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-12">
                      <p className="text-sm text-muted leading-relaxed border-l-2 border-accent-cyan/20 pl-4">
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </motion.details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latency Explanation */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Why Messages Take Longer Than WhatsApp
            </h2>
            <div className="rounded-2xl bg-surface border border-border p-8">
              <h3 className="text-lg font-semibold text-accent-cyan mb-3">The latency is the privacy</h3>
              <p className="text-muted leading-relaxed mb-4">
                The extra time isn&apos;t a bug — it&apos;s the natural consequence of removing
                the middleman. Every second of latency represents a layer of privacy
                protection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {[
                  "No server logs your message timing",
                  "No company maps your relationships",
                  "No single point can be compromised or censored",
                  "Messages travel through independently operated networks",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                    <p className="text-sm text-muted">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted leading-relaxed mt-6 text-sm">
                For nearby contacts, Bluetooth delivers messages faster than any
                centralized app. For distant contacts, the trade-off is seconds of
                latency in exchange for communication that no third party can
                monitor, block, or control.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24 bg-surface/50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Development Roadmap
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmap.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="gradient-border h-full">
                  <div className="relative h-full p-6 rounded-2xl bg-surface">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.status === "Available"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-accent-purple/10 text-accent-purple"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-8">
            <div className="rounded-2xl bg-background border border-border p-6">
              <h3 className="font-semibold mb-3">Pricing Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Free tier remains fully functional — all transports, all features",
                  "Subscriptions enhance speed and reliability, not access",
                  "No data monetization — never ads, never metadata harvesting",
                  "Transparent, independently auditable infrastructure",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nav to Transport Security */}
      <section className="py-16 md:py-24 text-center">
        <AnimatedSection>
          <p className="text-muted mb-6">Ready for the technical deep-dive?</p>
          <Link
            href="/docs/transport-security"
            className="inline-flex px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-background hover:shadow-xl hover:shadow-accent-cyan/20 transition-all hover:scale-[1.02]"
          >
            Transport Security Documentation
          </Link>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
