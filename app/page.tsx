export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          Fintech Risk Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict Stripe Account Suspension{" "}
          <span className="text-[#58a6ff]">Before It Happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe account and get real-time risk scores, velocity alerts, and actionable recommendations — so you never wake up to a frozen account.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Protecting My Account — $99/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Risk indicators strip */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            ["Transaction Velocity", "Detect unusual spikes before Stripe does"],
            ["Chargeback Score", "ML-powered dispute risk per transaction"],
            ["Pattern Anomalies", "Flag behaviors that trigger manual reviews"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$99</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time Stripe risk dashboard",
              "Transaction velocity monitoring",
              "ML chargeback risk scoring",
              "Instant email + Slack alerts",
              "Actionable suspension prevention tips",
              "Unlimited transaction history sync",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does it connect to my Stripe account?",
              "You authorize read-only access via Stripe OAuth. We never store your secret keys and cannot move funds — only read transaction data.",
            ],
            [
              "What counts as a high-risk signal?",
              "We monitor chargeback ratios, refund velocity, unusual geographic patterns, rapid volume spikes, and over 30 other indicators Stripe uses internally.",
            ],
            [
              "Can this guarantee my account won't be suspended?",
              "No tool can guarantee that, but early detection gives you time to act. Most suspensions follow weeks of warning signals — we surface those signals first.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2 text-sm">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Stripe Risk Predictor. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  );
}
