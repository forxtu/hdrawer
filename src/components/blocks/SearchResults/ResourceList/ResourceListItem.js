import Img from 'gatsby-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// utils
import { firstToUpper } from 'src/utils/formatting';
import {
  fieldsSlug,
  fieldsTitle,
  fieldsType,
  frontmatterImageSizes
} from 'src/utils/markdown';

// components
import HLayout from 'src/components/layouts/HLayout';
import VLayout from 'src/components/layouts/VLayout';
import TextLink from 'src/components/elements/links/TextLink';
import TitleSecondary from 'src/components/elements/titles/TitleSecondary';

const ResourceType = styled.h3`
  font-style: italic;
`;

const Media = styled.div`
  position: relative;
`;

const Layout = styled(HLayout)`
  ${Media} {
    flex: 0 0 25%;
  }
`;

const ResourceListItem = ({ resource }) => {
  const slug = fieldsSlug(resource);
  const title = fieldsTitle(resource);
  return (
    <Layout>
      <Media>
        <Link to={slug} title={title}>
          <Img fluid={frontmatterImageSizes(resource)} />
        </Link>
      </Media>
      <VLayout spacing="small">
        <TextLink to={slug} title={title} underlineType="left">
          <TitleSecondary>{title}</TitleSecondary>
        </TextLink>
        <ResourceType>{firstToUpper(fieldsType(resource))}</ResourceType>
        <p>{resource.excerpt}</p>
      </VLayout>
    </Layout>
  );
};

ResourceListItem.propTypes = {
  resource: PropTypes.object.isRequired
};

export default ResourceListItem;
