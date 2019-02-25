import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// utils
import {
  fieldsSlug,
  fieldsTitle,
  frontmatterImageSizes
} from 'src/utils/markdown';

// styles
import scaleBounce from 'src/styles/animations/scaleBounce';
import linkProps from 'src/styles/mixins/linkProps';

// components
import VLayout from 'src/components/layouts/VLayout';
import BaseLink from 'src/components/elements/links/BaseLink';
import TitleSecondary from 'src/components/elements/titles/TitleSecondary';

const Title = styled(TitleSecondary)`
  text-align: center;
  position: relative;
  font-weight: bold;
`;

const ImgLayout = styled.div``;

const Layout = styled(BaseLink)`
  position: relative;
  display: block;
  ${linkProps(`c:text`, `c:highlight`)};

  html.feat-no-touchevents &:hover {
    animation: ${scaleBounce(1.05, 0.97)} 0.3s ease-in-out;
  }
`;
const ProjectsListItem = ({ project }) => (
  <Layout to={fieldsSlug(project)}>
    <VLayout spacing="small">
      <ImgLayout>
        <Img fluid={frontmatterImageSizes(project)} />
      </ImgLayout>
      <Title>{fieldsTitle(project)}</Title>
    </VLayout>
  </Layout>
);

ProjectsListItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectsListItem;
