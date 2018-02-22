import React, { Component } from 'react';

const TitleLine = props => {
	return (
		<div>
			<h1 className="title-line-background"><span>{props.title}</span></h1>
		</div>
	)
}

export default TitleLine;