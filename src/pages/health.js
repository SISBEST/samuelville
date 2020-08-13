import React from 'react';
import Layout from '@theme/Layout';

function Health() {
  return (
    <Layout title="Health">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}>
        <p>
          <h1>BEEPulse</h1>
          <p>The SamuelVille National Health Plan (often called BEEPulse),<br />provides free healthcare to citizens.</p>
          <p>Please make sure you have a valid citizen ID with you at all times,<br />as it may be required to recieve health service.</p>
        </p>
      </div>
    </Layout>
  );
}

export default Health;