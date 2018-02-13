import React, { Component } from 'react';

const fakeContent = [
	{
		id: 1,
		title: "What is Small Claims Court?",
		text: "Small claims court is set-up to resolve disputes quickly with little costs. Cases are always for less than $10,000. The rules are more simple and the hearings are less formal than in other courts. You can talk to a lawyer about your small claims case, but your lawyer cannot represent you in court."
	},
	{
		id: 2,
		title: "Who Can File a Claim in Small Claims Court",
		text: "Generally, any adult, business or government agency (except the federal government) can sue or be sued in small claims court – as long as the dispute is about money."
	}
];

export default class AccordionBoxContainer extends Component {
	renderContent() {
		return fakeContent.map((content) => {
			return (
				<div>
					<h3>{content.title}</h3>
					<div>{content.text}</div>
					<hr />
				<div>
			)
		})
	}

	render() {
		return (
			<div className={this.props.AccordionBoxContainerClass}>
				{this.renderContent()}
			</div>
		)
	}
} 

AccordionBoxContainer.propTypes = { limit: React.PropTypes.number };
AccordionBoxContainer.defaultProps = { 
	AccordionBoxContainerClass: 'Box White-box Info-box ',
};

/*
render() {
		return (
			<div className={this.props.AccordionListBoxClass}>
				<h3>{this.props.boxTitle}</h3>
				<hr />
				<div>{this.props.boxContent}</div>
			</div>
		)
	}
*/