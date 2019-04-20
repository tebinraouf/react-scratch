import React from "react";
import Home from "../components/Home";

import renderer from "react-test-renderer";

describe("<Home />", () => {
	test("Should render correctly", () => {
		const component = renderer.create(<Home />);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});