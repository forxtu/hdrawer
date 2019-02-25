import { api } from 'cssapi';
import PropTypes from 'prop-types';
import { test } from 'ramda';
import React from 'react';
import styled from 'styled-components';

// utils
import { isHomePage } from 'src/utils/paths';

// styles
import linkProps from 'src/styles/mixins/linkProps';

// components
import ContentLink from 'src/components/elements/links/ContentLink';

const articlesIsActive = (match, location) =>
  match || test(/(categories|tags)/, location.pathname);

const Link = styled(ContentLink).attrs({
  activeClassName: `isActive`
})`
  ${linkProps(`c:text`, `c:highlight`)};
  background: transparent;
  letter-spacing: 0.5px;
  z-index: 2;
  margin: 0 10px;

  &.isActive {
    ${api({
      color: `c:active`
    })};
  }
`;

const SiteNavLink = ({ page }) => {
  const isActive = page.navTitle === `Articles` ? articlesIsActive : null;
  return (
    <Link exact={isHomePage(page.path)} to={page.path} isActive={isActive}>
      {page.navTitle}
    </Link>
  );
};

SiteNavLink.propTypes = {
  page: PropTypes.object.isRequired
};

export default SiteNavLink;
