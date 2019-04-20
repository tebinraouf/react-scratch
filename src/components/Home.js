import React from "react";
import Toronto from "../static/images/toronto.jpg";
import "../static/styles/home.css";

console.log(process.env.NODE_ENV);

class Home extends React.Component {
	constructor (props) {
		super(props);
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	componentDidMount () {
		fetch(`${API_URL}toronto`)
			.then(result => result.json())
			.then(json => console.log(json));
	}
	handleOnClick () {
		console.log("handling on click....");
	}
	render () {
		return (
			<div>
				<h1>Hello Universe!</h1>
				<img src={Toronto} width="200" className="testClass"/>
				<br></br>
				<button onClick={this.handleOnClick}>Click Me</button>
			</div>
		);
	}
}
export default Home;