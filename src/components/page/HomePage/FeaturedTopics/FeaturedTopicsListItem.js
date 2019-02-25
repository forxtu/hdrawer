import { api, scope } from 'cssapi';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
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
import spaceChildrenH from 'src/styles/mixins/spaceChildrenH';
import spaceChildrenV from 'src/styles/mixins/spaceChildrenV';

// components
import VLayout from 'src/components/layouts/VLayout';
import TextLink from 'src/components/elements/links/TextLink';
import TitleSecondary from 'src/components/elements/titles/TitleSecondary';
import ArticleFooterMeta from 'src/components/blocks/ArticleFooterMeta';
import ArticleHeadMeta from 'src/components/blocks/ArticleHeadMeta';

const ArticleContentText = styled.div``;
const ArticleImageWrapper = styled(Link)`
  order: 1;
  margin-left: 20px;
`;
// box-shadow: 8px 8px 0px ${({ randomColor }) => randomColor};
const Layout = styled.div`
  padding: 15px;
  transition: box-shadow 0.33s, transform 0.33s;
  &:hover {
    transform: translateY(-7px);
    ${api({
      boxShadow: `0px 5px 0 c:black`
    })};
  }
  display: flex;
  ${api({
    boxShadow: `8px 8px 0px c:black`,
    border: `1px solid c:black`,
    flexDirection: [`column`, `column`, `row`],
    marginTop: scope`2ru`,
    marginBottom: scope`2ru`
  })};
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

const FeaturedTopicsListItem = ({ article, index }) => {
  const title = fieldsTitle(article);
  return (
    <Layout randomColor={randomColor}>
      <ArticleImageWrapper to={fieldsSlug(article)} title={title}>
        <Img fluid={frontmatterImageSizes(article)} />
      </ArticleImageWrapper>
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

FeaturedTopicsListItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default FeaturedTopicsListItem;
