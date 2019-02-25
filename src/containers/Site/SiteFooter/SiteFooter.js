import { api, scope } from 'cssapi';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// utils
import { dateRange } from 'src/utils/formatting';

// styles
import blockCenterH from 'src/styles/mixins/blockCenterH';

// components
import VLayout from 'src/components/layouts/VLayout';
import Copyright from './Copyright';
import Credit from './Credit';

const Layout = styled(VLayout.withComponent(`footer`))`
  ${blockCenterH};

  ${api({
    baseline: scope`s:smallprint`
  })};

  > * {
    min-width: 75%;
    ${api({
      marginH: `auto`
    })};
  }
`;

const SiteFooter = ({ owner, startYear, showCredit }) => (
  <Layout>
    <Copyright owner={owner} dateRange={dateRange(startYear)} />
    {showCredit && <Credit />}
  </Layout>
);

SiteFooter.propTypes = {
  owner: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  showCredit: PropTypes.bool.isRequired
};

export default SiteFooter;
