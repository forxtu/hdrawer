import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// utils
import configureStore from 'src/store';
import { setCurrentTheme } from 'src/store/ducks/global/actions';

// styles
import 'src/styles/global.css';
import 'src/styles/prism-atom-dark.css';
import theme from 'src/styles/theme';
import darkTheme from 'src/styles/darkTheme';

// components
import Site from 'src/containers/Site';

const reduxStore = configureStore();

class DefaultLayout extends Component {
  render() {
    const { data, children, currentTheme } = this.props;
    if (typeof document !== `undefined`) {
      const { body } = document;
      this.props.currentTheme === theme
        ? (body.style.background = `#f9f9fa`)
        : (body.style.background = `#1F1F1F`);
    }
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={currentTheme}>
          <Site data={data}>{children}</Site>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query MainLayoutQuery {
        allMarkdownRemark(filter: { fields: { type: { eq: "article" } } }) {
          categoriesGroup: group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
          keywordsGroup: group(field: frontmatter___keywords) {
            fieldValue
            totalCount
          }
        }
        site {
          siteMetadata {
            data {
              owner
              title
              startYear
              showCredit
            }
            structure {
              resources {
                projects {
                  title
                  navTitle
                  path
                }
                articles {
                  title
                  navTitle
                  path
                }
              }
              pages {
                about {
                  title
                  navTitle
                  path
                }
                home {
                  title
                  navTitle
                  path
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ConnectedDefaultLayout store={reduxStore} data={data} {...props} />
    )}
  />
);

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object
};

const mapStateToProps = state => ({
  currentTheme: state.global.currentTheme
});

const mapDispatchToProps = {
  setCurrentTheme
};

const ConnectedDefaultLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
