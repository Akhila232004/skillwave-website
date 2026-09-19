"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Guide", href: "/guide" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link
          href="/"
          className="site-brand"
          aria-label="SkillWave home"
        >
          {/* TinitiateAI logo */}
          <div className="tinitiate-logo-wrap">
            <Image
              src="/images/TinitiateLogoLight.png"
              alt="TinitiateAI"
              width={145}
              height={42}
              priority
              className="site-logo"
            />
          </div>

          <div className="brand-divider" />

          <div className="skillwave-name">
            <strong>SkillWave</strong>
            <span>LEARNING PLATFORM</span>
          </div>
        </Link>

        <nav
          className="desktop-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                href={item.href}
                key={item.href}
                className={active ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="desktop-actions">
          <Link href="/log-in" className="header-login">
            Login
          </Link>

          <Link href="/get-started" className="header-start">
            Get Started
            <span className="button-arrow">↗</span>
          </Link>
        </div>

        <button
          type="button"
          className={
            menuOpen
              ? "mobile-menu-button open"
              : "mobile-menu-button"
          }
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={
          menuOpen
            ? "mobile-menu open"
            : "mobile-menu"
        }
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-label">
            <span>Navigation</span>
            <small>01 — 04</small>
          </div>

          <nav
            className="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {navigation.map((item, index) => {
              const active = pathname === item.href;

              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={
                    active
                      ? "mobile-nav-link active"
                      : "mobile-nav-link"
                  }
                >
                  <span className="mobile-nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{item.label}</strong>

                  <span className="mobile-nav-arrow">↗</span>
                </Link>
              );
            })}
          </nav>

          <div className="mobile-menu-actions">
            <Link
              href="/log-in"
              className="mobile-login"
            >
              Login
            </Link>

            <Link
              href="/get-started"
              className="mobile-start"
            >
              Get Started
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}