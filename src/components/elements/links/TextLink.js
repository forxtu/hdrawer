import PropTypes from 'prop-types';
import { api } from 'cssapi';
import React from 'react';
import styled from 'styled-components';

// styles
import linkProps from 'src/styles/mixins/linkProps';

// components
import BaseLink from './BaseLink';

// Filter out styled-component-specific props so they don't trigger Unknown Prop
// Warnings on wrapped React components
// eslint-disable-next-line no-unused-vars
// const TextLink = styled(({ underlineType, ...rest }) => <BaseLink {...rest} />)`
//   ${linkProps(`c:text`, `c:white`)};
//   position: relative;
//   ::before {
//     content: '';
//     position: absolute;
//     transition: all 0.25s ease-in-out;

//     ${api({
//       // height: `0.3em`,
//       height: `100%`,
//       width: 0,
//       bottom: 0,
//       left: 0,
//       right: 0,
//       background: `c:highlight`,
//       // opacity: 0.5,
//       zIndex: -1
//     })};
//   }

//   html.feat-no-touchevents &:hover::before {
//     width: 100%;
//     transition: all 0.25s ease-in-out;
//   }
// `
const TextLink = styled(({ underlineType, ...rest }) => <BaseLink {...rest} />)`
  ${linkProps(`c:text`, `c:highlight`)};
`;

TextLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  underlineType: PropTypes.string
};

TextLink.defaultProps = {
  underlineType: `center`
};

TextLink.displayName = `TextLink`;

export default TextLink;
