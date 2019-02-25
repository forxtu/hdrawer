import { api, scope } from 'cssapi';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
import elementBorder from 'src/styles/mixins/elementBorder';
import spaceChildrenV from 'src/styles/mixins/spaceChildrenV';
import flexAlignCenter from 'src/styles/mixins/flexAlignCenter';

const scaleMap = {
  default: `body`,
  small: `smallprint`
};

const UnorderedList = styled.ul`
  ${spaceChildrenV(`0.5rem`)};

  ${p =>
    api({
      baseline: scope`s:${scaleMap[p.size]} 1`,
      paddingLeft: scope`1ru`
    })(p)};

  li {
    position: relative;
    list-style: none;
    ${api({
      color: `c:text`
    })};

    &::before {
      content: '';
      position: absolute;
      border-radius: 50%;
      ${api({
        left: scope`-1ru`,
        top: `10px`,
        height: scope`0.222ru`
      })};
      ${elementBorder()};
    }
  }
`;

UnorderedList.propTypes = {
  size: PropTypes.string
};

UnorderedList.defaultProps = {
  size: `default`
};

export default UnorderedList;
