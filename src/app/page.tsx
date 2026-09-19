import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./home.module.css";

const learningModes = [
  {
    number: "01",
    title: "Courses",
    text: "Structured technology learning.",
    className: "blue",
  },
  {
    number: "02",
    title: "Interview Q&A",
    text: "Prepare with technical questions.",
    className: "violet",
  },
  {
    number: "03",
    title: "Videos",
    text: "Understand concepts visually.",
    className: "pink",
  },
  {
    number: "04",
    title: "Slideshows",
    text: "Review ideas quickly.",
    className: "orange",
  },
  {
    number: "05",
    title: "Audio",
    text: "Learn wherever you are.",
    className: "green",
  },
];

const previewItems = [
  {
    number: "01",
    title: "Courses",
    description: "Structured learning",
    icon: "⌘",
    className: "blue",
  },
  {
    number: "02",
    title: "Interview Q&A",
    description: "Technical preparation",
    icon: "✦",
    className: "violet",
  },
  {
    number: "03",
    title: "Videos",
    description: "Visual learning",
    icon: "▶",
    className: "pink",
  },
  {
    number: "04",
    title: "Slideshows",
    description: "Quick revision",
    icon: "▣",
    className: "orange",
  },
  {
    number: "05",
    title: "Audio",
    description: "Learn by listening",
    icon: "◉",
    className: "green",
  },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* BACKGROUND */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gradientOne} />
        <div className={styles.gradientTwo} />
        <div className={styles.gradientThree} />
        <div className={styles.grid} />
      </div>

      {/* HEADER */}
      <SiteHeader />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <span />
            TECH LEARNING PLATFORM
          </div>

          <h1>
            Learn.
            <span>Prepare.</span>
            <strong>Grow.</strong>
          </h1>

          <p className={styles.tagline}>
            Your complete learning workspace for tech careers.
          </p>

          <p className={styles.description}>
            SkillWave brings courses, interview questions, videos,
            slideshows and audio resources together so you can learn
            technology and prepare for technical interviews in one place.
          </p>

          <div className={styles.actions}>
            <Link href="/get-started" className={styles.primaryButton}>
              Start Learning
              <span>↗</span>
            </Link>

            <Link href="/features" className={styles.secondaryButton}>
              Explore Features
              <span>→</span>
            </Link>
          </div>

          <div className={styles.heroMeta}>
            <div>
              <strong>05</strong>
              <span>LEARNING FORMATS</span>
            </div>

            <i />

            <div>
              <strong>01</strong>
              <span>FOCUSED WORKSPACE</span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className={styles.heroRight}>
          <div className={styles.orbit} aria-hidden="true" />
          <div
            className={`${styles.orbit} ${styles.orbitTwo}`}
            aria-hidden="true"
          />

          <div className={styles.workspaceCard}>
            <div className={styles.cardTop}>
              <div>
                <span>SKILLWAVE</span>
                <strong>LEARNING SPACE</strong>
              </div>

              <div className={styles.liveDot}>
                <i />
                READY
              </div>
            </div>

            <div className={styles.bigStatement}>
              <small>YOUR NEXT SKILL</small>

              <strong>
                START
                <br />
                HERE<span>.</span>
              </strong>
            </div>

            <div className={styles.modeGrid}>
              {learningModes.map((mode) => (
                <Link
                  href="/explore"
                  key={mode.number}
                  className={`${styles.modeCard} ${
                    styles[mode.className as keyof typeof styles]
                  }`}
                >
                  <div className={styles.modeNumber}>{mode.number}</div>

                  <div className={styles.modeIcon}>
                    {mode.number === "01" && "⌘"}
                    {mode.number === "02" && "✦"}
                    {mode.number === "03" && "▶"}
                    {mode.number === "04" && "▣"}
                    {mode.number === "05" && "◉"}
                  </div>

                  <div className={styles.modeInfo}>
                    <strong>{mode.title}</strong>
                    <span>{mode.text}</span>
                  </div>

                  <b>↗</b>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className={styles.productPreview}>
        <div className={styles.previewIntro}>
          <div className={styles.previewLabel}>
            <span>INSIDE SKILLWAVE</span>
            <i />
          </div>

          <h2>
            One workspace.
            <span>Every way to learn.</span>
          </h2>

          <p>
            Explore the different learning formats available inside
            SkillWave and choose the way that works best for you.
          </p>
        </div>

        <div className={styles.productWindow}>
          <div className={styles.windowHeader}>
            <div className={styles.windowBrand}>
              <span className={styles.windowMark}>SW</span>

              <div>
                <strong>SkillWave</strong>
                <small>LEARNING PLATFORM</small>
              </div>
            </div>

            <div className={styles.windowStatus}>
              <span />
              LEARNING WORKSPACE
            </div>
          </div>

          <div className={styles.windowBody}>
            <aside className={styles.previewSidebar}>
              <small>EXPLORE</small>

              {previewItems.map((item, index) => (
                <div
                  key={item.number}
                  className={`${styles.sidebarItem} ${
                    index === 0 ? styles.sidebarActive : ""
                  }`}
                >
                  <span>{item.number}</span>

                  <div
                    className={`${styles.sidebarIcon} ${
                      styles[item.className as keyof typeof styles]
                    }`}
                  >
                    {item.icon}
                  </div>

                  <strong>{item.title}</strong>
                </div>
              ))}
            </aside>

            <div className={styles.previewMain}>
              <div className={styles.previewMainTop}>
                <div>
                  <small>LEARNING DASHBOARD</small>
                  <h3>Choose your next direction.</h3>
                </div>

                <span>SKILLWAVE / 01</span>
              </div>

              <div className={styles.previewHeroCard}>
                <div className={styles.previewCardCopy}>
                  <small>START LEARNING</small>

                  <strong>
                    Build your
                    <span>technology skills.</span>
                  </strong>

                  <p>
                    Explore courses and learning resources designed
                    for technology-focused learning.
                  </p>

                  <Link href="/features">
                    Explore resources
                    <span>↗</span>
                  </Link>
                </div>

                <div className={styles.previewGraphic} aria-hidden="true">
                  <div className={styles.graphicCircle}>
                    <span>SW</span>
                  </div>

                  <div className={styles.graphicOrbit} />
                  <div className={styles.graphicDotOne} />
                  <div className={styles.graphicDotTwo} />
                  <div className={styles.graphicDotThree} />
                </div>
              </div>

              <div className={styles.previewCards}>
                <div className={styles.miniCard}>
                  <span>01</span>
                  <strong>Learn</strong>
                  <small>Courses &amp; resources</small>
                </div>

                <div className={styles.miniCard}>
                  <span>02</span>
                  <strong>Prepare</strong>
                  <small>Interview Q&amp;A</small>
                </div>

                <div className={styles.miniCard}>
                  <span>03</span>
                  <strong>Review</strong>
                  <small>Visual &amp; audio formats</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.previewBottom}>
          <span>LEARN</span>
          <i />
          <span>PREPARE</span>
          <i />
          <span>GROW</span>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.homeCta}>
        <div>
          <small>READY WHEN YOU ARE</small>

          <h2>
            Your next skill
            <span>starts here.</span>
          </h2>
        </div>

        <Link href="/get-started" className={styles.ctaButton}>
          Get Started
          <span>↗</span>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div>
          <span className={styles.footerMark}>SW</span>
          <strong>SkillWave</strong>
        </div>

        <span>LEARN TECHNOLOGY. BUILD YOUR CAREER.</span>

        <Link href="/how-it-works">
          How it works
          <b>→</b>
        </Link>
      </footer>
    </main>
  );
}