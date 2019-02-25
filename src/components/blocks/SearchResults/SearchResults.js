import PropTypes from 'prop-types';
import React from 'react';
import { api } from 'cssapi';
import styled from 'styled-components';

// components
import Articles from 'src/components/blocks/Articles';

const Meta = styled.header`
  text-align: center;
  ${api({
    color: `c:text`
  })};
`;

const SearchResults = ({ articles, title }) => (
  <React.Fragment>
    <React.Fragment>
      <Meta>
        {title[0]} <i>{title[1]}</i>
      </Meta>
      <Articles articles={articles} />
    </React.Fragment>
  </React.Fragment>
);

SearchResults.propTypes = {
  articles: PropTypes.array,
  title: PropTypes.array.isRequired
};

SearchResults.defaultProps = {
  articles: []
};

export default SearchResults;
