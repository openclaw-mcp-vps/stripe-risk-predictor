import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Risk Predictor — Predict Account Suspension Before It Happens",
  description: "Analyze transaction patterns and flag behaviors that commonly trigger Stripe account reviews. Protect your revenue with real-time risk assessments."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="37ee68c6-d7d2-4b62-b381-61176536dccd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
