import PropTypes from 'prop-types';
import React from 'react';

// components
import Metadata from 'src/components/blocks/Metadata';
import Page from 'src/components/blocks/Page';
import CategoriesList from './CategoriesList';

const CategoriesPage = ({ data }) => {
  const { group: allCategories } = data.allMarkdownRemark;
  const { categories: categoriesMetadata } = data.site.siteMetadata.metadata;
  return (
    <Page title="Категории">
      <Metadata {...categoriesMetadata} />
      <CategoriesList allCategories={allCategories} />
    </Page>
  );
};

CategoriesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default CategoriesPage;
