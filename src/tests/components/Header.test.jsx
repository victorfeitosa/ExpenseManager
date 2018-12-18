import React from 'react';
import { Header } from '../../components/Header';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should call startLogOut on button click', () => {
  const startLogOut = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogOut}/>);
  wrapper.find('button').simulate('click');
  expect(startLogOut).toHaveBeenCalled();
});
