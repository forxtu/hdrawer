import styled from 'styled-components';

const ImgOverflow = styled.div`
  background: linear-gradient(to top, #000, transparent);
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  transition: 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

export default ImgOverflow;
