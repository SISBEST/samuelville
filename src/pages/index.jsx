import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="The official government website of SamuelVille.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
        </div>
      </header>
      <main>
        <br />
        <ul>
          <h3>Quick Facts</h3>
          <li>SamuelVille is a city and a country.</li>
          <li>The country of SamuelVille consists of 4 main cities. SamuelVille, BEEPtown, Middletown, and Flefingbridge.</li>
          <li>Our currency is the Samuelo.</li>
          <li>The Samuelo is roughly equivalent to the American Dollar.</li>
          <li>Our official languages are Samuelish and English.</li>
          <li>Most day-to-day activities are conducted in English, with special events and internal government business using Samuelish.</li>
        </ul>
      </main>
    </Layout>
  );
}

export default Home;
