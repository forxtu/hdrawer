import PropTypes from 'prop-types';
import React from 'react';

// utils
import { categoryTitle, pluraliseWithNumber } from 'src/utils/formatting';
import { markdownItemNodes } from 'src/utils/markdown';
import { addTitleToMetadata } from 'src/utils/metadata';
import {
  articlesResourceTitle,
  categoryPageMetadata
} from 'src/utils/siteMetadata';

// components
import Metadata from 'src/components/blocks/Metadata';
import Page from 'src/components/blocks/Page';
import SearchResults from 'src/components/blocks/SearchResults';

const CategoryPage = ({ data, pageContext }) => {
  const metadata = categoryPageMetadata(data);
  const { category } = pageContext;

  const articles = markdownItemNodes(data);

  return (
    <Page title={categoryTitle(category)}>
      <Metadata {...addTitleToMetadata(metadata, category)} />
      <SearchResults
        articles={articles}
        title={[`Найдено ${articles.length} в категории`, category]}
      />
    </Page>
  );
};

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default CategoryPage;
