import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { api, scope } from 'cssapi';

// utils
import { tagPath } from 'src/build/utils/url';

// components
import ButtonLink from 'src/components/elements/links/ButtonLink';

const LinkWrapper = styled(ButtonLink)`
  ${api({
    baseline: scope`s:smallprint`
  })};
  font-size: 10px !important;
  margin: 10px;
`;

const SiteTagsListItem = ({ tag }) => (
  <LinkWrapper to={tagPath(tag)} title={`Tag: ${tag}`}>
    {tag}
  </LinkWrapper>
);

SiteTagsListItem.propTypes = {
  tag: string.isRequired
};

export default SiteTagsListItem;
