import React from "react";
import PropTypes from "prop-types";

const Movie = (props) => {
	const match = props.match === undefined ? {} : props.match;
	var id = match === undefined ? 0 : match.params;

	if (typeof id === "object") {
		id = id.id;
	}

	// const { id } = props.match.params;

	return (
		<div>
            Hello {id}
		</div>
	);
};

Movie.propTypes = {
	match: PropTypes.object
};

export default Movie;