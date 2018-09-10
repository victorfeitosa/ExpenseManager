import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render NotFoundPage correctly', () => {
   const wrapper = shallow(<NotFoundPage />);
   expect(wrapper).toMatchSnapshot();
});