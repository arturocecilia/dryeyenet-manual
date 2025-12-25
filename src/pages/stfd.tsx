import React, { useRef, useEffect } from "react";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const flowSteps = [
  {
    title: "New Base Survey - New Base Exam - Import Device Exam",
    text: "These are the 3 tasks that usually are performed as the first step in the patient journey. Depending on the user role and the software version, one or more of these tasks will be available to start documenting a new patient visit.",
    imgNum: 1,
  },
  {
    title: "New Diagnostic Report - New Treatment Plan  - New Treatment",
    text: "These tasks are usually performed after the initial examination of the patient, and they allow the user to create diagnostic reports, treatment plans (and their documented treatments) based on the collected data.",
    imgNum: 2,
  },
  {
    title: "Patient Dashboard",
    text: "The Patient Dashboard task allows the user to access all the information related to a specific patient, including their history, examinations, diagnostic reports, and treatment plans. From here, users can also perform actions over the patient, such as editing document data, request treatment plans...",
    imgNum: 3,
  },
  {
    title: "Device Connections & Settings",
    text: "Part of the Device Management is exposted to the user for workflow purposes. From here, users can connect or disconnect devices, check their import/export status, and access device-specific settings.",
    imgNum: 4,
  },
];

export default function StfdPage() {
  return (
    <Layout title="STFD" description="Description of the STFD page">
      <main>
        <section className="container" style={{ padding: "3rem 0" }}>
          <Heading as="h1">STFD </Heading>
          <p>
            The SFTD philosophy was created with multiple purposes:
            <ul>
              <li>
                Ensure data integrity when different users are filling out
                structured and comprehensive clinical documentation.
              </li>
              <li>
                Ensure ease of use: the entire system is oriented around
                performing one task at a time, removing superfluous elements
                unrelated to the task being carried out.
              </li>
              <li>
                Increase the speed of data documentation, while keeping the
                focus on the action at hand and dedicating the required screen
                space to the relevant information.
              </li>
            </ul>
            Below are the user tasks available to different users throughout the
            patient journey. Please note that these tasks are displayed based on
            the role and capabilities of each user.
          </p>
          <div className="markdown">
            {flowSteps.map((step, idx) => (
              <>
                <div key={idx}>
                  <Heading as="h2">{step.title}</Heading>
                  <p>{step.text}</p>
                </div>
                <Zoom key={idx}>
                  <img
                    src={`/img/flow/flow-${step.imgNum}.png`}
                    alt={step.title}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      height: "auto",
                      margin: "2rem auto",
                    }}
                  />
                </Zoom>
              </>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
