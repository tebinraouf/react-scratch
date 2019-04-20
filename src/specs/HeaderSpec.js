import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import renderer from "react-test-renderer";

describe("<Header />", () => {
	test("should render correctly", () => {
		const component = renderer.create(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});