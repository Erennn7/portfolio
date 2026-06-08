import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Samarth Kolarkar — Engineer, Builder, Co-Founder",
  description: "Personal homepage of Samarth Kolarkar. 20-year-old engineer, co-founder of Nexentia, hackathon winner, and open-source contributor. Interested in AI agents, systems, and startups.",
  keywords: [
    "Samarth Kolarkar",
    "Nexentia",
    "Walchand Institute of Technology",
    "Software Engineer",
    "AI Agents",
    "stdlib-js",
    "Open Source",
    "Hackathon Winner"
  ],
  authors: [{ name: "Samarth Kolarkar" }],
  openGraph: {
    title: "Samarth Kolarkar — Engineer, Builder, Co-Founder",
    description: "Personal homepage of Samarth Kolarkar. 20-year-old engineer, co-founder of Nexentia, hackathon winner, and open-source contributor.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Samarth Kolarkar — Engineer, Builder, Co-Founder",
    description: "Personal homepage of Samarth Kolarkar. 20-year-old engineer, co-founder of Nexentia, hackathon winner, and open-source contributor.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans selection:bg-foreground/10 selection:text-foreground">
        <div className="max-w-[760px] mx-auto px-6 py-12 md:py-24 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
