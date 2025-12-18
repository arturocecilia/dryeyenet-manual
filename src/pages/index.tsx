import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <a
          className={clsx(
            "button button--secondary button--lg",
            styles.docsButton
          )}
          href="/docs/intro"
          style={{ marginTop: "2rem" }}
        >
          Go to Documentation
        </a>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="DryEyeNet Manual"
      description="Official documentation and user manual for DryEyeNet"
    >
      <HomepageHeader />
      <main>
        <section
          className={clsx("container", styles.section)}
          style={{ padding: "3rem 0" }}
        >
          <Heading as="h2">Welcome to the DryEyeNet Manual</Heading>
          <p>
            This manual provides comprehensive guidance for using the DryEyeNet
            platform, including staff and patient workflows, system features,
            and best practices for daily operations.
          </p>
          <p>
            Use the navigation menu on the left to access detailed sections on
            setup, workflows, and troubleshooting.
          </p>
          <Heading as="h3">Support</Heading>
          <p>
            For questions or technical support, please contact: <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:support@smartdryeyes.com">
              support@smartdryeyes.com
            </a>
          </p>
        </section>
      </main>
    </Layout>
  );
}
