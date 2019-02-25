import { graphql } from 'gatsby';

// components
import Template from 'src/components/page/ArticlePage';

export default Template;

export const query = graphql`
  query ArticleQuery(
    $slug: String
    $previousSlug: String
    $nextSlug: String
    $dateFormat: String
  ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      id
      wordCount {
        words
      }
      timeToRead
      frontmatter {
        keywords
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        title
        tags
        date(formatString: $dateFormat)
        category
        author
        slug
        metadata {
          description
          title
          keywords
        }
      }
    }
    previous: markdownRemark(
      fields: { type: { eq: "article" }, slug: { eq: $previousSlug } }
    ) {
      id
      fields {
        title
        slug
      }
    }
    next: markdownRemark(
      fields: { type: { eq: "article" }, slug: { eq: $nextSlug } }
    ) {
      fields {
        title
        slug
      }
    }
  }
`;
