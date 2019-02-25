import { api, scope } from 'cssapi';
import styled from 'styled-components';

const TitleSecondary = styled.h2`
  ${api({
    baseline: scope`s:secondaryTitle`,
    color: `c:title`
  })};
`;

export default TitleSecondary;
