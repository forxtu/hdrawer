// -----------------------------------------------------------------------------
// Contact Page > View >
// -----------------------------------------------------------------------------

import PropTypes from 'prop-types';
import React from 'react';

// utils
import { markdownItemHTMLAst } from 'src/utils/markdown';
import { contactPageMetadata } from 'src/utils/siteMetadata';

// components
import MarkdownContent from 'src/components/blocks/MarkdownContent';
import Metadata from 'src/components/blocks/Metadata';
import Page from 'src/components/blocks/Page';
import ContactForm from './ContactForm';

const ContactPage = ({ data }) => (
  <Page title="Есть вопрос? Свяжитесь со мной!">
    <Metadata {...contactPageMetadata(data)} />
    <MarkdownContent htmlAst={markdownItemHTMLAst(data)} />
    <ContactForm />
  </Page>
);

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;
