import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Squarebox from '../../../template/square-box';
import Bannerbox from '../../../template/banner-box';
import Infobox from '../../../template/info-box';
import { fetchParties } from '../../../../actions/content.js';
import { fetchFaqs } from '../../../../actions/content.js';

// Bot temporarily lives only in Small Claims until all case types are functional in bot
import Bot from '../../../chatbot/Bot.jsx';
// import PlaintiffIcon from '../../../../img/suing_1.svg';
// import DefendantIcon from '../../../../img/sued_1.svg';
import client from '../../../../services/contentful-client'

//3WOs1Yx3FKWAOwSYg4WsK2 smallclaims id

class SmallClaims extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     parties: [],
  //     faqs: []
  //   }
  // }

  // componentDidMount() {
		// client.getEntries({content_type: 'party'}).then((response) => {
  //     this.setState({parties: response.items})
  //   })
  // }
  componentWillMount() {
    this.props.fetchParties()
    // this.props.fetchFaqs()
  }

  

  renderParties() {
    return this.props.content.map((party, index) => {
      return (
        <div key={party.sys.id}>
          <Link to={`/smallclaims/${party.fields.url}`}>
            <Squarebox 
              id={party.sys.id}
              boxTitle={party.fields.title}  
              assetId={party.fields.image.sys.id}
            />
          </Link>
        </div>
      );
    });
  }


  render() {
    return (
      <div>
          {/* Bot temporarily lives only in Small Claims until all case types are functional in bot */}
          <Bot />
          <div className="Topic">
            <div className="mainpage-title">
              <hr className="mainpage-title-line" />
              <h1>Small Claims</h1>
              <hr className="mainpage-title-line"/>
            </div> 
            <div className="grid grid-pad">
            {this.renderParties()}
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.content.all };
}

export default connect(mapStateToProps, { fetchParties })(SmallClaims);
/*
          <Link to={`/smallclaims/${party.url}`}>
            <Squarebox
              boxTitle={party.title}
              imgSrc={party.img} 
            />
          </Link>
*/
