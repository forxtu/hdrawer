import PropTypes from 'prop-types';
import React from 'react';

// utils
import { pluraliseWithNumber, tagTitle } from 'src/utils/formatting';
import { markdownItemNodes } from 'src/utils/markdown';
import { addTitleToMetadata } from 'src/utils/metadata';
import { articlesResourceTitle, tagPageMetadata } from 'src/utils/siteMetadata';

// components
import Metadata from 'src/components/blocks/Metadata';
import Page from 'src/components/blocks/Page';
import SearchResults from 'src/components/blocks/SearchResults';

const TagPage = ({ data, pageContext }) => {
  const metadata = tagPageMetadata(data);
  const { tag } = pageContext;
  const articles = markdownItemNodes(data);
  return (
    <Page title={tagTitle(tag)}>
      <Metadata {...addTitleToMetadata(metadata, tag)} />
      <SearchResults
        articles={articles}
        title={[
          `Найдено
          ${articles.length} с тегом`,
          tag
        ]}
      />
    </Page>
  );
};

TagPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default TagPage;
