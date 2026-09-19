import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./get-started.module.css";

const steps = [
  {
    number: "01",
    title: "Explore",
    text: "Find technology subjects and resources that match what you want to learn.",
  },
  {
    number: "02",
    title: "Learn",
    text: "Use courses, videos, slideshows and audio to build your understanding.",
  },
  {
    number: "03",
    title: "Prepare",
    text: "Use technical interview questions and answers to strengthen your preparation.",
  },
];

export default function GetStartedPage() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.glowBlue} />
        <div className={styles.glowPurple} />
        <div className={styles.glowPink} />
        <div className={styles.grid} />
      </div>

      <SiteHeader />

      <section className={styles.content}>
        {/* Left introduction */}
        <div className={styles.intro}>
          <div className={styles.label}>
            <span>SKILLWAVE</span>
            <i />
            <small>GET STARTED</small>
          </div>

          <h1>
            Your next
            <span>skill starts here.</span>
          </h1>

          <p>
            Explore technology learning resources, build your knowledge and
            prepare for technical interviews from one focused workspace.
          </p>

          <div className={styles.quickLinks}>
            <Link href="/features">
              <span>01</span>
              Explore features
              <b>↗</b>
            </Link>

            <Link href="/guide">
              <span>02</span>
              See the learning guide
              <b>↗</b>
            </Link>
          </div>
        </div>

        {/* Right onboarding panel */}
        <div className={styles.launchPanel}>
          <div className={styles.panelTop}>
            <div>
              <small>YOUR LEARNING JOURNEY</small>
              <strong>START HERE</strong>
            </div>

            <span>03 STEPS</span>
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div
                className={`${styles.step} ${
                  index === 1 ? styles.stepActive : ""
                }`}
                key={step.number}
              >
                <div className={styles.stepNumber}>{step.number}</div>

                <div className={styles.stepBody}>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>

                <div className={styles.stepArrow}>→</div>
              </div>
            ))}
          </div>

          <div className={styles.launchBottom}>
            <div className={styles.launchIdentity}>
              <span>SW</span>
              <div>
                <strong>SkillWave</strong>
                <small>TECH LEARNING PLATFORM</small>
              </div>
            </div>

            <Link href="/log-in" className={styles.launchButton}>
              Enter SkillWave
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}