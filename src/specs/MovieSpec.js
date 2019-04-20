import React from "react";
import Movie from "../components/Movie";

import renderer from "react-test-renderer";

describe("<Movie />", () => {
	test("Should render correctly", () => {
		const component = renderer.create(<Movie />);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});