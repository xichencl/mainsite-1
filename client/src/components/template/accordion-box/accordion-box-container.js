import React, { Component } from 'react';

export default class AccordionBoxContainer extends Component {
	renderAccordionContent() {

	}

	render() {
		return (
			<div className={this.props.AccordionListBoxClass}>
				<h3>{this.props.boxTitle}</h3>
				<hr />
				<div>{this.props.boxContent}</div>
			</div>
			)
	}
} 

AccordionBoxContainer.propTypes = { limit: React.PropTypes.number };
AccordionBoxContainer.defaultProps = { 
	AccordionBoxContainerClass: 'Box White-box Info-box ',
};