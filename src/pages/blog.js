import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout >
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog;