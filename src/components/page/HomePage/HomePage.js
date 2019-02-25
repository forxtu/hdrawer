import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { uniq } from 'ramda';
import StickyBox from 'react-sticky-box';

// utils
import {
  markdownItemHTMLAst,
  markdownItemImageSizes,
  markdownItemNodes
} from 'src/utils/markdown';
import { homePageMetadata, homePageTitle } from 'src/utils/siteMetadata';

// components
import MarkdownContent from 'src/components/blocks/MarkdownContent';
import Metadata from 'src/components/blocks/Metadata';
import Page from 'src/components/blocks/Page';
import FeaturedTopics from './FeaturedTopics';
import CardLayoutTopics from './CardLayoutTopics';
import SiteTags from 'src/containers/Site/SiteSidebar/SiteTags';
import BaseLink from 'src/components/elements/links/BaseLink';

const FeaturedWrapper = styled.div`
  display: flex;
`;

const StickyWrapper = styled.div`
  margin-left: 32px;
  padding: 0 32px;
`;

const StickyInnerWrapper = styled.div`
  height: 50%;
`;

const HomePage = ({ data }) => {
  const articles = markdownItemNodes(data);
  const { categoriesGroup, keywordsGroup } = data.allMarkdownRemark;
  return (
    <Page imageSizes={markdownItemImageSizes(data)}>
      <Metadata {...homePageMetadata(data)} />
      <CardLayoutTopics articles={articles} />
      <FeaturedWrapper>
        <FeaturedTopics articles={articles} />
        <StickyWrapper>
          <StickyInnerWrapper>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <SiteTags tags={keywordsGroup} />
            </StickyBox>
          </StickyInnerWrapper>
          <StickyInnerWrapper>
            <StickyBox offsetTop={20} offsetBottom={20}>
              <BaseLink to="/about">О проекте</BaseLink>
              <br />
              <BaseLink to="/contact">Контакты</BaseLink>
            </StickyBox>
          </StickyInnerWrapper>
        </StickyWrapper>
      </FeaturedWrapper>
      <MarkdownContent htmlAst={markdownItemHTMLAst(data)} />
    </Page>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePage;
