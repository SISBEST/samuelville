import React from 'react';
import Layout from '@theme/Layout';

function Education() {
  return (
    <Layout title="Education">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}>
        <p>
          <h1>LearnSamuel</h1>
          <p>Students learn 5 days a week via a self-guided curriculum.<br /><br />On one designated day of the week, students meet with their assigned teacher.</p>
          <a href="https://learn.samuelville.tk">Are you a student?</a>
        </p>
      </div>
    </Layout>
  );
}

export default Education;