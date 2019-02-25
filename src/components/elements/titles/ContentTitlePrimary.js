import { api, scope } from 'cssapi';
import styled from 'styled-components';

const ContentTitlePrimary = styled.h2`
  ${api({
    baseline: scope`s:contentPrimaryTitle`,
    color: `c:title`
  })};
`;

export default ContentTitlePrimary;
