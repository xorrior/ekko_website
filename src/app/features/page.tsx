"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";

const featureGroups = [
  {
    title: "Messaging",
    gradient: "from-accent-cyan to-accent-blue",
    features: [
      {
        name: "Encrypted Text Messaging",
        desc: "Every message is encrypted end-to-end with ChaCha20-Poly1305. There is no Ekko Chat server that could read your messages.",
      },
      {
        name: "File & Photo Sharing",
        desc: "Send documents, photos, and videos of any size. Large files are automatically chunked and reassembled across transports.",
      },
      {
        name: "Group Conversations",
        desc: "Create groups, add members, and send encrypted group messages. Group invitations require explicit acceptance.",
      },
      {
        name: "Message Reactions",
        desc: "React to messages with emojis for quick, expressive responses.",
      },
      {
        name: "GIF Support",
        desc: "Built-in GIF picker for expressive conversations.",
      },
      {
        name: "Disappearing Messages",
        desc: "Set messages to auto-delete after 5 minutes, 1 hour, 1 day, or 1 week.",
      },
    ],
  },
  {
    title: "Identity & Contacts",
    gradient: "from-accent-purple to-pink-500",
    features: [
      {
        name: "No Accounts Required",
        desc: "Your identity is generated on your device as a cryptographic keypair. Nothing to register, no email, no phone number.",
      },
      {
        name: "QR Code Contact Exchange",
        desc: "Add contacts by scanning each other's QR codes in person. Ensures you're connecting with the right person.",
      },
      {
        name: "Nearby Discovery",
        desc: "Find and add contacts via Bluetooth when you're in the same room. No internet required.",
      },
      {
        name: "Profile Sharing Controls",
        desc: "Choose whether to share your profile picture and display name with all contacts or selected individuals.",
      },
      {
        name: "Contact Verification",
        desc: "Every contact has a unique fingerprint you can verify in person to confirm their identity.",
      },
    ],
  },
  {
    title: "Security",
    gradient: "from-emerald-400 to-accent-cyan",
    features: [
      {
        name: "Automatic Database Encryption",
        desc: "The database on your device is encrypted with a randomly generated passphrase. Security is the default.",
      },
      {
        name: "Biometric Unlock",
        desc: "Use Face ID or Touch ID to access the app on supported devices.",
      },
      {
        name: "Local-Only Storage",
        desc: "All messages and contacts live on your device. No cloud backup that could be subpoenaed or breached.",
      },
      {
        name: "Backup & Restore",
        desc: "Export your encrypted database for safekeeping. The passphrase is available in settings when you need it.",
      },
    ],
  },
  {
    title: "Transport Layers",
    gradient: "from-accent-blue to-accent-purple",
    features: [
      {
        name: "Bluetooth (BLE)",
        desc: "Face-to-face messaging within ~30 feet. Fastest path, works with all networks down. Noise XX encrypted tunnel.",
      },
      {
        name: "DHT Network",
        desc: "Global peer-to-peer network (BitTorrent Mainline DHT). Encrypted messages stored and retrieved without any central server.",
      },
      {
        name: "Tor Onion Routing",
        desc: "Direct .onion-to-.onion connections through 3 encrypted hops. Maximum privacy — no IP addresses revealed.",
      },
      {
        name: "QUIC P2P (iroh)",
        desc: "NAT-busting peer-to-peer connections using modern QUIC protocol. Punches through corporate firewalls and strict carriers.",
      },
      {
        name: "Private Relay",
        desc: "Always-on push delivery through your private encrypted relay server. Messages queue while you're offline and deliver instantly when you reconnect.",
      },
      {
        name: "BLE Mesh Gossip",
        desc: "Devices relay encrypted messages for others. Extends Ekko Chat's reach into areas with spotty connectivity.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Built for <span className="gradient-text">Privacy</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              Every feature in Ekko Chat is designed around a single principle: your
              communication belongs to you. No compromises, no trade-offs on
              security.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Groups */}
      {featureGroups.map((group, gi) => (
        <section
          key={group.title}
          className={`py-20 md:py-28 ${gi % 2 === 0 ? "" : "bg-surface/50"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-12">
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${group.gradient}`} />
                <h2 className="text-2xl md:text-4xl font-bold">{group.title}</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.features.map((f, i) => (
                <AnimatedSection key={f.name} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="h-full p-6 rounded-2xl bg-surface border border-border hover:border-accent-cyan/20 transition-all group"
                  >
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                      {f.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Platform Support */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="gradient-text">Cross-Platform</span>
            </h2>
            <p className="mt-4 text-muted text-lg">Available everywhere you need it.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { name: "iOS", status: "Available", icon: "iPhone & iPad" },
              { name: "Android", status: "Available", icon: "All devices" },
              { name: "macOS", status: "Available", icon: "Native app" },
              { name: "Windows", status: "Coming Soon", icon: "In development" },
            ].map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                  <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                  <p className="text-xs text-muted mb-2">{p.icon}</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      p.status === "Available"
                        ? "bg-accent-cyan/10 text-accent-cyan"
                        : "bg-accent-purple/10 text-accent-purple"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
