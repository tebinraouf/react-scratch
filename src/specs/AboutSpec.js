import React from "react";
import About from "../components/About";
import renderer from "react-test-renderer";

describe("<About />", () => {
	test("Should render correctly", () => {
		const component = renderer.create(<About />);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});