import React from "react";
import { NavLink } from "react-router-dom";
import "../static/styles/header.css";

const Header = () => (
	<div>
        This is the header.
		<nav>
			<NavLink to="/">
                Home
			</NavLink>
			<NavLink to="/about">
                About
			</NavLink>
			<NavLink to="/movie/0">
                Get by URL Parameter
			</NavLink>
		</nav>
	</div>
);

export default Header;