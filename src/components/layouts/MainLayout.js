import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/elements/Link';
import { Header, Segment, Container } from 'semantic-ui-react';
import { rootPath, aboutPath } from 'helpers/routes';

const MainLayout = ({children}) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

const Logo = () => (
  <Segment>
    <Header>
      <Link to={ rootPath } >Blog</Link>
      <Link to={ aboutPath } >About</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by dpro
  </Segment>
);

MainLayout.propTypes = {children: PropTypes.object};

export default MainLayout;
