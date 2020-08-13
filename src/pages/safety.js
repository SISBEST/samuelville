import React from 'react';
import Layout from '@theme/Layout';

function Services() {
  return (
    <Layout title="Safety">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}>
        <p>
          <h1>Public Safety</h1>
          <h2>Police</h2>
          Our police services protect SamuelVille, usually stationed on train services.
          <br /><br />
          Forces are also stationed around the Government bldg.
          <br /><br />
          Police forces around SamuelVille are banned from using force<br />unless a suspect begins using force against an officer.
          <br /><br />
          However, Government bldg. officers are not blocked from using force in any way.
        </p>
      </div>
    </Layout>
  );
}

export default Services;