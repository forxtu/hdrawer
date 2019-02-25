import PropTypes from 'prop-types';
import styled from 'styled-components';
import { api, scope } from 'cssapi';

// styles
import flexAlignCenter from 'src/styles/mixins/flexAlignCenter';

const SiteSidebarToggler = styled.div`
  ${flexAlignCenter};
  left: 318px;
  width: 66px;
  height: 100vh;
  cursor: pointer;
  position: fixed;
  transition: 0.2s;
  justify-content: center;
  font-size: 1.5em;
  ${api({
    color: `c:text`
  })} :hover {
    ${api({
      backgroundColor: `c:greyHover`
    })};
  }
`;

SiteSidebarToggler.propTypes = {
  spacing: PropTypes.oneOf([
    `default`,
    `none`,
    `small`,
    `large`,
    `smallInverse`
  ])
};

SiteSidebarToggler.defaultProps = {
  spacing: `default`
};

export default SiteSidebarToggler;
