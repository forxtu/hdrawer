import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import React from 'react';

// components
import ArticleList from './ArticleList/ArticleList';

const Articles = ({ articles }) => (
  <React.Fragment>
    {isEmpty(articles) ? (
      <div>Нет ниодной записи</div>
    ) : (
      <ArticleList articles={articles} />
    )}
  </React.Fragment>
);

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Articles;
