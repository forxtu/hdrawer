import { api, scope } from 'cssapi';
import { object, string, func, bool, array } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// components
import VLayout from 'src/components/layouts/VLayout';
import SiteSidebarToggler from './SiteSidebarToggler';
import SiteNav from './SiteNav';
import SiteTitle from './SiteTitle';
import SiteTags from './SiteTags/SiteTags';
import SiteSocial from './SiteSocial/SiteSocial';

const Header = styled.div``;
const Wrapper = styled.div``;

const Layout = styled(VLayout)`
  align-items: center;
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  padding: 0 20px 20px 20px !important;
  justify-content: space-between;
  height: 100vh;
  width: 320px;
  transition: 0.3s;
  transform: ${props =>
    props.isSidebarOpen ? `translateX(0)` : `translateX(-320px)`};
  ${api({
    padding: scope`0 0 0.7ru`,
    backgroundColor: `c:backgroundSides`,
    borderRight: `2px solid c:backgroundSides`
  })};

  @media screen and (max-width: 767px) {
    display: none;
  }

  ${Header} {
    justify-content: center;
    ${api({
      width: [60, 70, 80]
    })};
  }
  ${Wrapper} {
    justify-content: center;
  }
`;

const SiteSidebar = ({
  title,
  pages,
  setSidebarShape,
  isSidebarOpen,
  tags
}) => (
  <Layout spacing="small" isSidebarOpen={isSidebarOpen}>
    <SiteSidebarToggler onClick={setSidebarShape}>
      {isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
    </SiteSidebarToggler>
    <Header>
      <SiteTitle title={title} isSidebarOpen={isSidebarOpen} />
    </Header>
    <Wrapper>
      <SiteTags tags={tags} />
    </Wrapper>
    <Wrapper>
      <SiteNav pages={pages} />
      <SiteSocial />
    </Wrapper>
  </Layout>
);

SiteSidebar.propTypes = {
  title: string.isRequired,
  pages: object.isRequired,
  isSidebarOpen: bool.isRequired,
  setSidebarShape: func.isRequired,
  tags: array.isRequired
};

export default SiteSidebar;
