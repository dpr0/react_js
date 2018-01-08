import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/elements/Link';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';
import { rootPath, aboutPath, pieChartPath } from 'helpers/routes';

const MainLayout = ({children}) => (
  <div>
    <Logo />
    {children}
    <Footer />
  </div>
);

const Logo = () => (
  <Segment>
    <Header>
      <div className="ui attached stackable menu">
        <div className="ui container">
          <Link className="item" to={ rootPath } >Home</Link>
          <Link className="item" to={ pieChartPath } >Chart</Link>
          <Link className="item" to={ aboutPath } >About</Link>
          <div className="ui simple dropdown item">
            Sample
            <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item"><i className="edit icon"></i> Edit Profile</a>
              <a className="item"><i className="globe icon"></i> Choose Language</a>
              <a className="item"><i className="settings icon"></i> Account Settings</a>
            </div>
          </div>
          <div className="right item">
            <div className="ui input">
              <input type="text" placeholder="Search..." />
            </div>
            <Input icon placeholder='Search...'>
              <Icon name='search' />
            </Input>
          </div>
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
