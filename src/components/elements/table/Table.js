import { api } from 'cssapi';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  ${api({
    color: `c:text`
  })};

  thead {
    ${api({
      background: `c:backgroundSides`,
      color: `c:text`,
      borderColor: `c:borderColor`
    })};
  }

  th {
    font-weight: normal;
  }
`;

export default Table;
