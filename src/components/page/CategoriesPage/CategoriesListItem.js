import React from 'react';
import { object } from 'prop-types';
import { api, scope } from 'cssapi';
import styled from 'styled-components';
import Img from 'gatsby-image';

// utils
import { categoryPath } from 'src/build/utils/url';

// styles
import linkProps from 'src/styles/mixins/linkProps';

// components
import ButtonLink from 'src/components/elements/links/ButtonLink';

const LinkWrapper = styled(ButtonLink)`
  ${api({
    baseline: scope`s:smallprint`,
    backgroundColor: `c:backgroundSides`
  })};
  margin: 10px;
  text-transform: capitalize;
`;

const CategoriesListItem = ({ category }) => (
  <LinkWrapper
    key={categoryPath(category.fieldValue)}
    to={categoryPath(category.fieldValue)}
  >
    {category.fieldValue} ({category.totalCount})
    {/* <Img fluid={frontmatterImageSizes(project)} /> */}
  </LinkWrapper>
);

CategoriesListItem.propTypes = {
  category: object
};

export default CategoriesListItem;
