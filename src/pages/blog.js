import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query  {
          allContentfulBlogPost(
            sort: {
              fields: publishedDate,
              order: DESC
            }
          ) {
            edges {
              node {
                title
                slug
                publishedDate(formatString: "YYYY MMMM DD")
              }
            }
          }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge, index) => {
                  const { title, publishedDate, slug } = edge.node

                  return (
                        <li
                          key={title + index}
                          className={blogStyles.post}
                        >
                            <Link
                              to={`/blog/${slug}`}
                            >
                              <h2>{title}</h2>
                              <p>{publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage