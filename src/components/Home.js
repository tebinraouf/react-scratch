import React from "react";
import Toronto from "../static/images/toronto.jpg";
import "../static/styles/home.css";

console.log(process.env.NODE_ENV);

class Home extends React.Component {
	componentDidMount () {
		fetch(`${API_URL}toronto`)
			.then(result => result.json())
			.then(json => console.log(json));
	}
	render () {
		return (
			<div>
				<h1>Hello Universe!</h1>
				<img src={Toronto} width="200"/>
			</div>
		);
	}
}
export default Home;