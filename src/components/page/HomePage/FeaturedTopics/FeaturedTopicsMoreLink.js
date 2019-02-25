import React from 'react';
import styled from 'styled-components';
import { api, scope } from 'cssapi';
import { FiChevronRight } from 'react-icons/fi';

// styles
import flexAlignCenter from 'src/styles/mixins/flexAlignCenter';
import flexHorizontal from 'src/styles/mixins/flexHorizontal';
import borderBottom from 'src/styles/mixins/borderBottom';

// components
import TextLink from 'src/components/elements/links/TextLink';

const Wrapper = styled.div`
  ${flexHorizontal};
  border-bottom: 2px solid #333;
  justify-content: space-between;
`;

const Title = styled.h2`
  ${api({
    borderBottom: '2px solid c:red',
    marginBottom: '-2px',
    baseline: scope`s:lede`,
    color: `c:title`
  })};
`;

const MoreLink = styled(TextLink)`
  ${flexAlignCenter};
  ${api({
    marginBottom: scope`1ru`,
    baseline: scope`s:mediumprint`
  })};
`;

const FeaturedTopicsMoreLink = ({ title, btnTitle }) => (
  <Wrapper>
    <Title>{title ? title : <div />}</Title>
    <MoreLink to="/articles" title="all articles">
      {btnTitle}
      <FiChevronRight />
    </MoreLink>
  </Wrapper>
);

export default FeaturedTopicsMoreLink;
