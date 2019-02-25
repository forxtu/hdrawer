import { api, scope } from 'cssapi';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import blockCenterH from 'src/styles/mixins/blockCenterH';

// components
import VLayout from 'src/components/layouts/VLayout';
import SiteSocialList from './SiteSocialList';

const Layout = styled(VLayout)`
  ${blockCenterH};

  ${api({
    baseline: scope`s:smallprint`
  })};
`;

const SiteSocial = () => (
  <Layout>
    <SiteSocialList />
  </Layout>
);

SiteSocial.propTypes = {};

export default SiteSocial;
