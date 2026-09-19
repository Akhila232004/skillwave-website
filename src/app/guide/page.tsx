import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./guide.module.css";

const learningPaths = [
  {
    number: "01",
    title: "Explore",
    text: "Discover technology subjects and learning resources.",
    icon: "⌁",
    className: "explore",
  },
  {
    number: "02",
    title: "Understand",
    text: "Build concepts through courses, videos and slideshows.",
    icon: "◈",
    className: "understand",
  },
  {
    number: "03",
    title: "Prepare",
    text: "Strengthen technical interview knowledge with Q&A.",
    icon: "✦",
    className: "prepare",
  },
  {
    number: "04",
    title: "Revisit",
    text: "Use audio and other resources to reinforce learning.",
    icon: "◉",
    className: "revisit",
  },
];

const resources = [
  {
    title: "Courses",
    label: "STRUCTURED",
    icon: "⌘",
  },
  {
    title: "Interview Q&A",
    label: "PRACTICE",
    icon: "✦",
  },
  {
    title: "Videos",
    label: "VISUAL",
    icon: "▶",
  },
  {
    title: "Slideshows",
    label: "REVIEW",
    icon: "▣",
  },
  {
    title: "Audio",
    label: "LISTEN",
    icon: "◉",
  },
];

export default function GuidePage() {
  return (
    <main className={styles.page}>
      {/* Decorative background */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.glowBlue} />
        <div className={styles.glowPurple} />
        <div className={styles.glowPink} />
        <div className={styles.grid} />
      </div>

      <SiteHeader />

      <section className={styles.content}>
        {/* Page heading */}
        <div className={styles.heading}>
          <div className={styles.headingLabel}>
            <span>SKILLWAVE GUIDE</span>
            <i />
            <small>START HERE</small>
          </div>

          <h1>
            Your learning
            <span>command center.</span>
          </h1>

          <p>
            Choose a learning direction, explore the right resources and keep
            moving toward your technology goals.
          </p>
        </div>

        {/* Main command center */}
        <div className={styles.commandCenter}>
          {/* Left side */}
          <div className={styles.mapArea}>
            <div className={styles.mapHeader}>
              <div>
                <small>LEARNING MAP</small>
                <strong>YOUR PATH</strong>
              </div>

              <span>05 RESOURCES</span>
            </div>

            <div className={styles.map}>
              <div className={styles.mapLines} aria-hidden="true">
                <span className={styles.lineHorizontal} />
                <span className={styles.lineVertical} />
                <span className={styles.lineDiagonalOne} />
                <span className={styles.lineDiagonalTwo} />
              </div>

              <div className={styles.centerNode}>
                <div className={styles.centerPulse} />
                <span>SW</span>
                <small>START</small>
              </div>

              {learningPaths.map((path, index) => (
                <div
                  key={path.number}
                  className={`${styles.pathNode} ${
                    styles[path.className]
                  } ${styles[`node${index + 1}`]}`}
                >
                  <div className={styles.nodeCircle}>
                    <span>{path.icon}</span>
                  </div>

                  <div className={styles.nodeText}>
                    <small>{path.number}</small>
                    <strong>{path.title}</strong>
                    <p>{path.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right resource panel */}
          <div className={styles.resourcePanel}>
            <div className={styles.resourceHeading}>
              <small>RESOURCE DECK</small>
              <strong>Pick your format</strong>
            </div>

            <div className={styles.resourceList}>
              {resources.map((resource, index) => (
                <Link
                  href="/explore"
                  className={styles.resource}
                  key={resource.title}
                >
                  <div className={styles.resourceNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className={styles.resourceIcon}>
                    {resource.icon}
                  </div>

                  <div className={styles.resourceText}>
                    <strong>{resource.title}</strong>
                    <span>{resource.label}</span>
                  </div>

                  <span className={styles.resourceArrow}>↗</span>
                </Link>
              ))}
            </div>

            <div className={styles.resourceFooter}>
              <span>LEARN YOUR WAY</span>
              <i />
              <b>SKILLWAVE</b>
            </div>
          </div>
        </div>

        {/* Bottom action */}
        <div className={styles.bottomBar}>
          <div className={styles.progress}>
            <div className={styles.progressNumber}>01</div>

            <div>
              <small>RECOMMENDED FIRST STEP</small>
              <strong>Start by exploring what interests you.</strong>
            </div>
          </div>

          <Link href="/features" className={styles.exploreButton}>
            Explore Features
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}