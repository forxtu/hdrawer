import { api, scope } from 'cssapi';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import spinOnYAxis from '../styles/animations/spinOnYAxis';

// components
import Logo from 'src/components/elements/Logo';
import TextLink from 'src/components/elements/links/TextLink';
import HLayout from 'src/components/layouts/HLayout';
import VLayout from 'src/components/layouts/VLayout';

const Four = styled.div``;
const LogoWrapper = styled.div``;
const Layout = styled(VLayout)`
  text-align: center;
  ${LogoWrapper} {
    ${api({
      width: `200`
    })};
  }
`;

const Header = styled(HLayout.withComponent(`header`))`
  animation: ${spinOnYAxis(3)} 3s cubic-bezier(0.165, 0.84, 0.44, 1);
  align-items: center;
  ${api({
    fontSize: scope`s:giant`,
    fontFamily: `f:title`,
    marginH: `auto`
  })};
`;

const Body = styled.div``;

const NotFoundMessage = ({ path }) => (
  <Layout spacing="large">
    <Header spacing="smallInverse">
      <Four>4</Four>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Four>4</Four>
    </Header>
    <Body>
      <p>
        Такая страница не найдена <i>{path}</i>.
      </p>
      <p>
        Может перейти на <TextLink to="/">Домашнюю страницу</TextLink>?
      </p>
    </Body>
  </Layout>
);

NotFoundMessage.propTypes = {
  path: PropTypes.string.isRequired
};

export default NotFoundMessage;
