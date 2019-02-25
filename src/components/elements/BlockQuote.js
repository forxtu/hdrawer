import { api, scope } from 'cssapi';
import styled from 'styled-components';

// styles
import elementBorder from 'src/styles/mixins/elementBorder';

const Blockquote = styled.blockquote`
  ${elementBorder()};
  ${api({
    paddingLeft: scope`0.5ru`
  })};
  p {
    ${api({
      color: `c:text`
    })};
  }
`;

export default Blockquote;
