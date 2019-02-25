import { graphql } from 'gatsby';

// components
import ContactPage from 'src/components/page/ContactPage';

export default ContactPage;

// Note: Ideally this would be in its own file and imported from a Page
// Container, but Gatsby preprocesses the pages looking for a graphql call.
// Moving it anywhere else results in an error.
export const query = graphql`
  query ContactPageQuery {
    markdownRemark(frontmatter: { slug: { eq: "contact" } }) {
      htmlAst
    }
    site {
      siteMetadata {
        metadata {
          contact {
            title
            description
            keywords
          }
        }
      }
    }
  }
`;
