import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query (
  $slug: String!
) {
  markdownRemark(
    fields: {
      slug: {
        eq: $slug
      }
      
    }
  ) {
    frontmatter {
      title
      date
    }
    html
  }
}
`

const Blog = (props) => {
  const { title, date } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html
        }}
      >

      </div>
    </Layout>
  )
}

export default Blog