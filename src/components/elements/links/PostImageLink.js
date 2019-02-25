import styled from 'styled-components';
import { Link } from 'gatsby';
import { api } from 'cssapi';

const PostImageLink = styled(Link)`
  transition: box-shadow 0.8s, transform 0.33s;
  box-shadow: 8px 8px 0px ${props => props.randomColor};
  ${api({
    border: `b:black`
  })};
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 5px 0 ${({ randomColor }) => randomColor};
  }
`;

export default PostImageLink;
