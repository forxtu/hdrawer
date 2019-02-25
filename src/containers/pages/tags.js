import { graphql } from 'gatsby';

// components
import TagsPage from 'src/components/page/TagsPage';

export default TagsPage;

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
  query TagsPageQuery {
    site {
      siteMetadata {
        metadata {
          tags {
            description
            keywords
            title
          }
        }
        structure {
          resources {
            tags {
              title
              path
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { type: { eq: "article" } } }
      limit: 2000
    ) {
      group(field: frontmatter___keywords) {
        fieldValue
        totalCount
      }
    }
  }
`;
