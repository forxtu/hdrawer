import { api } from 'cssapi';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import flexHorizontal from 'src/styles/mixins/flexHorizontal';
import uiList from 'src/styles/mixins/uiList';

// components
import SiteNavLink from './SiteNavLink';

const Wrapper = styled.nav``;

const Layout = styled.div`
  ${flexHorizontal};
  ${uiList};
  position: relative;
  z-index: 99;
  align-items: center;
  ${api({
    marginTop: [`1ru`],
    marginBottom: [`1ru`],
    padding: [`0.2ru`, `0.25ru 1.25ru`]
  })};
`;

const SiteNav = props => {
  const pages = {
    contact: {
      navTitle: `Contact`,
      path: `/contact`
    }
  };
  return (
    <Wrapper>
      <Layout>
        {/* <SiteNavLink page={props.pages.projects} /> */}
        <SiteNavLink page={props.pages.about} />
        <SiteNavLink page={pages.contact} />
      </Layout>
    </Wrapper>
  );
};

SiteNav.propTypes = {
  pages: PropTypes.object.isRequired
};

export default SiteNav;
