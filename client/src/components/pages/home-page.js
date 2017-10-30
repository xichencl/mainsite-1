import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Squarebox from '../template/square-box';
import Bannerbox from '../template/banner-box';
import Infobox from '../template/info-box';


export default class HomePage extends Component {
	constructor(props){
    super(props); 
    this.state={
      topics:[]
    }
  }

  // static defaultProps() {
  //     return {
  //       limit: 4
  //     }
  // }
 
  componentDidMount() {
    return fetch('https://case-data.glitch.me/courtdata', {headers:{'Content-Type': 'application/json',}})
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({topics: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const topicArray = [];
    const topics = this.state.topics
    .map(function(topic) { 
      var testPath = '../../../img/smallclaims.svg';
      var iconLink = topic.img; 
      var imgPath = `../../../${iconLink}`
      if (topic.id < 12) {
        return (
          <div key={topic.id}>
          <Link to={topic.url}>
            <Squarebox 
                id={topic.id}
                boxTitle={topic.name}
                iconClass={topic.class}
             /> 
          </Link>
          </div>
        )
      }
      else {
        return (<div></div>)
      }

    })
    return (
      <div>
        <h1>Self Help Law Center</h1>
        <Bannerbox 
          boxTitle='Do I need a lawyer?'
          boxContent='Learn more about representing yourself in court, and explore frequently asked questions.'
          buttonText='FAQs'
          buttonLink='/faqs'
        />
        <div className="grid grid-pad">
          {topics}
        </div>
      </div>
    ) 
  }
}