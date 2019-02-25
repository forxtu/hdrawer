import { api, scope } from 'cssapi';
import { array } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { uniq } from 'ramda';

import { FiMoreHorizontal } from 'react-icons/fi';

// utils
import { fetchTags } from 'src/utils/fetchTags';

// styles
import blockCenterH from 'src/styles/mixins/blockCenterH';
import flexJustifyCenter from 'src/styles/mixins/flexJustifyCenter';
import flexVertical from 'src/styles/mixins/flexVertical';

// components
import VLayout from 'src/components/layouts/VLayout';
import TitleSecondary from 'src/components/elements/titles/TitleSecondary';
import TextLink from 'src/components/elements/links/TextLink';
import SiteTagsList from './SiteTagsList';

const Layout = styled(VLayout)`
  ${blockCenterH};

  ${api({
    baseline: scope`s:smallprint`
  })};
`;

const TagsTitle = styled(TitleSecondary)`
  ${flexJustifyCenter};
`;

const MoreTagsLink = styled(TextLink)`
  ${flexVertical};
  align-items: center;
  ${api({
    baseline: scope`s:smallprint`,
    marginTop: `10px`
  })};
`;

const SiteTags = ({ tags }) => (
  <Layout>
    <TagsTitle>Полезные теги</TagsTitle>
    <SiteTagsList tags={uniq(fetchTags(tags))} />
    <MoreTagsLink to="/tags" title="All tags">
      Больше
      <FiMoreHorizontal />
    </MoreTagsLink>
  </Layout>
);

SiteTags.propTypes = {
  tags: array.isRequired
};

export default SiteTags;
