import PropTypes from 'prop-types';
import React from 'react';

// utils
import { FourOhFourPageTitle } from 'src/utils/siteMetadata';

// components
import Page from 'src/components/blocks/Page';
import NotFoundMessage from './NotFoundMessage';

// Currently no theme is supplied to styled components in the 404 page so we
// need to do it explicitly here by wrapping it in a ThemeProvider.
const FourOhFourPage = props => (
  <Page title={FourOhFourPageTitle(props.data)}>
    <NotFoundMessage path={props.location.pathname} />
  </Page>
);

FourOhFourPage.propTypes = {
  location: PropTypes.object.isRequired,

  data: PropTypes.object.isRequired
};

export default FourOhFourPage;
