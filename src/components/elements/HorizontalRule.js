import styled from 'styled-components';

// styles
import defaultBorder from 'src/styles/mixins/defaultBorder';

const HorizontalRule = styled.hr`
  border: none;
  position: relative;
  margin-bottom: 0;
  ${defaultBorder()};
`;
export default HorizontalRule;
