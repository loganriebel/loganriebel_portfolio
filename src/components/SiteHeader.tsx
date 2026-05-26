"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const SCROLL_THRESHOLD = 24;

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkPage = pathname === "/work" || pathname.startsWith("/work/");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const headerClass = [
    "site-header",
    isScrolled ? "is-scrolled" : "",
    menuOpen ? "is-menu-open" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="site-header-bar">
        <Link className="brand" href="/" onClick={closeMenu}>
          {profile.name}
        </Link>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " is-active" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="site-nav"
        className={menuOpen ? "is-open" : undefined}
        aria-label="Main navigation"
      >
        <Link href="/#experience" onClick={closeMenu}>
          Experience
        </Link>
        <Link
          href="/work"
          onClick={closeMenu}
          aria-current={isWorkPage ? "page" : undefined}
          className={isWorkPage ? "is-active" : undefined}
        >
          Work
        </Link>
        <a href={profile.linkedin} onClick={closeMenu}>
          LinkedIn
        </a>
        <a href={profile.github} onClick={closeMenu}>
          GitHub
        </a>
      </nav>
    </header>
  );
}
