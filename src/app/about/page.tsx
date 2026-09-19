import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./about.module.css";

const values = [
  {
    number: "01",
    title: "Learn",
    text: "Build technology knowledge through focused learning resources.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Strengthen technical interview knowledge through focused Q&A.",
  },
  {
    number: "03",
    title: "Progress",
    text: "Keep revisiting useful resources as your skills develop.",
  },
];

const audiences = [
  {
    number: "01",
    title: "Students",
    label: "BUILD FOUNDATIONS",
    description:
      "Explore technology subjects and build your understanding through different learning formats.",
    icon: "◈",
    className: "student",
  },
  {
    number: "02",
    title: "Technology Professionals",
    label: "KEEP LEARNING",
    description:
      "Revisit concepts, explore learning resources and continue developing your technology knowledge.",
    icon: "⌘",
    className: "professional",
  },
  {
    number: "03",
    title: "Interview Candidates",
    label: "PREPARE WITH FOCUS",
    description:
      "Use technical interview questions and answers to strengthen your interview preparation.",
    icon: "✦",
    className: "interview",
  },
  {
    number: "04",
    title: "Continuous Learners",
    label: "LEARN YOUR WAY",
    description:
      "Switch between courses, videos, slideshows and audio depending on how you want to learn.",
    icon: "◉",
    className: "continuous",
  },
];

const faqs = [
  {
    number: "01",
    question: "What is SkillWave?",
    answer:
      "SkillWave is a learning platform for students and technology professionals. It brings courses, interview questions, videos, slideshows and audio resources together for technology learning and technical interview preparation.",
  },
  {
    number: "02",
    question: "Who is SkillWave for?",
    answer:
      "SkillWave is designed for students, technology professionals, interview candidates and continuous learners who want to build or strengthen their technology knowledge.",
  },
  {
    number: "03",
    question: "What learning resources are available?",
    answer:
      "SkillWave provides five main learning formats: Courses, Interview Q&A, Videos, Slideshows and Audio resources.",
  },
  {
    number: "04",
    question: "Can SkillWave help with technical interview preparation?",
    answer:
      "Yes. SkillWave includes technical interview questions and answers designed to help learners practise and strengthen their interview preparation.",
  },
  {
    number: "05",
    question: "Can I choose how I learn?",
    answer:
      "Yes. SkillWave brings multiple learning formats together, allowing you to use structured courses, visual resources, slideshows, audio and interview Q&A according to your learning needs.",
  },
  {
    number: "06",
    question: "Where can I access the actual learning resources?",
    answer:
      "The SkillWave website is the product and entry experience. The actual learning resources and learning experience are provided through the SkillWave application.",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
        <div className={styles.glowThree} />
        <div className={styles.grid} />
      </div>

      <SiteHeader />

      <section className={styles.content}>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.heroLabel}>
            <span>ABOUT SKILLWAVE</span>
            <i />
          </div>

          <h1>
            Technology learning,
            <span>without the noise.</span>
          </h1>

          <p>
            SkillWave is a learning platform for students and technology
            professionals who want learning and interview preparation in one
            focused workspace.
          </p>
        </div>

        {/* STORY */}
        <div className={styles.story}>
          <div className={styles.storyVisual}>
            <div className={styles.visualTop}>
              <span>SKILLWAVE</span>
              <small>LEARNING PLATFORM</small>
            </div>

            <div className={styles.visualText}>
              <span>LEARN</span>
              <strong>TECH.</strong>
              <strong>BUILD.</strong>
              <strong>GROW.</strong>
            </div>

            <div className={styles.visualOrbit}>
              <div className={styles.orbitOuter} />
              <div className={styles.orbitMiddle} />

              <div className={styles.orbitInner}>
                <span>SW</span>
              </div>
            </div>

            <div className={styles.visualFooter}>
              <span>01</span>
              <i />
              <span>SKILLWAVE</span>
            </div>
          </div>

          <div className={styles.storyCopy}>
            <div className={styles.copyLabel}>
              <span>OUR APPROACH</span>
              <b>01</b>
            </div>

            <h2>
              Everything you need
              <span>in one place.</span>
            </h2>

            <p>
              SkillWave brings together different learning formats so you can
              choose how you want to learn. Explore technology subjects,
              understand concepts, review visual material, listen to resources
              and prepare with technical interview questions.
            </p>

            <div className={styles.values}>
              {values.map((value) => (
                <div className={styles.value} key={value.number}>
                  <span>{value.number}</span>

                  <div>
                    <strong>{value.title}</strong>
                    <p>{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AUDIENCE */}
        <section className={styles.audienceSection}>
          <div className={styles.audienceHeading}>
            <div className={styles.audienceLabel}>
              <span>WHO IS SKILLWAVE FOR?</span>
              <i />
            </div>

            <h2>
              Built for people
              <span>building technology careers.</span>
            </h2>

            <p>
              Whether you are starting your technology journey or preparing
              for your next opportunity, SkillWave gives you different ways
              to learn and prepare.
            </p>
          </div>

          <div className={styles.audienceGrid}>
            {audiences.map((audience) => (
              <article
                key={audience.number}
                className={`${styles.audienceCard} ${
                  styles[audience.className as keyof typeof styles]
                }`}
              >
                <div className={styles.audienceTop}>
                  <span>{audience.number}</span>

                  <div className={styles.audienceIcon}>
                    {audience.icon}
                  </div>

                  <b>↗</b>
                </div>

                <div className={styles.audienceBody}>
                  <small>{audience.label}</small>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </div>

                <div className={styles.audienceLine} />
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.faqIntro}>
            <div className={styles.faqLabel}>
              <span>QUICK ANSWERS</span>
              <i />
            </div>

            <h2>
              Questions?
              <span>Start here.</span>
            </h2>

            <p>
              A quick guide to SkillWave, its learning formats and who it is
              designed to help.
            </p>

            <div className={styles.faqIndex}>
              <strong>06</strong>
              <span>COMMON QUESTIONS</span>
            </div>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details className={styles.faqItem} key={faq.number}>
                <summary>
                  <span className={styles.faqNumber}>{faq.number}</span>

                  <strong>{faq.question}</strong>

                  <span className={styles.faqIcon}>+</span>
                </summary>

                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* IDENTITY */}
        <div className={styles.identity}>
          <div className={styles.identityMain}>
            <small>THE SKILLWAVE IDEA</small>

            <strong>
              One workspace.
              <span>Many ways to learn.</span>
            </strong>
          </div>

          <div className={styles.identityStats}>
            <div>
              <strong>05</strong>
              <span>LEARNING FORMATS</span>
            </div>

            <div>
              <strong>01</strong>
              <span>FOCUSED PLATFORM</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>ROOM TO GROW</span>
            </div>
          </div>

          <Link href="/get-started" className={styles.cta}>
            Get Started
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}