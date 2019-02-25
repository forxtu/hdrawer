import { api, scope } from 'cssapi';
import styled from 'styled-components';

// styles
import defaultBorder from 'src/styles/mixins/defaultBorder';

// components
import HorizontalRule from 'src/components/elements/HorizontalRule';

const Footnotes = styled.footer`
  ${defaultBorder()};
  ${api({
    paddingTop: scope`1ru`
  })};

  /* Remark adds an HRule which we don't need so we hide it */
  ${HorizontalRule} {
    display: none;
  }
`;

export default Footnotes;
