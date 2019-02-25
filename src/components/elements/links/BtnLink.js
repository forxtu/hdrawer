import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import linkProps from 'src/styles/mixins/linkProps';

// components
import BaseLink from './BaseLink';

// Filter out styled-component-specific props so they don't trigger Unknown Prop
// Warnings on wrapped React components
// eslint-disable-next-line no-unused-vars
const BtnLink = styled(({ underlineType, ...rest }) => <BaseLink {...rest} />)`
  ${linkProps(`c:text`, `c:highlight`)};
`;

BtnLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  underlineType: PropTypes.string
};

BtnLink.defaultProps = {
  underlineType: `center`
};

BtnLink.displayName = `BtnLink`;

export default BtnLink;
