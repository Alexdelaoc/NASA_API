import React from "react";
import { shallow } from "enzyme";
import ExpandedNeaItem from "./ExpandedNeaItem";

describe("ExpandedNeaItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ExpandedNeaItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
