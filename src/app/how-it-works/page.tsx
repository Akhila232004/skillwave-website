import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./how-it-works.module.css";

const steps = [
  {
    number: "01",
    title: "Choose",
    subtitle: "Find your direction",
    description:
      "Start with the technology subject or learning resource you want to explore.",
    tag: "DISCOVER",
  },
  {
    number: "02",
    title: "Learn",
    subtitle: "Build understanding",
    description:
      "Use courses, videos, slideshows and audio resources to understand concepts.",
    tag: "LEARN",
  },
  {
    number: "03",
    title: "Practice",
    subtitle: "Test your knowledge",
    description:
      "Use technical interview questions and answers to strengthen your preparation.",
    tag: "PRACTICE",
  },
  {
    number: "04",
    title: "Grow",
    subtitle: "Move forward",
    description:
      "Keep revisiting useful resources and build confidence for your technology career.",
    tag: "PROGRESS",
  },
];

export default function HowItWorksPage() {
  return (
    <main className={styles.page}>
      {/* Background */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
        <div className={styles.glowThree} />
        <div className={styles.noise} />
      </div>

      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <section className={styles.content}>
        {/* Intro */}
        <div className={styles.intro}>
          <div className={styles.eyebrow}>
            <span>HOW SKILLWAVE WORKS</span>
            <i />
          </div>

          <h1>
            From curiosity
            <span>to confidence.</span>
          </h1>

          <p>
            A simple learning flow designed to help you discover technology,
            understand concepts, practise your knowledge and keep growing.
          </p>
        </div>

        {/* Learning Journey */}
        <div className={styles.journey}>
          <div className={styles.journeyLine} aria-hidden="true">
            <span />
          </div>

          {steps.map((step, index) => (
            <div
              className={`${styles.step} ${
                index % 2 === 0 ? styles.stepLeft : styles.stepRight
              }`}
              key={step.number}
            >
              {/* Number Marker */}
              <div className={styles.stepMarker}>
                <span>{step.number}</span>
              </div>

              {/* Step Information */}
              <div className={styles.stepContent}>
                <div className={styles.stepTop}>
                  <small>{step.tag}</small>
                  <span>{step.number}</span>
                </div>

                <h2>{step.title}</h2>

                <strong>{step.subtitle}</strong>

                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SkillWave Learning Loop */}
        <div className={styles.bottomPanel}>
          <div className={styles.loopVisual}>
            <div className={styles.loopRing}>
              <span>SW</span>
            </div>

            <div
              className={`${styles.loopDot} ${styles.loopDotOne}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.loopDot} ${styles.loopDotTwo}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.loopDot} ${styles.loopDotThree}`}
              aria-hidden="true"
            />
          </div>

          <div className={styles.bottomCopy}>
            <small>THE SKILLWAVE LOOP</small>

            <h3>
              Learn.
              <span>Practise.</span>
              Repeat.
            </h3>

            <p>
              Keep moving between learning and preparation as your skills
              develop.
            </p>
          </div>

          <Link href="/get-started" className={styles.startButton}>
            Start Learning
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}