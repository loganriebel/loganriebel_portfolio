import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { profile } from "@/data/profile";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Logan Riebel | Marketing Analytics Engineer",
  description:
    "Portfolio for Logan Riebel, a marketing analytics engineer building GTM reporting systems, measurement workflows, and agentic analytics tools.",
  metadataBase: new URL("https://loganriebel.com"),
  icons: {
    icon: [
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [
      { url: "/icons/apple-icon-180.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "Logan Riebel | Marketing Analytics Engineer",
    description:
      "Marketing analytics, GTM reporting, and agentic workflow portfolio.",
    url: "https://loganriebel.com",
    siteName: "Logan Riebel Portfolio",
    images: [
      {
        url: "/assets/headshot.jpg",
        width: 1200,
        height: 1200,
        alt: "Logan Riebel headshot"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link className="brand" href="/">
            {profile.name}
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/">Experience</Link>
            <Link href="/work">Work</Link>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div>
            <p>Ready to talk marketing analytics, GTM systems, or agentic workflows?</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="footer-links">
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
