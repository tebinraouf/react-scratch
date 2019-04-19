import React from "react";
import Toronto from "../static/images/toronto.jpg";
import "../static/styles/home.css";

console.log(process.env.NODE_ENV);

fetch(`${API_URL}toronto`)
	.then(result => result.json())
	.then(json => console.log(json));

// functional component
const Home = () => (
	<div>
		<h1>Hello Universe!</h1>
		<img src={Toronto} width="200"/>
	</div>
);
export default Home;