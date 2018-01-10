import React, { Component } from 'react';

export default class SmallClaimsParty extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
  		<div>
	      <h1>{this.props.parties}</h1>
	    </div>
		)
  } 
}



// const SmallClaimsParty = ({ party }) => (

//     		<div>
// 		      <h1>{party}</h1>
// 		    </div>
    
// )

// Todo.propTypes = {
//   party: PropTypes.string.isRequired, 
// }

// export default SmallClaimsParty;