import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});