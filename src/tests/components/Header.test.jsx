import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJson(wrapper)).toMatchSnapshot();
  
  // expect(wrapper.find('h1').length).toBe(1);
  //  const renderer = new ReactShallowRenderer();
  //  renderer.render(<Header />);
  //  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
