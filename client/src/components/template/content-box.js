import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { routeCodes } from '../../App.js';
// import PropTypes from 'prop-types';

export default class ContentBox extends Component {
	render() {
		return (
			<div className="Box Square-box col-2 Profile-box" id={this.props.id}>
				<div className="Square-box-static module">
					<div className="Square-box-static-main">
						<h3>{this.props.boxTitle}</h3>
						<Link to={this.props.boxLink}><i className={this.props.boxIcon} aria-hidden="true"></i></Link>
					</div>
					<div className="Square-box-static-links">
						<p>{this.props.boxContent}</p>
					</div>
				</div>
			</div>
		)
	}
}



// how to manage icons? 
// <Icon />{this.props.glyph} 
// div needs to be a link to the /page => "/smallclaims" 
// {`/${this.props.boxLink}`}
// link to= "/:type"