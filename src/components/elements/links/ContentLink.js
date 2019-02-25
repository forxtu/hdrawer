import { api } from 'cssapi';
import styled from 'styled-components';

// styles
import linkProps from 'src/styles/mixins/linkProps';

// components
import BaseLink from './BaseLink';

const ContentLink = styled(BaseLink)`
  ${linkProps(`c:text`, `c:highlight`)};
  position: relative;
  ::before {
    content: '';
    position: absolute;
    transition: all 0.25s ease-in-out;

    ${api({
      height: `0.1em`,
      bottom: 0,
      left: 0,
      right: 0,
      background: `c:highlight`
    })};
  }

  html.feat-no-touchevents &:hover::before {
    left: 50%;
    right: 50%;
    transition: all 0.25s ease-in-out;
  }
`;

export default ContentLink;
