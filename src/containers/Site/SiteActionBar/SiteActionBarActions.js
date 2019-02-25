import React from 'react';
import { api } from 'cssapi';
import { func, bool, object } from 'prop-types';
import styled from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import { FiMaximize, FiMinimize, FiArrowUp, FiCircle } from 'react-icons/fi';

// styles
import theme from 'src/styles/theme';
import darkTheme from 'src/styles/darkTheme';

// components
import ActionBarGroup from './ActionBarGroup';
import ActionBarButton from './ActionBarButton';
import SupportButton from 'src/components/elements/SupportButton';

const LightThemeBtn = styled(FiCircle)`
  border-radius: 50%;
  ${api({
    backgroundColor: `c:white`,
    color: `c:white`
  })};
`;
const DarkThemeBtn = styled(FiCircle)`
  border-radius: 50%;
  ${api({
    backgroundColor: `c:darkGrey`,
    color: `c:darkGrey`
  })};
`;

const SiteActionBarActions = ({
  isFullscreen,
  screenfull,
  fullscreenOnClick,
  currentTheme,
  setCurrentTheme
}) => (
  <ActionBarGroup>
    <ActionBarButton>
      <ScrollToTop
        showUnder={160}
        style={{ position: `relative`, bottom: 0, right: 0 }}
      >
        <span>🔺</span>
      </ScrollToTop>
    </ActionBarButton>
    <ActionBarButton>
      {currentTheme === theme ? (
        // <DarkThemeBtn
        //   title="Toggle to Dark theme"
        //   onClick={() => setCurrentTheme(darkTheme)}
        // />
        <span onClick={() => setCurrentTheme(darkTheme)}>🌑</span>
      ) : (
        // <LightThemeBtn
        //   title="Toggle to Light theme"
        //   onClick={() => setCurrentTheme(theme)}
        // />
        <span onClick={() => setCurrentTheme(theme)}>☀️</span>
      )}
    </ActionBarButton>
    <ActionBarButton>
      <SupportButton title="Buy me a coffee" />
    </ActionBarButton>
    {screenfull.enabled && (
      <ActionBarButton>
        {isFullscreen ? (
          // <FiMinimize onClick={fullscreenOnClick} />
          <span onClick={fullscreenOnClick}>⬜️</span>
        ) : (
          // <FiMaximize onClick={fullscreenOnClick} />
          <span onClick={fullscreenOnClick}>⬛️</span>
        )}
      </ActionBarButton>
    )}
  </ActionBarGroup>
);

SiteActionBarActions.propTypes = {
  isFullscreen: bool.isRequired,
  screenfull: object.isRequired,
  fullscreenOnClick: func.isRequired
};

export default SiteActionBarActions;
