import PropTypes from 'prop-types';
import React from 'react';

// utils
import renderListItems from 'src/utils/renderListItems';

// components
import VList from 'src/components/elements/lists/VList';
import ResourceListItem from './ResourceListItem';

const ResourceList = ({ resources }) => (
  <VList>{renderListItems(ResourceListItem, `resource`, resources)}</VList>
);

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired
};

export default ResourceList;
