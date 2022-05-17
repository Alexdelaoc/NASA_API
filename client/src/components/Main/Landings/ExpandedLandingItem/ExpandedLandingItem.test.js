import React from "react";
import { shallow } from "enzyme";
import Expanded from "./Expanded";

describe("Expanded", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Expanded />);
    expect(wrapper).toMatchSnapshot();
  });
});
