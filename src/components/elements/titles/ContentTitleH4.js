import { api, scope } from 'cssapi';
import styled from 'styled-components';

const ContentTitleH4 = styled.h4`
  ${api({
    baseline: scope`s:secondaryTitle`,
    color: `c:title`
  })};
`;

export default ContentTitleH4;
