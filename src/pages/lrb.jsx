import React from 'react';
import Layout from '@theme/Layout';

function LegalReview() {
  return (
    <Layout title="LRB">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          padding: '10px'
        }}>
        <div>
          <h1>Legal Review Board</h1>
          <p>Before Samuel signs off on a new law,<br />it must be approved by the Legal Review Board (LRB).</p>
          <p>The LRB is elected every month, and consists of 10 members.</p>
          <p>The Board meets in the Government Theatre every day.</p>
          <p>Anybody can submit a legal idea. It goes straight to the Board.<br />The Board then approves or denies the idea.<br />If it is approved, it goes directly to Samuel.</p>
          <p>Samuel can then sign off on it, and if he does, it's a law.</p>
        </div>
      </div>
    </Layout>
  );
}

export default LegalReview;