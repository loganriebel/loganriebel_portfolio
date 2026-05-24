import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Link from "next/link";
import { PersonSchema } from "@/components/PersonSchema";
import "./globals.css";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Logan Riebel | Marketing Analytics Engineer",
  description:
    "Portfolio for Logan Riebel, a marketing analytics engineer building GTM reporting systems, measurement workflows, and agentic analytics tools.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl
  },
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
      <body className={lato.variable}>
        <PersonSchema />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link className="brand" href="/">
            {profile.name}
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/#experience">Experience</Link>
            <Link href="/work">Work</Link>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div>
            <p>Hiring for marketing analytics or GTM systems? Email works best.</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="footer-links">
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
            <Link href="/work">Work</Link>
            <Link href="/#experience">Experience</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
