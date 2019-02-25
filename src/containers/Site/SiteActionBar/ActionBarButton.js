import { api } from 'cssapi';
import styled from 'styled-components';

// styles
import flexHorizontal from 'src/styles/mixins/flexHorizontal';
import linkProps from 'src/styles/mixins/linkProps';

export default styled.div`
  ${flexHorizontal};
  ${linkProps(`c:text`, `c:highlight`)};
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
  ${api({
    color: `c:text`
  })};
`;
