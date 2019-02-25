import { api, scope } from 'cssapi';
import styled from 'styled-components';

const ContentTitleTertiary = styled.h4`
  ${api({
    baseline: scope`s:contentTertiaryTitle`,
    color: `c:title`
  })};
`;

export default ContentTitleTertiary;
