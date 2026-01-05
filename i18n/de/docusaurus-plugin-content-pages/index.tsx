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
              DryEyeNet folgt dem <b>STFD</b>-Prinzip
            </h1>
            <span className="explaText">
              DryEyeNet basiert auf drei Kernprinzipien: Benutzerfreundlichkeit,
              Zuverlässigkeit der Dateneingabe und Geschwindigkeit.
              <br />
              Das Single Task Flow Design (STFD) stellt jede Aufgabe in den
              Mittelpunkt des Erlebnisses und sorgt für einen zuverlässigen,
              schnellen und intuitiven Arbeitsablauf. Verfügbare Aufgaben
              variieren je nach Softwareversion und Benutzerrolle.
            </span>

            <div className={styles.indexCtas_hUA_}>
              <a className="button button--primary" href="/docs/intro">
                Beginnen Sie mit der Dokumentation
              </a>
            </div>

            <span className="addedText">
              <b>Benötigen Sie direkte Hilfe?</b> Kontaktieren Sie uns unter
              support@dryeyenet.com oder +34 630 90 66 82
            </span>
          </div>
          <div className={styles.heroImageCol}>
            <img
              alt="DryEyeNet Plattform Übersicht"
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
      title="DryEyeNet Dokumentation"
      description="Offizielle Dokumentation für DryEyeNet"
    >
      <HomepageHeader />
      <main>
        <section className={clsx("container", styles.section)}>
          <Heading as="h2" className="versionsTitle">
            Die <span className="brand">DryEyeNet</span> Plattform
          </Heading>
          <div className={styles.featureGrid}>
            {[
              {
                icon: "/img/versions/opto.png",
                title: "Opto",
                text: "Version für Vorbehandlungszentren.",
                href: "/docs/platform/opto",
              },
              {
                icon: "/img/versions/opto-plus.png",
                title: "Opto Plus",
                text: "Plus-Version für Vorbehandlungszentren.",
                href: "/docs/platform/opto-plus",
              },
              {
                icon: "/img/versions/care.png",
                title: "Care",
                text: "Version für Pflegeanbieter.",
                href: "/docs/platform/care",
              },
              {
                icon: "/img/versions/ophtha.png",
                title: "Ophtha",
                text: "Version für Einzelaugenärzte.",
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
                <span className="learnMore">Zur Dokumentation</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
