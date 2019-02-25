import PropTypes from 'prop-types';
import React from 'react';

// utils
import renderListItems from 'src/utils/renderListItems';

// components
import CommaList from 'src/components/elements/lists/CommaList';
import Tag from './Tag';

const TagList = ({ tags }) => {
  const tagsElements = renderListItems(Tag, `tag`, tags);
  return <CommaList spacing="tiny">{tagsElements}</CommaList>;
};

TagList.propTypes = {
  tags: PropTypes.array
};

TagList.defaultProps = {
  tags: []
};

export default TagList;
