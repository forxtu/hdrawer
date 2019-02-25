import { api, scope } from 'cssapi';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import flexHorizontal from 'src/styles/mixins/flexHorizontal';

// components
import ArrowButtonLink from 'src/components/elements/links/ArrowButtonLink';
import PaginationLink from 'src/components/elements/links/PaginationLink';
import DisabledArrowButtonLink from 'src/components/elements/links/DisabledArrowButtonLink';

export const LayoutPrevious = styled.div``;
export const LayoutNext = styled.div``;

const Layout = styled.nav`
  justify-content: space-between;

  ${flexHorizontal};

  ${LayoutNext} {
    justify-content: flex-end;
  }

  ${LayoutPrevious} {
    justify-content: flex-start;
  }
`;
// ${LayoutNext}, ${LayoutPrevious} {
//   ${api({
//     width: scope`calc(50% - 0.5ru)`
//   })};
// }

const previousPathLink = (previousPath, label) =>
  previousPath ? (
    <PaginationLink to={previousPath}>{label}</PaginationLink>
  ) : (
    <PaginationLink disabled>{label}</PaginationLink>
  );

const nextPathLink = (nextPath, label) =>
  nextPath ? (
    <PaginationLink to={nextPath}>{label}</PaginationLink>
  ) : (
    <PaginationLink disabled>{label}</PaginationLink>
  );

const NextPreviousNav = ({
  previousPath,
  nextPath,
  previousLabel,
  nextLabel
}) => (
  <Layout>
    <LayoutPrevious>
      {previousPathLink(previousPath, previousLabel)}
    </LayoutPrevious>
    <LayoutNext>{nextPathLink(nextPath, nextLabel)}</LayoutNext>
  </Layout>
);

NextPreviousNav.propTypes = {
  previousPath: PropTypes.string,
  nextPath: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string
};

NextPreviousNav.defaultProps = {
  previousPath: null,
  nextPath: null,
  previousLabel: `Previous`,
  nextLabel: `Next`
};

export default NextPreviousNav;
