import { api, scope } from 'cssapi';
import PropTypes from 'prop-types';
import { isNotEmpty } from 'ramda-adjunct';
import React from 'react';
import styled from 'styled-components';

import { FiBookmark, FiTag } from 'react-icons/fi';

// utils
import { categoryPath } from 'src/build/utils/url';
import { fieldsTags, frontmatterCategory } from 'src/utils/markdown';

// styles
import flexAlignCenter from 'src/styles/mixins/flexAlignCenter';
import flexHorizontal from 'src/styles/mixins/flexHorizontal';

// components
import VLayout from 'src/components/layouts/VLayout';
import TextLink from 'src/components/elements/links/TextLink';
import HList from 'src/components/elements/lists/HList';
import TagList from 'src/components/blocks/TagList';

const Layout = styled(VLayout)`
  ${flexHorizontal};
  ${api({
    paddingV: scope`0.3ru`
  })};
  padding-bottom: 0 !important;
  flex-wrap: wrap;
`;

const CategoryLink = styled(TextLink)`
  ${api({
    color: `c:grey`,
    marginLeft: scope`0.2ru`
  })};
`;

const CategoryWrapper = styled.div`
  ${flexAlignCenter};
  ${api({
    color: `c:text`,
    marginRight: scope`0.5ru`,
    baseline: scope`s:mediumprint`
  })};
`;

const TagWrapper = styled(HList)`
  ${flexAlignCenter};
  ${api({
    color: `c:text`,
    marginRight: scope`0.5ru`,
    baseline: scope`s:mediumprint`
  })};
`;

const TagLink = styled(TagList)`
  ${api({
    color: `c:grey`,
    paddingLeft: scope`0.2ru`
  })};
`;

const TagIcon = styled.span``;

const ArticleFooterMeta = ({ article }) => {
  const category = frontmatterCategory(article);
  const tags = fieldsTags(article);
  return (
    <Layout spacing="none">
      <CategoryWrapper>
        📁
        <CategoryLink to={categoryPath(category)}>{category}</CategoryLink>
      </CategoryWrapper>
      {isNotEmpty(tags) && (
        <TagWrapper spacing="tiny">
          <TagIcon>📂</TagIcon>
          <TagLink tags={fieldsTags(article)} />
        </TagWrapper>
      )}
    </Layout>
  );
};

ArticleFooterMeta.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleFooterMeta;
