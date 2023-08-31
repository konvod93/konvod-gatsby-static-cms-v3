import * as React from "react"
import { graphql, Script } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row } from "react-bootstrap"
import PostsList from "../components/PostsList"
import Hero from "../components/Hero/Hero"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"




const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description
  const posts = data.allMarkdownRemark.nodes
  
  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Hero title={siteTitle} description={siteDescription} />       
      <Container>  
      <LatestBlogPost 
      posttitle={data.allMarkdownRemark.nodes[0].frontmatter.title}
      postbody={data.allMarkdownRemark.nodes[0].excerpt}
      link={data.allMarkdownRemark.nodes[0].fields.slug}
      />            
        <Row className="g-4" style={{marginBottom: `50px`}} >          
          <PostsList posts={posts} />
        </Row>
      </Container>
    </Layout>
  )
}
      

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {fields: {slug: {glob: "/travel-packages/*/"}}}
      sort: {frontmatter: {date: DESC}}
      ) {
    nodes {
      id
      excerpt(pruneLength: 600)            
      fields {
        slug
        tags
      }
      frontmatter {
        category        
        title
        travel_dates
        date(formatString: "MMM DD, YYYY ")        
        featured_image {
          childImageSharp {
            gatsbyImageData(width: 600, aspectRatio: 1.5, placeholder: BLURRED)
          }
        }
      }
    }
  }
  }
`