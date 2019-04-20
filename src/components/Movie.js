import React from "react";
import PropTypes from "prop-types";

const Movie = (props) => {
	var id = 0;

	if (props.match !== undefined) {
		id = props.match.params.id;
	}
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