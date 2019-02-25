import { string, func } from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { api, scope } from 'cssapi';

// components
import BtnLink from 'src/components/elements/links/BtnLink';

const LinkWrapper = styled(BtnLink)`
  ${api({
    baseline: scope`s:body`
  })};
`;

const SiteSocialListItem = ({ name, url, comp }) => {
  const SocIconComp = comp;
  return (
    <Fragment>
      <LinkWrapper href={url} target="_blank" title={name}>
        <SocIconComp />
      </LinkWrapper>
    </Fragment>
  );
};

SiteSocialListItem.propTypes = {
  name: string.isRequired,
  url: string.isRequired,
  comp: func.isRequired
};

export default SiteSocialListItem;
