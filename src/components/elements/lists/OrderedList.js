import { api, scope } from 'cssapi';
import styled from 'styled-components';

// components
import UnorderedList from './UnorderedList';

const OrderedList = styled(UnorderedList)`
  counter-reset: listItem;

  li:after {
    counter-increment: listItem;
    content: counter(listItem);
    position: absolute;
    text-align: center;
    ${api({
      color: `c:text`,
      width: scope`1ru`,
      left: scope`-1ru`,
      top: 0
    })};
  }
  li:before {
    content: none;
  }
`;

export default OrderedList;
