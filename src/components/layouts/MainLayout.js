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
      <div className="ui horizontal segments">
        <div className="ui segment">
          <p>
            <Link to={ rootPath } >Blog</Link>
          </p>
        </div>
        <div className="ui segment">
          <p>
            <Link to={ aboutPath } >About</Link>
          </p>
        </div>
      </div>
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
