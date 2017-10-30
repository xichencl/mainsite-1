import React from 'react';

class CloseBot extends React.Component{
	constructor(props){
		super(props);
		this.handleClickOutside = this.props.handleClickOutside.bind(this);
	}

	componentDidMount(){
		window.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount(){
		window.removeEventListener('mousedown', this.handleClickOutside);
	}

	render(){
		return null;
	}
}

export default CloseBot;