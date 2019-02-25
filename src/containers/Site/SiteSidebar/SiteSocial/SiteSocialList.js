import React from 'react';

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram
} from 'react-icons/fi';

// components
import HList from 'src/components/elements/lists/HList';
import SiteSocialListItem from './SiteSocialListItem';

const ArticlesList = () => {
  const items = [
    { name: `github`, url: `https://github.com/forxtu`, comp: FiGithub },
    {
      name: `linkedin`,
      url: `https://www.linkedin.com/in/forxtu/`,
      comp: FiLinkedin
    },
    {
      name: `twitter`,
      url: `https://www.twitter.com/forxtu/`,
      comp: FiTwitter
    },
    {
      name: `facebook`,
      url: `https://www.facebook.com/forxtu/`,
      comp: FiFacebook
    },
    {
      name: `instagram`,
      url: `https://www.instagram.com/forxtu/`,
      comp: FiInstagram
    }
  ];

  return (
    <HList>
      {items.map(item => (
        <SiteSocialListItem key={item.name} {...item} />
      ))}
    </HList>
  );
};

ArticlesList.propTypes = {};

export default ArticlesList;
