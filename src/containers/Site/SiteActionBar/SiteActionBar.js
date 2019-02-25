import React, { Component } from 'react';
import { api, scope } from 'cssapi';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import screenfull from 'screenfull';

// utils
import { setFullscreen } from 'src/store/ducks/actionBar/actions';

// components
import VLayout from 'src/components/layouts/VLayout';
import SiteActionBarNav from './SiteActionBarNav';
import SiteActionBarActions from './SiteActionBarActions';
import { setCurrentTheme } from 'src/store/ducks/global/actions';

const Layout = styled(VLayout)`
  align-items: center;
  position: fixed;
  display: flex;
  right: 0;
  top: 0;
  justify-content: space-between;
  height: 100vh;
  width: 60px;
  transition: 0.3s;
  ${api({
    padding: scope`1ru`,
    backgroundColor: `c:backgroundSides`,
    borderLeft: `b:default`
  })};
`;
// borderLeft: `2px solid c:backgroundSides`

class SiteActionBar extends Component {
  componentDidMount() {
    if (screenfull.enabled) {
      screenfull.on(`change`, () => {
        this.props.setFullscreen();
      });
    }
  }

  handleFullscreenOnClick = () => {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  };

  render() {
    const { isFullscreen, currentTheme, setCurrentTheme } = this.props;
    return (
      <Layout spacing="small">
        {console.log(this.props)}
        <SiteActionBarNav />
        <SiteActionBarActions
          fullscreenOnClick={this.handleFullscreenOnClick}
          screenfull={screenfull}
          isFullscreen={isFullscreen}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
      </Layout>
    );
  }
}

SiteActionBar.propTypes = {
  isFullscreen: bool.isRequired,
  setFullscreen: func.isRequired
};

const mapStateToProps = state => ({
  isFullscreen: state.actionBar.isFullscreen,
  currentTheme: state.global.currentTheme
});

const mapDispatchToProps = {
  setFullscreen,
  setCurrentTheme
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteActionBar);
