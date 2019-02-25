import PropTypes from 'prop-types';
import React from 'react';

// utils
import { tagPath } from 'src/build/utils/url';

// components
import TextLink from 'src/components/elements/links/TextLink';

const Tag = ({ tag }) => <TextLink to={tagPath(tag)}>{tag}</TextLink>;

Tag.propTypes = {
  tag: PropTypes.string.isRequired
};

export default Tag;
