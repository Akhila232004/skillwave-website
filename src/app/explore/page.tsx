import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./explore.module.css";

const technologyAreas = [
  {
    number: "01",
    title: "Programming",
    description:
      "Build and strengthen your understanding of programming concepts and development fundamentals.",
    icon: "</>",
    className: "blue",
  },
  {
    number: "02",
    title: "Web Technologies",
    description:
      "Explore technologies and concepts used to create modern web experiences and applications.",
    icon: "◫",
    className: "violet",
  },
  {
    number: "03",
    title: "Data & AI",
    description:
      "Develop knowledge around data-focused technologies and modern intelligent systems.",
    icon: "✦",
    className: "pink",
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    description:
      "Explore concepts connected with cloud platforms, development workflows and deployment.",
    icon: "⌁",
    className: "orange",
  },
  {
    number: "05",
    title: "Databases",
    description:
      "Build a stronger understanding of storing, managing and working with application data.",
    icon: "▤",
    className: "green",
  },
  {
    number: "06",
    title: "Interview Preparation",
    description:
      "Strengthen technical knowledge through focused interview questions and answers.",
    icon: "✧",
    className: "purple",
  },
];

const learningFormats = [
  {
    number: "01",
    title: "Courses",
    text: "Structured learning",
  },
  {
    number: "02",
    title: "Interview Q&A",
    text: "Technical preparation",
  },
  {
    number: "03",
    title: "Videos",
    text: "Visual learning",
  },
  {
    number: "04",
    title: "Slideshows",
    text: "Quick review",
  },
  {
    number: "05",
    title: "Audio",
    text: "Learn by listening",
  },
];

export default function ExplorePage() {
  return (
    <main className={styles.page}>
      {/* BACKGROUND */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
        <div className={styles.glowThree} />
        <div className={styles.grid} />
      </div>

      {/* HEADER */}
      <SiteHeader />

      <section className={styles.content}>
        {/* PAGE INTRO */}
        <div className={styles.intro}>
          <div className={styles.introLabel}>
            <span>SKILLWAVE EXPLORE</span>
            <i />
            <small>DISCOVER YOUR DIRECTION</small>
          </div>

          <h1>
            Find what you want
            <span>to learn next.</span>
          </h1>

          <p>
            Explore broad technology areas and choose a direction that matches
            what you want to understand, practise or prepare for.
          </p>
        </div>

        {/* TECHNOLOGY AREAS */}
        <section className={styles.areaSection}>
          <div className={styles.sectionHeading}>
            <div>
              <small>01 — TECHNOLOGY AREAS</small>
              <h2>Start with an area.</h2>
            </div>

            <span>
              EXPLORE
              <br />
              LEARN
              <br />
              GROW
            </span>
          </div>

          <div className={styles.areaGrid}>
            {technologyAreas.map((area) => (
              <Link
                href="/features"
                key={area.number}
                className={`${styles.areaCard} ${
                  styles[area.className as keyof typeof styles]
                }`}
              >
                <div className={styles.areaTop}>
                  <span>{area.number}</span>

                  <div className={styles.areaIcon}>{area.icon}</div>

                  <b>↗</b>
                </div>

                <div className={styles.areaBody}>
                  <small>TECHNOLOGY AREA</small>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>
                </div>

                <div className={styles.areaFooter}>
                  <span>EXPLORE</span>
                  <i />
                  <strong>{area.number}</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* LEARNING FORMAT SELECTOR */}
        <section className={styles.formatSection}>
          <div className={styles.formatIntro}>
            <small>02 — CHOOSE YOUR FORMAT</small>

            <h2>
              Learn it
              <span>your way.</span>
            </h2>

            <p>
              Once you know what you want to explore, choose the learning
              format that works best for you.
            </p>
          </div>

          <div className={styles.formatPanel}>
            <div className={styles.formatPanelTop}>
              <span>SKILLWAVE RESOURCE DECK</span>
              <small>05 FORMATS</small>
            </div>

            <div className={styles.formatList}>
              {learningFormats.map((format, index) => (
                <Link
                  href="/features"
                  key={format.number}
                  className={
                    index === 0
                      ? `${styles.formatItem} ${styles.formatActive}`
                      : styles.formatItem
                  }
                >
                  <span>{format.number}</span>

                  <div>
                    <strong>{format.title}</strong>
                    <small>{format.text}</small>
                  </div>

                  <b>→</b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL EXPLORATION CTA */}
        <section className={styles.exploreCta}>
          <div>
            <small>KEEP EXPLORING</small>

            <h2>
              Learn with
              <span>SkillWave.</span>
            </h2>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/features" className={styles.secondaryButton}>
              View Features
              <span>→</span>
            </Link>

            <Link href="/get-started" className={styles.primaryButton}>
              Get Started
              <span>↗</span>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}