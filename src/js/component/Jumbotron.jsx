import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
    return(
        <div className="mt-4 p-5 bg-light text-dark rounded">
		<h1>A Warm Welcome!</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis nisl vel pellentesque scelerisque. Ut eget ultricies leo. Nunc rhoncus fringilla turpis. Sed vitae.

</p>
		<button type="button" className="btn btn-primary">Call to action!</button>
	</div>
    )
}