import { api } from 'cssapi';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import flexAlignCenter from 'src/styles/mixins/flexAlignCenter';

// components
import SupportButton from 'src/components/elements/SupportButton';

const Layout = styled.span`
  ${flexAlignCenter};
  position: relative;
  text-align: center;
  justify-content: center;
  ${api({
    color: `c:text`,
    padding: [`0.5ru 2ru`, `1ru 2ru`]
  })};
`;

const Copyright = ({ owner, dateRange }) => (
  <Layout>
    Created with <SupportButton title="love and support of tea" /> by {owner}
    {` `}
    {dateRange}
  </Layout>
);

Copyright.propTypes = {
  owner: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired
};

export default Copyright;
