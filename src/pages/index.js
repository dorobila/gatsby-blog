import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Index page</h1>
      <p>COntact me <Link to="contact">here</Link></p>
    </Layout>
  )
}

export default IndexPage;