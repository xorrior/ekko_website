"use client";

import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";

export default function PrivacyPage() {
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
                Legal
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              Ekko is designed so that we have as little data as possible. This
              policy explains exactly what is and isn&apos;t visible across each
              transport path.
            </p>
            <p className="mt-4 text-sm text-muted">
              Last updated: March 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Our Approach to Privacy
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Ekko does not require an account, phone number, email address, or
                any personally identifiable information to use. Your identity is a
                cryptographic key pair generated entirely on your device. It never
                leaves your device and is never transmitted to us or any third party.
              </p>
              <p>
                All messages are encrypted end-to-end using ChaCha20-Poly1305 with
                per-message ephemeral key agreement. Message content cannot be read
                by anyone other than the intended recipient — not by us, not by relay
                operators, and not by the networks that carry them.
              </p>
              <p>
                Ekko does not operate central servers that route or store your
                messages. Different transport paths involve different third-party
                infrastructure, and each has different privacy characteristics. We
                believe you should understand exactly what each one exposes.
              </p>
            </div>
          </AnimatedSection>

          {/* What We Don't Collect */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              What Ekko Does Not Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "No names, emails, or phone numbers",
                "No contact lists or social graphs",
                "No message content or metadata",
                "No IP addresses or location data",
                "No device identifiers or fingerprints",
                "No usage analytics or telemetry",
                "No advertising or tracking of any kind",
                "No cloud backups of your messages",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p className="text-sm text-muted">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Local Storage */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Local Storage
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                All messages, contacts, and cryptographic keys are stored locally on
                your device. Ekko does not sync data to the cloud and does not
                maintain any server-side copy of your conversations. If you uninstall
                the app or lose your device, your data is gone — by design.
              </p>
            </div>
          </AnimatedSection>

          {/* Per-Transport Privacy */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              What Each Transport Exposes
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Ekko uses five transport paths to deliver messages. While message
              content is always encrypted end-to-end regardless of transport, the
              networks themselves can observe different types of metadata. Here is
              an honest breakdown of what each path exposes.
            </p>

            <div className="space-y-6">
              {/* BLE */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h3 className="text-lg font-semibold text-accent-cyan mb-3">
                  Bluetooth (BLE)
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Direct device-to-device communication within approximately 30 feet.
                  No internet connection is used. No third-party infrastructure is
                  involved.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    What is visible
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      BLE advertising signals are detectable by any Bluetooth receiver within radio range
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground mt-4">
                    What is protected
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Message content (encrypted via Noise XX handshake + application-layer encryption)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Device identity (advertising IDs are rotated to prevent tracking)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      No data leaves the local radio range
                    </li>
                  </ul>
                </div>
              </div>

              {/* DHT */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h3 className="text-lg font-semibold text-accent-cyan mb-3">
                  Distributed Hash Table (DHT)
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Messages are stored as encrypted entries on the BitTorrent Mainline
                  DHT — a global, decentralized network maintained by thousands of
                  independent nodes. No single entity controls this network.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    What is visible to DHT nodes
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      Your device&apos;s IP address (as a participant in the DHT network)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      Which DHT slots are being published to or fetched from, which could allow observers to correlate access patterns
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      Approximate message volume (by counting occupied slots)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      Timing of publish and fetch operations, which could be used for timing correlation
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground mt-4">
                    What is protected
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Message content (application-layer encryption; DHT nodes store only ciphertext)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Sender and recipient identities (slots are derived from cryptographic keys, not human-readable identifiers)
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted leading-relaxed mt-4 p-3 rounded-lg bg-background border border-border">
                  DHT entries expire after 48 hours. Messages are stored across many
                  independent nodes — there is no single server that holds all of your
                  messages.
                </p>
              </div>

              {/* Tor */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h3 className="text-lg font-semibold text-accent-cyan mb-3">
                  Onion Routing (Tor)
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Ekko creates Tor v3 onion hidden services for direct,
                  anonymized connections between devices. Messages are routed through
                  the volunteer-operated Tor network. Ekko does not operate any Tor
                  infrastructure.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    What is visible
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      Your Tor guard node knows your IP address and that you are using Tor (but not your destination)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      The DHT rendezvous lookup used to discover a peer&apos;s onion address is itself not anonymized
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      An ISP-level observer could use timing correlation if they can observe both endpoints
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground mt-4">
                    What is protected
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Message content (triple-encrypted: Tor circuit + WebSocket + application layer)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Both endpoints&apos; real IP addresses (hidden by onion routing)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      No exit nodes are used — traffic stays entirely within the Tor network (.onion to .onion)
                    </li>
                  </ul>
                </div>
              </div>

              {/* iroh / QUIC Relay */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h3 className="text-lg font-semibold text-accent-cyan mb-3">
                  QUIC Relay (iroh)
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Ekko uses the iroh protocol (from n0.computer) for QUIC-based
                  connections. Devices first attempt direct peer-to-peer connections
                  via UDP hole-punching. If a direct connection cannot be established,
                  traffic is routed through relay servers operated by n0.computer.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    What is visible to the relay server (when relay is used)
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      Both peers&apos; IP addresses
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      Endpoint IDs (persistent identifiers derived from device keys)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                      Connection patterns, message sizes, timing, and frequency
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground mt-4">
                    What is protected
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Message content (double-encrypted: TLS 1.3/QUIC + application-layer encryption)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Sender and recipient identities (the relay sees Endpoint IDs but does not have the mapping to user identities)
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted leading-relaxed mt-4 p-3 rounded-lg bg-background border border-border">
                  When a direct peer-to-peer connection succeeds via hole-punching,
                  no relay is involved and no third party sees any traffic.
                </p>
              </div>

              {/* BLE Gossip */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h3 className="text-lg font-semibold text-accent-cyan mb-3">
                  BLE Mesh Gossip
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  After a standard BLE exchange, devices can relay encrypted message
                  blobs meant for other users. Any Ekko device in range acts as a
                  potential courier.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    What is visible to relay devices
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Nothing meaningful — relay devices see only opaque encrypted blobs
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground mt-4">
                    What is protected
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Message content, sender identity, and recipient identity
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      Relay devices cannot decrypt messages, identify participants, or determine who a message is intended for
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted leading-relaxed mt-4 p-3 rounded-lg bg-background border border-border">
                  Gossip messages are held for up to 48 hours with a 50 MB storage
                  limit per device. Bloom filter digests are used for probabilistic
                  acceptance — no metadata is exchanged about recipients.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Managed Services */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Ekko Managed Services (Planned)
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Ekko plans to offer optional subscription services that enhance
              delivery speed and reliability. These services do not change the
              end-to-end encryption guarantee — message content is never readable
              by Ekko — but they do involve Ekko-operated infrastructure, which
              changes the privacy characteristics compared to the fully
              decentralized free tier.
            </p>

            <div className="space-y-6">
              {/* Managed DHT */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-accent-cyan">
                    DHT Subscription Service
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-medium">
                    Planned
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Subscribers would use Ekko-operated DHT infrastructure for push
                  notifications, extended message retention, and priority publishing.
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Additional data visible to Ekko
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    Your device&apos;s IP address when connecting to Ekko DHT nodes
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    DHT slot access patterns and timing (which slots you publish to or read from)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    Push notification tokens (required for delivery notifications)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    Subscription and payment information
                  </li>
                </ul>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mt-4 mb-2">
                  Still protected
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    Message content remains end-to-end encrypted — Ekko infrastructure stores only ciphertext
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    Your contact list and social graph remain on your device
                  </li>
                </ul>
              </div>

              {/* Managed Relay */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-accent-cyan">
                    Relay Subscription Service
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-medium">
                    Planned
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Subscribers would use Ekko-operated relay servers for faster
                  delivery, offline message queuing, and improved reliability.
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Additional data visible to Ekko
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    Your device&apos;s IP address when connecting to Ekko relay servers
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    Connection patterns — when you connect, how often, and how long
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    Message sizes and delivery timing metadata
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    Endpoint IDs of both parties in a relay connection
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    Subscription and payment information
                  </li>
                </ul>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mt-4 mb-2">
                  Still protected
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    Message content remains end-to-end encrypted — relay servers see only ciphertext
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    User identities — Ekko sees Endpoint IDs but does not have a mapping to real-world identities
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-background border border-border p-6">
              <h3 className="font-semibold mb-3">The free tier remains fully functional</h3>
              <p className="text-sm text-muted leading-relaxed">
                Managed services are entirely optional. All five transports and all
                encryption features work without a subscription. Subscribing trades
                some metadata visibility to Ekko-operated infrastructure in exchange
                for speed and reliability improvements. You can switch between the
                free decentralized tier and managed services at any time.
              </p>
            </div>
          </AnimatedSection>

          {/* Third-Party Services */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Third-Party Services
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ekko does not operate most of the infrastructure that carries your
              messages. The following third-party services are involved depending on
              which transport is active:
            </p>
            <div className="space-y-3">
              {[
                {
                  service: "BitTorrent Mainline DHT",
                  desc: "A decentralized network of thousands of independent nodes. No single operator controls it. Bootstrap nodes include router.bittorrent.com, router.utorrent.com, and others.",
                },
                {
                  service: "Tor Network",
                  desc: "A volunteer-operated anonymity network and its directory authorities. Ekko does not operate any Tor relays or directory servers.",
                },
                {
                  service: "n0.computer (iroh)",
                  desc: "Operates relay servers used as a fallback when direct peer-to-peer QUIC connections cannot be established. Their relay servers can see connection metadata but not message content.",
                },
              ].map((item) => (
                <div
                  key={item.service}
                  className="p-5 rounded-xl bg-surface border border-border"
                >
                  <h3 className="font-semibold text-accent-cyan mb-1">
                    {item.service}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted mt-4 leading-relaxed">
              Each of these services has its own privacy policy and data practices.
              Ekko&apos;s end-to-end encryption ensures that none of them can read your
              message content, but they may log connection metadata according to
              their own policies.
            </p>
          </AnimatedSection>

          {/* Data Retention */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Data Retention
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Ekko does not retain any user data on servers we control (outside of
                planned managed services described above). For the decentralized
                transports:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                  <span>DHT entries expire automatically after 48 hours across the network</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                  <span>BLE Gossip messages are held for up to 48 hours per relay device (50 MB limit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                  <span>Tor and QUIC connections are ephemeral — no messages are stored in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                  <span>Local message history on your device persists until you delete it or uninstall the app</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Law Enforcement */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Law Enforcement Requests
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Ekko&apos;s architecture means we have very little to provide in response
                to legal requests. We do not have access to message content, contact
                lists, or communication metadata for free-tier users. We cannot
                identify users because Ekko does not require accounts or collect
                personally identifiable information.
              </p>
              <p>
                For managed service subscribers, we may hold limited connection
                metadata and payment information, which could be subject to legal
                process. We will always notify affected users where legally permitted.
              </p>
            </div>
          </AnimatedSection>

          {/* Changes */}
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                We will update this policy as Ekko evolves — particularly as managed
                services are introduced. Material changes will be communicated
                through the app and on this page. The &ldquo;last updated&rdquo; date
                at the top of this page reflects the most recent revision.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
