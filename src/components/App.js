import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Movie from "./Movie";
import NotFound from "./NotFound";

const App = () => (
	<div>
		<BrowserRouter>
			<main>
				<Header />
				<Switch>
					<Redirect from="/home" to="/" />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/movie/:id?" component={Movie} />
					<Route component={NotFound} />
				</Switch>
			</main>
		</BrowserRouter>
	</div>
);

export default App;