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
	constructor() {
		super();
		this.state = {
			hidden: true,
			id: null
		}
		this.setIdOnClick = this.setIdOnClick.bind(this);
		this.toggleHidden = this.toggleHidden.bind(this);
	}

	setIdOnClick(_id) {
		this.setState({ id: _id})
	}

	toggleHidden(_id) {
		if (this.state.id = _id && hidden) {
			this.setState({
				hidden: false
			})
		} else {
			this.setState({
				hidden: true
			})
		}
	}

	render() {
		const renderedContent = fakeContent.map((content) => {
			return (
				<div key={content.id}>
					<h3>{content.title}</h3>
					<div>{content.text}</div>
					<hr />
				</div>
			)
		})
		return (
			<div className="Box AccordionBoxContainer medium-box">
				{renderedContent}
			</div>
		)
	}
} 

