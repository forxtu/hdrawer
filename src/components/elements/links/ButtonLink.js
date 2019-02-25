import { api } from 'cssapi';
import styled from 'styled-components';

// styles
import linkProps from 'src/styles/mixins/linkProps';

// components
import BaseLink from './BaseLink';

// box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
const Button = styled(BaseLink)`
  ${linkProps(`c:buttonC`, `c:white`)};

  padding: 8px 15px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  border: none;
  ${api({
    boxShadow: `5px 5px 0 c:buttonShadowStatic`
  })};
  border: 1px solid #000;
  transition: all 0.3s ease 0s;
  outline: none;
  margin: 0;

  :hover {
    transform: translateY(-5px);
    ${api({
      backgroundColor: `c:highlight`,
      boxShadow: `0px 5px 0 c:buttonShadow`
    })};
  }
  ${api({
    backgroundColor: `c:buttonBg`,
    color: `c:buttonC`
  })};
`;

export default Button;
