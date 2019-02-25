import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { api, scope } from 'cssapi';

import { FiStar } from 'react-icons/fi';

// utils
import {
  frontmatterAuthor,
  frontmatterDate,
  timeToRead,
  wordCount
} from 'src/utils/markdown';
import { formatReadingTime } from 'src/utils/formatting';

//styles
import flexAlignCenter from 'src/styles/mixins/flexAlignCenter';

// components
import VLayout from 'src/components/layouts/VLayout';

const TopHead = styled.span`
  ${api({
    color: `c:text`
  })};
`;
const BotHead = styled.span`
  ${flexAlignCenter};
  ${api({
    color: `c:grey`,
    baseline: scope`s:smallprint`
  })};
  svg {
    ${api({
      color: `c:text`,
      marginLeft: scope`0.5ru`,
      marginRight: scope`0.5ru`,
      baseline: scope`s:smallprint`
    })};
  }
`;

const ArticleHeadMeta = ({ article }) => (
  <VLayout spacing="none">
    {/* <TopHead>{frontmatterAuthor(article)}</TopHead> */}
    <BotHead>
      {frontmatterDate(article)} {formatReadingTime(timeToRead(article))}
    </BotHead>
  </VLayout>
);

ArticleHeadMeta.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleHeadMeta;
