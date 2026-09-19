"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./login.module.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
        <div className={styles.grid} />
      </div>

      <SiteHeader />

      <section className={styles.content}>
        {/* LEFT BRAND SECTION */}
        <div className={styles.brandSide}>
          <div className={styles.brandLabel}>
            <span>WELCOME BACK</span>
            <i />
          </div>

          <h1>
            Continue
            <span>learning.</span>
          </h1>

          <p>
            Return to your SkillWave workspace and continue learning,
            reviewing and preparing for your technology career.
          </p>

          <div className={styles.brandVisual}>
            <div
              className={`${styles.visualRing} ${styles.ringOne}`}
            />

            <div
              className={`${styles.visualRing} ${styles.ringTwo}`}
            />

            <div className={styles.visualCore}>
              <strong>SW</strong>
              <span>SKILLWAVE</span>
            </div>

            <div
              className={`${styles.floatingTag} ${styles.tagOne}`}
            >
              <span>01</span>
              COURSES
            </div>

            <div
              className={`${styles.floatingTag} ${styles.tagTwo}`}
            >
              <span>02</span>
              INTERVIEW Q&amp;A
            </div>

            <div
              className={`${styles.floatingTag} ${styles.tagThree}`}
            >
              <span>03</span>
              VIDEOS
            </div>
          </div>
        </div>

        {/* LOGIN FORM SECTION */}
        <div className={styles.formSide}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <div>
                <small>SKILLWAVE ACCOUNT</small>
                <h2>Log in</h2>
              </div>

              <span>01</span>
            </div>

            <form onSubmit={handleSubmit}>
              {/* EMAIL */}
              <label>
                <span>Email</span>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              {/* PASSWORD */}
              <label>
                <span>Password</span>

                <div className={styles.passwordField}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    className={styles.passwordToggle}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </label>

              {/* FORM OPTIONS */}
              <div className={styles.formOptions}>
                <label className={styles.remember}>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className={styles.forgot}
                >
                  Forgot password?
                </button>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className={styles.submit}
              >
                Log in to SkillWave
                <span>↗</span>
              </button>
            </form>

            {/* DIVIDER */}
            <div className={styles.divider}>
              <span />
              <small>NEW TO SKILLWAVE?</small>
              <span />
            </div>

            {/* GET STARTED */}
            <Link
              href="/get-started"
              className={styles.createAccount}
            >
              Get started
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}