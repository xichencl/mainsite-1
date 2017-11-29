import React from 'react'
import { connect } from 'react-redux'


class ListContainer extends React.Component {

	render() {
		return (
			<div>
				<div className="checkbox"></div>
				<div className="list">{this.props.data}</div>
			</div>
		)
	}
}

