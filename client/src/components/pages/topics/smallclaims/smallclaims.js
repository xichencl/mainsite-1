import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Squarebox from '../../template/square-box';
// import Bannerbox from '../../template/banner-box';
// import Infobox from '../../template/info-box';
// // Bot temporarily lives only in Small Claims until all case types are functional in bot
// import Bot from '../../chatbot/Bot.jsx';
// import PlaintiffIcon from '../../../img/suing_1.svg';
// import DefendantIcon from '../../../img/sued_1.svg';
import { connect } from 'react-redux';

import Squarebox from '../../../template/square-box';
import Bannerbox from '../../../template/banner-box';
import Infobox from '../../../template/info-box';
import { fetchParties } from '../../../../actions/content.js';
import { fetchFaqs } from '../../../../actions/content.js';
// import { fetchResourceLinks } from '../../../../actions/content.js';

// Bot temporarily lives only in Small Claims until all case types are functional in bot
import Bot from '../../../chatbot/Bot.jsx';
// import PlaintiffIcon from '../../../../img/suing_1.svg';
// import DefendantIcon from '../../../../img/sued_1.svg';
import client from '../../../../services/contentful-client'

//3WOs1Yx3FKWAOwSYg4WsK2 smallclaims id

const temporaryFaqs = [
  {
    id: 1,
    title: "Do I need a lawyer?",
    url: "faqs"
  },
  {
    id: 2,
    title: "Which Court Should I Use: Small Claims or Limited Civil?",
    url: "faqs"
  },
  {
    id: 3,
    title: "What Kinds of Cases are Heard in Small Claims Court?",
    url: "faqs"
  },
  {
    id: 4,
    title: "How Much Money Can I Sue For?",
    url: "faqs"
  }
]

const resourceList = [
  { 
    title: "Small Claims Advisor",
    link: "http://www.courts.ca.gov/selfhelp-advisors.htm"
  },
  { 
    title: "California Department of Consumer Affairs",
    link: "http://www.dca.ca.gov/publications/small_claims/index.shtml"
  },
  { 
    title: "Find a Law Library",
    link: "http://www.publiclawlibrary.org/law-libraries/"
  },
  { 
    title: "Videos",
    link: "https://www.youtube.com/watch?v=wZ491ri0E74&list=PLnMJyjNWwPW7RCLl0kmdMuOkpAHGMbYnn"
  },
] 

class SmallClaims extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     topics: [],
  //     parties: [
  //       { slug: "plaintiff", img: PlaintiffIcon, title: "Plaintiff" }, 
  //       { slug: "defendant", img: DefendantIcon, title: "Defendant" }
  //     ]
  //   };
  // }

  // static defaultProps() {
  //   return {
  //     limit: 4
  //   }
  // }

  // componentDidMount() {
  //   return fetch('https://case-data.glitch.me/courtdata')
  //     .then(response => response.json())
  //     .then((responseJson) => {
  //       this.setState({ topics: responseJson });
  //       // console.log(this.state.topics)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  componentWillMount() {
    this.props.fetchParties()
    // this.props.fetchFaqs()
    // this.props.fetchResourceLinks()
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
    const faqs = temporaryFaqs.map((faq, index) => {
      return (
        <div key={index}>
          <Link to={faq.url}>
            <p>{faq.title}</p>
          </Link>
        </div>
      )
    })

    const resources = resourceList.map((item) => {
      return (
        <div>
          <a href={item.link} target="_blank">{item.title}</a>
        </div>
      )
    })

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
              <Infobox 
                boxTitle="Frequently Asked Questions"
                boxContent={faqs}
                buttonText="View More"
                infoboxClass="Box Text-icon-box Grey-background medium-box"
              />
              <Infobox 
                boxTitle="Resources"
                boxContent={resources}
                buttonVisibilityClass="hidden"
                infoboxClass="Box Info-box small-box col-2"
              />
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.content.parties };
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