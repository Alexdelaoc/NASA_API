import React from "react";
import { shallow } from "enzyme";
import LandingsList from "./LandingsList";

describe("LandingsList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
