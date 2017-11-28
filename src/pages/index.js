import React from 'react'
import Link from 'gatsby-link'


const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div className="container-fluid">
      {data.allMarkdownRemark.edges.map(post => (
        <Link 
          key={post.node.id}
          to={post.node.frontmatter.path} >
          {post.node.frontmatter.title} 
        </Link>
      ))}
    </div>

    <br/>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to="/page-3/">Go to page 3</Link>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10){
      edges{
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
  `
export default IndexPage
