import { api, scope } from 'cssapi';
import { prop } from 'ramda';
import React from 'react';
import styled from 'styled-components';

// styles
import directionBounce from 'src/styles/animations/directionBounce';
import arrow from 'src/styles/mixins/arrow';
import flexHorizontal from 'src/styles/mixins/flexHorizontal';
import singleLineTruncate from 'src/styles/mixins/singleLineTruncate';
import borderBottom from 'src/styles/mixins/borderBottom';

// components
import TextLink from './TextLink';

const Wrapper = styled.div`
  ${flexHorizontal};
  position: relative;
  z-index: 1;
`;

const Link = styled(TextLink)`
  ${borderBottom};
`;

const DisabledLink = styled.div`
  text-decoration: line-through;
  cursor: default;
  user-select: none;
  ${api({
    color: `c:grey`
  })};
`;

const PaginationLink = props => (
  <Wrapper {...props}>
    {props.disabled ? <DisabledLink {...props} /> : <Link {...props} />}
  </Wrapper>
);

export default PaginationLink;
