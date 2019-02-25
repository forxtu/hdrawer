import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { FiHeart } from 'react-icons/fi';

// styles
import linkProps from 'src/styles/mixins/linkProps';
import flexAlignCenter from 'src/styles/mixins/flexAlignCenter';

// components
import BaseLink from 'src/components/elements/links/BaseLink';

const SupportLinkWrapper = styled(BaseLink)`
  ${linkProps(`c:text`, `c:red`)};
  ${flexAlignCenter};
  justify-content: center;
  padding: 8px;
  position: relative;
  text-align: center;
`;

const SupportButton = ({ title }) => (
  <SupportLinkWrapper
    to="https://ko-fi.com/dennismerkulov"
    title={title}
    target="_blank"
  >
    💙
  </SupportLinkWrapper>
);

SupportButton.propTypes = {
  title: string
};

SupportButton.defaultProps = {
  title: `Buy me a coffee`
};

export default SupportButton;
