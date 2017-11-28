import React from 'react'
import Link from 'gatsby-link'


const IndexPage = ({data}) => (
  <div>
    <h2>Hello it me! <small>jaypee</small></h2>
    <p>Welcome to my new React Blog app.</p>

    <div className="container-fluid">
      <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
        <Link 
          key={post.node.id}
          to={post.node.frontmatter.path} >
          {post.node.frontmatter.title} 
        </Link>
        </li>
      ))}
      </ul>
    </div>

    <br/>
    <br/>
    <Link to="/about/"><small>About</small></Link>
  </div>
)


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {  published: { eq: true } } }
    ){
      edges{
        node {
          id
          frontmatter {
            title
            path
            published
            date
          }
        }
      }
    }
  }
  `
export default IndexPage
