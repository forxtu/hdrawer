import { api, scope } from 'cssapi';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import defaultBorder from 'src/styles/mixins/defaultBorder';

// components
import VLayout from 'src/components/layouts/VLayout';
import DefaultLayout from 'src/components/layouts/DefaultLayout';
import TitlePrimary from 'src/components/elements/titles/TitlePrimary';

export const Body = styled(VLayout)`
  position: relative;
  ${api({
    paddingH: [`1ru`, `1ru`, `1ru`, 0]
  })};
`;

export const NavWrapper = styled.div`
  ${api({
    color: `c:text`
  })};
`;

const PageTitle = styled(TitlePrimary)`
  text-align: center;
  ${api({
    paddingV: scope`1ru`
  })};
`;

const ImageWrapper = styled.div`
  width: calc(100vw - 69px);
  position: relative;
  margin-left: -50vw;
  left: 50%;
`;

const Page = ({ title, children, imageSizes, nav }) => (
  <DefaultLayout>
    <VLayout>
      <Body>
        {imageSizes && (
          <ImageWrapper>
            <Img fluid={imageSizes} />
          </ImageWrapper>
        )}
        {title && <PageTitle>{title}</PageTitle>}
        {children}
      </Body>
      {nav && <NavWrapper>{nav}</NavWrapper>}
    </VLayout>
  </DefaultLayout>
);

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  imageSizes: PropTypes.object,
  nav: PropTypes.node
};

Page.defaultProps = {
  children: [],
  imageSizes: null,
  nav: null
};

export default Page;
