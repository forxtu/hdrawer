import { graphql } from 'gatsby';

// components
import HomePage from 'src/components/page/HomePage';

export default HomePage;

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
  query HomePageQuery($dateFormat: String) {
    markdownRemark(frontmatter: { slug: { eq: "home" } }) {
      htmlAst
      frontmatter {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        metadata {
          home {
            title
            description
            keywords
          }
        }
        structure {
          pages {
            home {
              title
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { type: { eq: "article" } } }
      limit: 8
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          wordCount {
            words
          }
          timeToRead
          frontmatter {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            category
            author
            date(formatString: $dateFormat)
            tags
            title
            slug
          }
        }
      }
      categoriesGroup: group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      keywordsGroup: group(field: frontmatter___keywords) {
        fieldValue
        totalCount
      }
    }
  }
`;
