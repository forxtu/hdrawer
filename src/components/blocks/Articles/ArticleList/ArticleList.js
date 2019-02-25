import PropTypes from 'prop-types';
import React from 'react';

// utils
import renderListItems from 'src/utils/renderListItems';

// components
import VList from 'src/components/elements/lists/VList';
import ArticlesListItem from './ArticlesListItem';

const ArticlesList = ({ articles }) => (
  <VList>{renderListItems(ArticlesListItem, `article`, articles)}</VList>
);

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticlesList;
