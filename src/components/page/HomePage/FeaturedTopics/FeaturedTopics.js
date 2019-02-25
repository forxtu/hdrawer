import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import React from 'react';

// components
import FeaturedTopicsList from './FeaturedTopicsList';

const Articles = ({ articles }) => (
  <React.Fragment>
    {isEmpty(articles) ? (
      <div>Пока что нет ниодной записи!</div>
    ) : (
      <FeaturedTopicsList articles={articles} />
    )}
  </React.Fragment>
);

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Articles;
