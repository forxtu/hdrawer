import { api, scope } from 'cssapi';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// utils
import {
  fieldsSlug,
  fieldsTitle,
  frontmatterImageSizes
} from 'src/utils/markdown';
import { randomColor } from 'src/utils/helpers';

// styles
import TitleSecondary from 'src/components/elements/titles/TitleSecondary';
import spaceChildrenH from 'src/styles/mixins/spaceChildrenH';
import spaceChildrenV from 'src/styles/mixins/spaceChildrenV';

// components
import VLayout from 'src/components/layouts/VLayout';
import TextLink from 'src/components/elements/links/TextLink';
import ArticleFooterMeta from 'src/components/blocks/ArticleFooterMeta';
import ArticleHeadMeta from 'src/components/blocks/ArticleHeadMeta';
import PostImageLink from 'src/components/elements/links/PostImageLink';

const ArticleContentText = styled.p``;

const Layout = styled.div`
  display: flex;
  ${api({
    flexDirection: [`column`, `column`, `row`],
    // marginTop: scope`1ru`,
    marginBottom: scope`0.5ru`
  })};
  ${spaceChildrenH([0, 0, `1ru`])};
  ${spaceChildrenV([`1ru`, `1ru`, 0])};

  > * :first-child {
    ${api({
      flex: [`0 0 100%`, `0 0 100%`, `0 0 33.3%`]
    })};
  }

  ${ArticleContentText} {
    ${api({
      color: `c:contentText`
    })};
  }
`;

const ArticlesListItem = ({ article }) => {
  const title = fieldsTitle(article);
  return (
    <Layout>
      <PostImageLink
        to={fieldsSlug(article)}
        title={title}
        randomColor={randomColor}
      >
        <Img fluid={frontmatterImageSizes(article)} />
      </PostImageLink>
      <VLayout spacing="small">
        <TextLink to={fieldsSlug(article)} title={title} underlineType="left">
          <TitleSecondary>{title}</TitleSecondary>
        </TextLink>
        <ArticleHeadMeta article={article} />
        <ArticleContentText>{article.excerpt}</ArticleContentText>
        <ArticleFooterMeta article={article} />
      </VLayout>
    </Layout>
  );
};

ArticlesListItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticlesListItem;
