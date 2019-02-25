import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';

// styles
import flexHorizontal from 'src/styles/mixins/flexHorizontal';

// components
import CategoriesListItem from './CategoriesListItem';

const ListWrapper = styled.div`
  ${flexHorizontal};
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoriesList = ({ allCategories }) => (
  <ListWrapper>
    {allCategories.map(category => (
      <CategoriesListItem key={category.fieldValue} category={category} />
    ))}
  </ListWrapper>
);

CategoriesList.propTypes = {
  allCategories: array
};

export default CategoriesList;
