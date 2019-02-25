import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { api } from 'cssapi';

// components
import linkProps from 'src/styles/mixins/linkProps';
import BaseLink from 'src/components/elements/links/BaseLink';

// Filter out styled-component-specific props so they don't trigger Unknown Prop
// Warnings on wrapped React components
// eslint-disable-next-line no-unused-vars
const ActionBarButtonLink = styled(({ underlineType, ...rest }) => (
  <BaseLink {...rest} />
))`
  ${linkProps(`c:text`, `c:highlight`)};
  font-weight: bold;
  position: relative;
  display: inline-block;
  margin-top: 10px;
  color: #000;
  font-size: 18px;
  :hover {
    ${api({
      color: `c:highlight`
    })};
  }
`;

ActionBarButtonLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  underlineType: PropTypes.string
};

ActionBarButtonLink.defaultProps = {
  underlineType: `center`
};

ActionBarButtonLink.displayName = `ActionBarButtonLink`;

export default ActionBarButtonLink;
