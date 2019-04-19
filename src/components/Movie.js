import React from "react";

const Movie = (props) => {
	const { id } = props.match.params;
	return (
		<div>
            Hello {id}
		</div>
	);
};

export default Movie;