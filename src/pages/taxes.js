import React from 'react';
import Layout from '@theme/Layout';

function Taxes() {
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
                    <h2>Taxes</h2>
                    <h3>How to pay</h3>
                    <p>
                        Paying is easy. Just enter your credit card info into the portal.
                        <br /><br />
                        If you think you've been charged incorrectly, contact us.
                        <br /><br />
                        Contact info is at the bottom of the website.
                    </p>
                </p>
            </div>
        </Layout>
    );
}

export default Taxes;