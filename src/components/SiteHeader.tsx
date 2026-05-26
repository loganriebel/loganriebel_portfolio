"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const SCROLL_THRESHOLD = 24;

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isWorkPage = pathname === "/work" || pathname.startsWith("/work/");

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}`}
    >
      <Link className="brand" href="/">
        {profile.name}
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#experience">Experience</Link>
        <Link
          href="/work"
          aria-current={isWorkPage ? "page" : undefined}
          className={isWorkPage ? "is-active" : undefined}
        >
          Work
        </Link>
        <a href={profile.linkedin}>LinkedIn</a>
        <a href={profile.github}>GitHub</a>
      </nav>
    </header>
  );
}
