import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <div className={styles.hero_syme} data-theme="dark">
      <div className={styles.heroInner_VWeJ}>
        <div className={styles.heroContentRow}>
          <div className={styles.heroTextCol}>
            <h1>
              DryEyeNet follows the <b>STFD</b> Principle
            </h1>
            <span className="explaText">
              DryEyeNet is built on three core principles: Ease of Use, Data
              Entry Reliability, and Speed.
              <br />
              The Single Task Flow Design (STFD) places each task at the center
              of the experience, ensuring a reliable, fast, and intuitive
              workflow. Available tasks vary depending on the software version
              and the user role.
            </span>

            <div className={styles.indexCtas_hUA_}>
              <a className="button button--primary" href="/docs/intro">
                Begin with the Documentation
              </a>
            </div>

            <span className="addedText">
              <b>Need direct help?</b> Contact us at support@dryeyenet.com or
              +34 630 90 66 82
            </span>
          </div>
          <div className={styles.heroImageCol}>
            <img
              alt="DryEyeNet platform overview"
              className={styles.heroLogo_jM6J}
              width="500"
              src="/img/homeImage.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="DryEyeNet Documentation"
      description="Official documentation for DryEyeNet"
    >
      <HomepageHeader />
      <main>
        <section className={clsx("container", styles.section)}>
          <Heading as="h2" className="versionsTitle">
            The <span className="brand">DryEyeNet</span> Platform
          </Heading>
          <div className={styles.featureGrid}>
            {[
              {
                icon: "/img/versions/opto.png",
                title: "Opto",
                text: "Version for Pre-Treatment Centers.",
                href: "/docs/platform/opto",
              },
              {
                icon: "/img/versions/opto-plus.png",
                title: "Opto Plus",
                text: "Version for Reading Centers.",
                href: "/docs/platform/opto-plus",
              },
              {
                icon: "/img/versions/care.png",
                title: "Care",
                text: "Version for Care Providers.",
                href: "/docs/platform/care",
              },
              {
                icon: "/img/versions/ophtha.png",
                title: "Ophtha",
                text: "Version for Solo Ophthalmologists.",
                href: "/docs/platform/ophtha",
              },
            ].map((block, idx) => (
              <a key={idx} className={styles.featureBlock} href={block.href}>
                <div className={styles.featureTitle}>
                  <img
                    src={block.icon}
                    alt=""
                    className={styles.featureIcon}
                    width={64}
                  />
                </div>
                <b>{block.title}:</b>
                <p>{block.text}</p>
                <span className="learnMore">Go to Docs</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
