import styled from 'styled-components';

// styles
import uiList from 'src/styles/mixins/uiList';

// components
import HLayout from 'src/components/layouts/HLayout';

const HList = styled(HLayout.withComponent(`ul`))`
  ${uiList};
  flex-wrap: wrap;
`;

export default HList;
