// eslint-disable react/no-danger

import PropTypes from 'prop-types';
import React from 'react';

// utils
import {
  fieldsSlug,
  fieldsTitle,
  markdownItem,
  markdownItemImageSizes,
  markdownItemMetadata,
  markdownItemTitle,
  next,
  previous
} from 'src/utils/markdown';

// components
import Metadata from 'src/components/blocks/Metadata';
import NextPreviousNav from 'src/components/blocks/NextPreviousNav';
import Page from 'src/components/blocks/Page';
import Project from './Project';

const ProjectPage = ({ data }) => {
  const previousProject = previous(data);
  const nextProject = next(data);

  const nav = (
    <NextPreviousNav
      previousLabel={fieldsTitle(previousProject)}
      nextLabel={fieldsTitle(nextProject)}
      previousPath={fieldsSlug(previousProject)}
      nextPath={fieldsSlug(nextProject)}
    />
  );

  return (
    <Page
      title={markdownItemTitle(data)}
      imageSizes={markdownItemImageSizes(data)}
      nav={nav}
    >
      <Metadata {...markdownItemMetadata(data)} />
      <Project project={markdownItem(data)} />
    </Page>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProjectPage;
