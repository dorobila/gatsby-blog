import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
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
            fields {
              slug
              readingTime {
                text
              }
            }
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
            <li key={edge.node.fields.slug}>
              <h2><Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h2>
              <p>{edge.node.frontmatter.date} - {edge.node.fields.readingTime.text}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog;