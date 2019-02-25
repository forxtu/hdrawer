import { object } from 'prop-types';
import React, { Fragment, Component } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import styled from 'styled-components';

// components
import ArticleHeadMeta from 'src/components/blocks/ArticleHeadMeta';
import ArticleFooterMeta from 'src/components/blocks/ArticleFooterMeta';
import MarkdownContent from 'src/components/blocks/MarkdownContent';

export const NavWrapper = styled.div`
  margin-bottom: 30px;
`;

class Article extends Component {
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    const { allData, article, nav } = this.props;
    const { id } = allData.markdownRemark;
    const { title, slug } = allData.markdownRemark.fields;
    const disqusShortname = `forxtu`;
    if (typeof location !== `undefined`) {
      this.disqusConfig = {
        url: `${location.origin}${slug}`,
        identifier: id,
        title
      };
    }
    return (
      <Fragment>
        <ArticleHeadMeta article={article} />
        <MarkdownContent htmlAst={article.htmlAst} />
        <ArticleFooterMeta article={article} />
        {nav && <NavWrapper>{nav}</NavWrapper>}
        <DiscussionEmbed
          shortname={disqusShortname}
          config={this.disqusConfig}
        />
      </Fragment>
    );
  }
}

Article.propTypes = {
  article: object.isRequired,
  allData: object.isRequired
};

export default Article;
