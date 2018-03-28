import React from 'react';
import { connect } from 'react-redux';
import { toggleLanguages } from '../../actions/content';
import { withRouter } from 'react-router';

class Languages extends React.Component{
	constructor(props){
		super(props);
		// this.state = {lang : 'en-US'};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.props.toggleLanguages(e.target.value);
	}

	render(){
	   return (
		   <div className="Languages">
			<button type="button" value="en-US" disabled={this.props.language === 'en-US'} onClick={this.handleClick}>English</button>
		    <button type="button" value="es" disabled={this.props.language === 'es'} onClick={this.handleClick}>Spanish</button>
		   </div>
		);

	}
}

function mapStateToProps (state) {
	return {language: state.content.language};
}



export default withRouter(connect(mapStateToProps, { toggleLanguages })(Languages));
