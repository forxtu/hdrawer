import PropTypes from 'prop-types';
import React from 'react';

// utils
import {
  fieldsSlug,
  fieldsTitle,
  markdownItem,
  markdownItemImageSizes,
  markdownItemMetadata,
  markdownItemTitle,
  next,
  previous
} from 'src/utils/markdown';

// components
import Metadata from 'src/components/blocks/Metadata';
import NextPreviousNav from 'src/components/blocks/NextPreviousNav';
import Page from 'src/components/blocks/Page';
import Article from './Article';

const ArticlePage = ({ data }) => {
  const previousArticle = previous(data);
  const nextArticle = next(data);

  const nav = (
    <NextPreviousNav
      previousLabel={fieldsTitle(previousArticle)}
      nextLabel={fieldsTitle(nextArticle)}
      previousPath={fieldsSlug(previousArticle)}
      nextPath={fieldsSlug(nextArticle)}
    />
  );

  return (
    <Page
      title={markdownItemTitle(data)}
      imageSizes={markdownItemImageSizes(data)}
    >
      <Metadata {...markdownItemMetadata(data)} />
      <Article allData={data} article={markdownItem(data)} nav={nav} />
    </Page>
  );
};
ArticlePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ArticlePage;
