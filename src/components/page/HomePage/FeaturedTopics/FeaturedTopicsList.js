import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { api, scope } from 'cssapi';

// utils
import renderListItemsFeatured from 'src/utils/renderListItemsFeatured';

// styles
import flexHorizontal from 'src/styles/mixins/flexHorizontal';
import borderBottom from 'src/styles/mixins/borderBottom';

// components
import VList from 'src/components/elements/lists/VList';
import FeaturedTopicsListItem from './FeaturedTopicsListItem';
import FeaturedTopicsMoreLink from './FeaturedTopicsMoreLink';

const Layout = styled.div`
  width: calc(100vw - 400px);
  ${api({
    marginBottom: scope`2ru`
  })};
`;

const MoreLinkWrapper = styled.div`
  ${flexHorizontal};
  ${borderBottom};
  justify-content: flex-end;
`;

const FeaturedTopicsList = ({ articles }) => (
  <Layout>
    <FeaturedTopicsMoreLink title="Избранное" btnTitle="ЕЩЕ" />
    {/* {renderListItemsFeatured(FeaturedTopicsListItem, `article`, articles)} */}
    {articles.slice(4).map(article => {
      return <FeaturedTopicsListItem article={article} />;
    })}
    <FeaturedTopicsMoreLink btnTitle="Посмотреть все статьи" />
  </Layout>
);

FeaturedTopicsList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default FeaturedTopicsList;
