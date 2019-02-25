import styled from 'styled-components';

// styles
import uiList from 'src/styles/mixins/uiList';

// components
import VLayout from 'src/components/layouts/VLayout';

const VList = styled(VLayout.withComponent(`ul`))`
  ${uiList};
`;

export default VList;
