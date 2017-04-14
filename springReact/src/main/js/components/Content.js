import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="starter-template">
			        <h1>Bootstrap starter template</h1>
			        <p className="lead">ReactProject</p>
			    </div>
			</div>
		);
	}
}

Content.propTypes = {
	title:PropTypes.string,
	body:PropTypes.string.isRequired
};

export default Content;