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
          padding: '10px'
        }}>
        <div>
          <h1>Education</h1>
          <p>SamuelVille students learn 5 days a week, with a combination of:</p>
          <ul>
            <li>In-Person Learning</li>
            <li>Pre-Recorded Lectures</li>
            <li>Live Online Learning</li>
          </ul>
          <a href="https://clever.com/in/svschools">Student Login</a>
          <hr />
          <h2>Grades</h2>
          <h3>Little School</h3>
          <p>Students in grades K, 1, 2, and 3 attend Little School.</p>
          <p>All Little School instruction is in-person.</p>
          <p>There are 3 Little School locations:</p>
          <ul>
            <li>SamuelVille</li>
            <li>BEEPtown</li>
            <li>Middletown/Flefingbridge</li>
          </ul>
          <h3>Big School</h3>
          <p>Students in grades 4, 5, 6, 7, and 8 attend Big School.</p>
          <p>All Big School instruction is virtual.</p>
          <p>Students can watch lessons and complete work at anytime,<br />but have daily scheduled live Q&amp;As with each teacher.</p>
          <h3>Big Big School</h3>
          <p>Students in grades 9, 10, 11, 12, and 13 attend Big Big School.</p>
          <p>All work is completed virtually, but some lectures are in person.</p>
          <hr />
          <h2>Curriculum</h2>
          <h3>Little School</h3>
          <p>Each student's education consists of the following main subjects:</p>
          <ul>
            <li>English</li>
            <li>Math</li>
            <li>CSED</li>
          </ul>
          <h3>Big/Big Big Schools</h3>
          <p>Each student's education consists of main subjects:</p>
          <ul>
            <li>English</li>
            <li>Math</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>CSED</li>
          </ul>
          <p>As well as electives, which vary by grade level, but include:</p>
          <ul>
            <li>Samuelish</li>
            <li>Music</li>
            <li>Dance/Theatre</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Education;