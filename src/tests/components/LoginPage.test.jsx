import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<LoginPage />);
});

test("should render LoginPage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin on button click", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage loginWithGithub={startLogin} loginWithGoogle={startLogin}/>);
  wrapper.find("#login-google").simulate("click");
  wrapper.find("#login-github").simulate("click");
  expect(startLogin).toHaveBeenCalledTimes(2);
});
