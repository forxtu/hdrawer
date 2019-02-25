import PropTypes from 'prop-types';
import React from 'react';

// utils
import { notFoundPageTitle } from 'src/utils/siteMetadata';

// components
import Page from 'src/components/blocks/Page';
import NotFoundMessage from './NotFoundMessage';

const NotFoundPage = ({ data, location }) => (
  <Page title={notFoundPageTitle(data)}>
    <NotFoundMessage path={location.pathname} />
  </Page>
);

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,

  data: PropTypes.object.isRequired
};

export default NotFoundPage;
