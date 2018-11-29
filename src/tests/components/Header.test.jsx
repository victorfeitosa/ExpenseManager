import React from 'react';
import { Header } from '../../components/Header';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header isLoggedIn={true}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});
