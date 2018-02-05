import React, { Component } from 'react';

export default class AccordionListBox extends Component {
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

AccordionListBox.propTypes = { limit: React.PropTypes.number };
AccordionListBox.defaultProps = { 
	AccordionListBoxClass: 'Box White-box Info-box ',
};
