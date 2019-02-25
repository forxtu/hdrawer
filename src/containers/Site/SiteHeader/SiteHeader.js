import { api, scope } from 'cssapi';
import { array } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FiMoreVertical } from 'react-icons/fi';

// utils
import { categoryPath } from 'src/build/utils/url';

// styles
import flexAlignCenter from 'src/styles/mixins/flexAlignCenter';

// components
import HLayout from 'src/components/layouts/HLayout';
import TextLink from 'src/components/elements/links/TextLink';
import BtnLink from 'src/components/elements/links/BtnLink';

const Wrapper = styled.div`
  width: 100vw;
  ${api({
    borderBottom: `b:default`
  })};
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  margin-bottom: -1px;
`;

const HeaderTop = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

const Logo = styled(BtnLink)`
  ${api({
    fontFamily: `Limelight`,
    baseline: scope`s:primaryTitle`
  })};
`;

const Layout = styled(HLayout)`
  ${flexAlignCenter};
  flex-wrap: wrap;
  padding: 15px 0;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  ${api({
    baseline: scope`s:smallprint`
  })};
`;

const NavCategoryLink = styled(TextLink)`
  letter-spacing: 2px;
`;

const NavMoreCategoryLink = styled(NavCategoryLink)`
  ${flexAlignCenter};
  ${api({
    baseline: scope`s:smallprint`
  })};
  font-weight: 700;
`;

const SiteHeader = ({ categoriesGroup }) => {
  const categories = categoriesGroup.map((category, i) => {
    while (i < 5) {
      return (
        <NavCategoryLink
          key={categoryPath(category.fieldValue)}
          to={categoryPath(category.fieldValue)}
          title={`Category: ${category.fieldValue}`}
        >
          {category.fieldValue}
        </NavCategoryLink>
      );
    }
    return null;
  });

  return (
    <Wrapper>
      <HeaderTop>
        <Logo to="/">Hanna's drawer ✏️</Logo>
      </HeaderTop>
      <Layout>
        {categories}
        <NavMoreCategoryLink to="/categories" title="explore all categories">
          ЕЩЕ
          <FiMoreVertical />
        </NavMoreCategoryLink>
      </Layout>
    </Wrapper>
  );
};

SiteHeader.propTypes = {
  categoriesGroup: array.isRequired
};

export default SiteHeader;
