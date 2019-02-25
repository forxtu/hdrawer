import PropTypes from 'prop-types';
import React from 'react';
import { isEmpty } from 'ramda';

// utils
import { pluralise } from 'src/utils/formatting';
import { markdownItemNodes } from 'src/utils/markdown';
import {
  projectsPageMetadata,
  projectsResourceTitle
} from 'src/utils/siteMetadata';

// components
import Metadata from 'src/components/blocks/Metadata';
import Page from 'src/components/blocks/Page';
import ProjectsList from './ProjectsList';

const ProjectsPage = ({ data }) => (
  <Page title={pluralise(projectsResourceTitle(data))}>
    <Metadata {...projectsPageMetadata(data)} />
    {isEmpty(data.projects) ? (
      <div>No Projects added yet</div>
    ) : (
      <ProjectsList projects={markdownItemNodes(data)} />
    )}
  </Page>
);

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProjectsPage;
