import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

// styles
import scaleBounce from 'src/styles/animations/scaleBounce';

// components
import Logo from 'src/components/elements/Logo';

const Wrapper = styled(Link)`
  html.feat-no-touchevents &:hover {
    animation: ${scaleBounce()} 0.3s ease-in-out;
  }
`;
const SiteLogoLink = () => (
  <Wrapper to="/">
    <Logo />
  </Wrapper>
);

export default SiteLogoLink;
