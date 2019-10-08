/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
      }
      html
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

const Blog = (props) => {

  return(
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date} - {props.data.markdownRemark.fields.readingTime.text} </p>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default Blog;