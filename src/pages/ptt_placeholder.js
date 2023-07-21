import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="PTT" description="PTT TESTING TOOL">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          THIS IS JUST A PLACEHOLDER, WE COULD LINK TO THE TOOL HERE
        </p>
      </div>
    </Layout>
  );
}