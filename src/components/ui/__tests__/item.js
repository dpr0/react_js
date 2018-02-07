import React            from 'react';
import PropTypes        from 'prop-types';
import ReactDom         from 'react-dom';
import { expect }       from 'chai';
import { shallow }      from 'enzyme';
import { render }       from 'enzyme';
import Link             from 'components/elements/Link';
import BlogItem         from 'components/ui/BlogItem';
import { Item }         from 'semantic-ui-react';
import Like             from 'components/ui/Like';
import Image            from 'components/ui/Image';
import TextBox          from 'components/ui/TextBox';
import Enzyme           from 'enzyme';
import Adapter          from 'enzyme-adapter-react-16';
import chai             from "chai";
import renderer         from "react-test-renderer";
import chaiJestSnapshot from "chai-jest-snapshot";
Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiJestSnapshot);


describe('BlogItem', () => {
  const itemProps = {
    id:          1,
    like:        1,
    dislike:     0,
    title:       'React!',
    body:        '',
    image:       { src: '', alt: ''},
    meta:        {},
    likeFunc:    () => {}
  };

  it('renders the title', () => {
    const blogItem = render(<BlogItem {...itemProps} />);
    expect(blogItem.text()).to.contain('React!');
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<BlogItem {...itemProps} />, div);
  });

  it('should render the title', () => {
    const item = shallow(<BlogItem {...itemProps} />);
    const header = <Link to='/post/1'>React!</Link>;
    expect(item.contains(header)).equal(true);
  });

  it('should render usual item', () => {
    const item = shallow(<BlogItem {...itemProps} />);
    expect(item).to.matchSnapshot();
  });


  it('should render usual item', () => {
    const tree = renderer.create(<BlogItem {...itemProps} />).toJSON();
    expect(tree).to.matchSnapshot();
  });
});