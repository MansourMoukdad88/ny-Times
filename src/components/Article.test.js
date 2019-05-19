import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import ArticleList from './ArticleList';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';


describe('<Article />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Article />);
  });

  it('should matche the snapshot', () => {
    const tree = renderer.create(<Article />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Article />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render one <ArticleList /> components', () => {
    expect(wrapper.find(ArticleList))
  });
});