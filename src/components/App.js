import React from "react";
import Toronto from "../static/images/toronto.jpg";
import "../static/styles/app.css";

console.log(process.env.NODE_ENV);

fetch(`${API_URL}toronto`)
	.then(result => result.json())
	.then(json => console.log(json));

// functional component
const App = () => (
	<div>
		<h1>Hello Universe!</h1>
		<img src={Toronto} width="200"/>
	</div>
);
export default App;