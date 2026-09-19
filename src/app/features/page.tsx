import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./features.module.css";

const features = [
  {
    number: "01",
    title: "Courses",
    label: "LEARN",
    description:
      "Structured technology learning that helps you move through subjects with direction.",
    icon: "⌘",
    color: "blue",
  },
  {
    number: "02",
    title: "Interview Q&A",
    label: "PREPARE",
    description:
      "Focused technical questions and answers to help you prepare for interviews.",
    icon: "✦",
    color: "violet",
  },
  {
    number: "03",
    title: "Videos",
    label: "WATCH",
    description:
      "Visual learning resources for concepts that are easier to understand through explanation.",
    icon: "▶",
    color: "pink",
  },
  {
    number: "04",
    title: "Slideshows",
    label: "REVIEW",
    description:
      "Presentation-style resources for fast and clear visual revision.",
    icon: "▣",
    color: "orange",
  },
  {
    number: "05",
    title: "Audio",
    label: "LISTEN",
    description:
      "Audio resources that let you revisit learning material through listening.",
    icon: "◉",
    color: "green",
  },
];

export default function FeaturesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.blobOne} />
        <div className={styles.blobTwo} />
        <div className={styles.blobThree} />
      </div>

      <SiteHeader />

      <section className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introLabel}>
            <span>01</span>
            EVERYTHING YOU NEED
          </div>

          <h1>
            One platform.
            <br />
            <span>Every way to learn.</span>
          </h1>

          <p>
            SkillWave gives you multiple ways to learn technology,
            prepare for interviews and revisit what matters.
          </p>
        </div>

        <div className={styles.featureWall}>
          {features.map((feature, index) => (
            <Link
              href="/explore"
              key={feature.number}
              className={`${styles.card} ${
                styles[feature.color]
              } ${index === 0 ? styles.featured : ""}`}
            >
              <div className={styles.cardHeader}>
                <span>{feature.number}</span>
                <i>{feature.icon}</i>
                <b>↗</b>
              </div>

              <div className={styles.cardContent}>
                <small>{feature.label}</small>

                <h2>{feature.title}</h2>

                <p>{feature.description}</p>
              </div>

              <div className={styles.cardLine}>
                <span />
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomText}>
            <strong>05</strong>
            <span>LEARNING FORMATS</span>
          </div>

          <div className={styles.bottomMessage}>
            Learn the way that works for you.
          </div>

          <Link href="/how-it-works">
            How it works
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}