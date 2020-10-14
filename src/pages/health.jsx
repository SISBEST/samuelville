import React from 'react';
import Layout from '@theme/Layout';

function Health() {
  return (
    <Layout title="Health">
      <div
        style={{
          fontSize: '20px',
          padding: '40px'
        }}>
        <div>
          <h1>Health</h1>
          <p>Free healthcare is available to all citizens with the BEEPulse program.</p>
          <hr />
          <h2>Health Points</h2>
          <p>Every citizen gets 500 Health Points (HP) each month. Each day of medical procedure costs 50. Your employer can reward you with more points, or you can pay outright (at a rate of 1 Samuelo a day) if you go over the limit.</p>
          <h2>Copays</h2>
          <p>Equipment costs 10 HP or 15 Samuelos.</p>
        </div>
      </div>
    </Layout>
  );
}

export default Health;