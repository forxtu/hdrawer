import PropTypes from 'prop-types';
import React from 'react';

// components
import Metadata from 'src/components/blocks/Metadata';
import Page from 'src/components/blocks/Page/Page';
import TagsList from './TagsList';

const TagsPage = ({ data }) => {
  const { group: allTags } = data.allMarkdownRemark;
  const { tags: tagsMetadata } = data.site.siteMetadata.metadata;
  return (
    <Page title="Теги">
      <Metadata {...tagsMetadata} />
      <TagsList allTags={allTags} />
    </Page>
  );
};

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default TagsPage;
