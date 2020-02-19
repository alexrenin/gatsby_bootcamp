import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                           slug
                        }
                    }                    
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge, index) => {
                  const { title, date } = edge.node.frontmatter,
                    { slug } = edge.node.fields

                  return (
                        <li
                          key={title + index}
                        >
                            <Link
                              to={`/blog/${slug}`}
                            >
                              <h2>{title}</h2>
                              <p>{date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage