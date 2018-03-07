import React, {Component} from 'react';
import TitleLine from '../template/title-line'

export default class UnderConstruction extends Component {
	render() {
		return (
			<div>
				<TitleLine title="Pardon our dust" />
				<p>This page hasn't been built yet!</p>
				<p>We're working hard to bring you new and updated content. Thank you for your patience.</p>
			</div>
		) 
	}
}
