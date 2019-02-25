import React, { Fragment } from 'react';
import { array } from 'prop-types';
import { api, scope } from 'cssapi';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

// utils
import {
  fieldsSlug,
  fieldsTitle,
  fieldsTags,
  frontmatterImageSizes
} from 'src/utils/markdown';
import { randomColor } from 'src/utils/helpers';

// components
import VLayout from 'src/components/layouts/VLayout';
import ImgOverflow from 'src/components/elements/ImgOverflow';
import TextLink from 'src/components/elements/links/TextLink';
import TitleSecondary from 'src/components/elements/titles/TitleSecondary';
import ArticleHeadMeta from 'src/components/blocks/ArticleHeadMeta';
import ArticleFooterMeta from 'src/components/blocks/ArticleFooterMeta';

const ArticleContentText = styled.div`
  ${api({
    color: `c:contentText`
  })};
`;

const Wrapper = styled.div`
  margin-top: 52px;
`;

const BigCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HalfCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 52px;
`;

const CardWrapperBig = styled(Link)`
  width: 60%;
  position: relative;
`;

const BigCardDesc = styled(VLayout)`
  width: 48%;
  justify-content: space-between;
`;

const CardWrapperSmall = styled(Link)`
  width: 35%;
  position: relative;
`;

// box-shadow: 8px 8px 0px ${({ randomColor }) => randomColor};
const CardWrapperHalf = styled(Link)`
  width: 48%;
  position: relative;
  transition: 0.33s;
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 5px 0 ${({ randomColor }) => randomColor};
  }
  ${api({
    boxShadow: `8px 8px 0px c:turquise`,
    border: `b:black`
  })};
`;

const CardHalfDescription = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const Title = styled.h2`
  color: #fff;
  ${api({
    fontSize: scope`s:lede`
  })};
`;

const CardTagWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const TagItemOnCard = styled(Link)`
  padding: 6px;
  font-size: 12px;
  &:first-child {
    margin-right: 6px;
  }
  text-decoration: none;
  transition: 0.2s;
  ${api({
    color: `c:solar`,
    border: `1px solid c:solar`
  })};
  &:hover {
    ${api({
      color: `c:highlight`,
      border: `1px solid c:highlight`
    })};
  }
`;

const CardLayoutTopics = ({ articles }) => {
  const bigCardArticles = articles.slice(0, 1).map((article, index) => {
    const title = fieldsTitle(article);
    return (
      <Fragment>
        <CardWrapperHalf to={fieldsSlug(article)} randomColor={randomColor}>
          <Img fluid={frontmatterImageSizes(article)} />
          <ImgOverflow />
          <CardHalfDescription>
            <Title>{title}</Title>
          </CardHalfDescription>
        </CardWrapperHalf>
        <BigCardDesc spacing="small">
          <div>
            <TextLink
              to={fieldsSlug(article)}
              title={title}
              underlineType="left"
            >
              <TitleSecondary>{title}</TitleSecondary>
            </TextLink>
            <ArticleHeadMeta article={article} />
          </div>
          <ArticleContentText>{article.excerpt}</ArticleContentText>
          <ArticleFooterMeta article={article} />
        </BigCardDesc>
      </Fragment>
    );
  });
  const halfCardArticles = articles.slice(1, 3).map((article, index) => {
    const title = fieldsTitle(article);
    return (
      <Fragment>
        <CardWrapperHalf to={fieldsSlug(article)} randomColor={randomColor}>
          <Img fluid={frontmatterImageSizes(article)} />
          <ImgOverflow />
          <CardHalfDescription>
            <Title>{title}</Title>
            <ArticleHeadMeta article={article} />
            <CardTagWrapper>
              {fieldsTags(article).map(tag => {
                return (
                  <li>
                    <TagItemOnCard to={`/tags/${tag}`}>{tag}</TagItemOnCard>
                  </li>
                );
              })}
            </CardTagWrapper>
          </CardHalfDescription>
        </CardWrapperHalf>
      </Fragment>
    );
  });
  return (
    <Wrapper>
      <BigCardWrapper>{bigCardArticles}</BigCardWrapper>
      <HalfCardWrapper>{halfCardArticles}</HalfCardWrapper>
    </Wrapper>
  );
};

CardLayoutTopics.propTypes = {
  articles: array.isRequired
};

export default CardLayoutTopics;
