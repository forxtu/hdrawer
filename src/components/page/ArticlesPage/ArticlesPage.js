import PropTypes from 'prop-types';
import React from 'react';
import { api } from 'cssapi';
import styled from 'styled-components';

// utils
import { pagination, pluralise } from 'src/utils/formatting';
import { markdownItemNodes } from 'src/utils/markdown';
import {
  articlesPageMetadata,
  articlesResourceTitle
} from 'src/utils/siteMetadata';

// components
import Articles from 'src/components/blocks/Articles';
import Metadata from 'src/components/blocks/Metadata';
import NextPreviousNav from 'src/components/blocks/NextPreviousNav';
import Page from 'src/components/blocks/Page';

const Meta = styled.header`
  text-align: center;
  ${api({
    color: `c:text`
  })};
`;

const ArticlesPage = ({ data, pageContext }) => {
  const { previousPath, nextPath } = pageContext;

  const nav = (
    <NextPreviousNav
      previousLabel="Назад"
      previousPath={previousPath}
      nextLabel="Вперед"
      nextPath={nextPath}
    />
  );

  return (
    <Page title="Статьи" nav={nav}>
      <Metadata {...articlesPageMetadata(data)} />
      <Meta>{pagination(pageContext)}</Meta>
      <Articles articles={markdownItemNodes(data)} pagination={pageContext} />
    </Page>
  );
};
ArticlesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default ArticlesPage;
