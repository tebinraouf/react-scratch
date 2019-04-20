import React from "react";
import { mount } from "enzyme";
import Home from "../components/Home";

import renderer from "react-test-renderer";

describe("<Home />", () => {
	test("Should render correctly", () => {
		const component = renderer.create(<Home />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders an image ", () => {
		const wrapper = mount(<Home />);
		expect(wrapper.find("img").length).toBe(1);
	});
});