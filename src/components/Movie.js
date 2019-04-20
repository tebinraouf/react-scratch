import React from "react";
import PropTypes from "prop-types";

const Movie = (props) => {
	var id;
	if (props.match !== undefined) {
		id = props.match.params.id;
	} else {
		id = 0;
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