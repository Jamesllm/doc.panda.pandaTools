import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import CustomSection from "../components/Section/CustomSection";
import HomepageHeader from "../components/Home/Header";
import React from "react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <CustomSection>
        <HomepageHeader />
      </CustomSection>
      <main>
        
      </main>
    </Layout>
  );
}