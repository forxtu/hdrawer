import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram
} from 'react-icons/fi';

// styles
import flexJustifyCenter from 'src/styles/mixins/flexJustifyCenter';

// components
import HLayout from 'src/components/layouts/HLayout';
import SiteTagsListItem from './SiteTagsListItem';

const Layout = styled(HLayout)`
  ${flexJustifyCenter};
  flex-wrap: wrap;
  margin-top: 10px;
`;

const SiteTagsList = ({ tags }) => {
  const shuffledTags = tags.filter(() => Math.round(Math.random()));
  const allTags = shuffledTags.map((tag, i) => {
    while (i < 5) {
      return <SiteTagsListItem key={tag} tag={tag} />;
    }
    return null;
  });

  return <Layout>{allTags}</Layout>;
};

SiteTagsList.propTypes = {
  tags: array.isRequired
};

export default SiteTagsList;
