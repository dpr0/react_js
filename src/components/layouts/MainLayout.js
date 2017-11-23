import React, {PropTypes} from 'react';
import { Button, Header, Segment, Container } from 'semantic-ui-react';
import Link from '../../components/elements/Link';
import history from '../../helpers/history';
import { postPath } from '../../helpers/routes';

const MainLayout = ({children}) => (
  <Container>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </Container>
);

// MainLayout.propTypes = {
//   children: PropTypes.node
// };

const GoBackButton = () => (
  <Button onClick={ () => history.goBack() }>Назад</Button>
);

const Logo = () => (
  <Segment>
    <Header>
      <Link to={ postPath } >Blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by dpro
  </Segment>
);

export default MainLayout;
