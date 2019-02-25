import { api } from 'cssapi';
import styled from 'styled-components';

// styles
import linkProps from 'src/styles/mixins/linkProps';

// components
import BaseLink from 'src/components/elements/links/BaseLink';

const FootnoteRef = styled(BaseLink)`
  font-weight: bold;
  ${linkProps(`c:text`, `c:highlight`)};
  ${api({
    baseline: `s:body`
  })};
`;

FootnoteRef.displayName = `FootnoteRef`;

export default FootnoteRef;
