import React from 'react';
import styled from 'styled-components';

// components
import HLayout from 'src/components/layouts/HLayout';
import UndistractionLink from 'src/components/elements/links/UndistractionLink';

const Layout = styled(HLayout)`
  align-items: baseline;
  justify-content: center;
`;

const Credit = () => (
  <Layout spacing="tiny">
    <div>Built by</div>
    <UndistractionLink to="http://undistraction.com">
      Undistraction
    </UndistractionLink>
  </Layout>
);

export default Credit;
