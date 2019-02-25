import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { api, scope } from 'cssapi';

// utils
import { tagPath } from 'src/build/utils/url';

// styles
import linkProps from 'src/styles/mixins/linkProps';

// components
import ButtonLink from 'src/components/elements/links/ButtonLink';

const ListItemWrapper = styled.li``;

const ListItemLink = styled(ButtonLink)`
  ${api({
    baseline: scope`s:smallprint`,
    backgroundColor: `c:backgroundSides`
  })};
  text-transform: capitalize;
  margin: 10px;
`;

const TagsListItem = ({ tag }) => (
  // <ListItemWrapper>
  <ListItemLink to={tagPath(tag)}>{tag}</ListItemLink>
  // </ListItemWrapper>
);

TagsListItem.propTypes = {
  tag: string
};

export default TagsListItem;
