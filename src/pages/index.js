import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const allCategories = (data.allMarkdownRemark.distinct || []).map(cat => cat);
  const [selectedCategory, setSelectedCategory] = React.useState(pageContext.category)

  const handleAllButtonClick = () => {
    setSelectedCategory(null);
  };

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <div className="cat_nav">
        <p
          style={{ fontWeight: !selectedCategory ? 'bold' : 'normal' }}
          onClick={handleAllButtonClick}
        >
          <Link to="/">All</Link>
        </p>
        {allCategories.map(cat => (
          <p
            style={{ fontWeight: selectedCategory === cat ? 'bold' : 'normal' }}
            onClick={() => setSelectedCategory(cat)}
          >
            <Link to={`/${cat}/`}>{cat}</Link>
          </p>
        ))}
      </div>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <header>
                    <h2>               
                      <span itemProp="headline">{title}</span> 
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                   <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt
                     }}
                     itemProp="excerpt"
                   />
                  </section>
                </Link>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { ne: null } } }
    ) {
      distinct(field: {frontmatter: {category: SELECT}})
      nodes {
        excerpt(pruneLength: 150, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          category
        }
      }
    }
  }
`
