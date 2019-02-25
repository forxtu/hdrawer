import React from 'react';
import { FiHome, FiList, FiBookmark, FiTag } from 'react-icons/fi';

// components
import ActionBarGroup from './ActionBarGroup';
import ActionBarButtonLink from './ActionBarButtonLink';

const SiteActionBarNav = () => (
  <ActionBarGroup>
    <ActionBarButtonLink to="/" title="домой">
      🏡
    </ActionBarButtonLink>
    <ActionBarButtonLink to="/articles" title="статьи">
      📋
    </ActionBarButtonLink>
    <ActionBarButtonLink to="/categories" title="категории">
      📁
    </ActionBarButtonLink>
    <ActionBarButtonLink to="/tags" title="теги">
      📂
    </ActionBarButtonLink>
  </ActionBarGroup>
);

SiteActionBarNav.propTypes = {};

export default SiteActionBarNav;
