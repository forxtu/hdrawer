// -----------------------------------------------------------------------------
// About Page > View >
// -----------------------------------------------------------------------------

import PropTypes from 'prop-types';
import React from 'react';

// utils
import {
  markdownItemHTMLAst,
  markdownItemImageSizes
} from 'src/utils/markdown';
import { aboutPageMetadata, aboutPageTitle } from 'src/utils/siteMetadata';

// components
import MarkdownContent from 'src/components/blocks/MarkdownContent';
import Metadata from 'src/components/blocks/Metadata';
import Page from 'src/components/blocks/Page';

const AboutPage = ({ data }) => (
  <Page title={aboutPageTitle(data)} imageSizes={markdownItemImageSizes(data)}>
    <Metadata {...aboutPageMetadata(data)} />
    <MarkdownContent htmlAst={markdownItemHTMLAst(data)} />
  </Page>
);

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;
