import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Squarebox from '../../template/square-box';
import Bannerbox from '../../template/banner-box';
import Infobox from '../../template/info-box';
// Bot temporarily lives only in Small Claims until all case types are functional in bot
import Bot from '../../chatbot/Bot.jsx';
import PlaintiffIcon from '../../../img/suing_1.svg';
import DefendantIcon from '../../../img/sued_1.svg';



export default class SmallClaims extends Component {
  constructor() {
    super();
    this.state = {
      topics: [],
      parties: [
        { slug: "plaintiff", img: PlaintiffIcon, title: "Plaintiff" }, 
        { slug: "defendant", img: DefendantIcon, title: "Defendant" }
      ]
    };
  }

  // static defaultProps() {
  //   return {
  //     limit: 4
  //   }
  // }

  componentDidMount() {
    return fetch('https://case-data.glitch.me/courtdata')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ topics: responseJson });
        // console.log(this.state.topics)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    // smallclaims id = '7'
    const faqTitle = [];
    const self = this;
    const smallclaimsFAQs = this.state.topics.filter(topic => topic.id === '7').map((list) => {
      const faqList = list.faqs;

      for (const key of Object.keys(faqList)) {
        faqTitle.push(faqList[key].title);
      }
      return faqTitle;
    });

    const renderFaqTitles = faqTitle
      .filter((title, index) => {
        if (self.props.limit) {
          return index < self.props.limit;
        }
        return true;
      })
      .map(title =>
        <div className="topic-title">
          {title}
        </div>,
      );

    // right now parties is hard-coded in state, but in future could deliver through cms
    //caseType hard-coded, but in future may consider using react router params
    const renderParties = this.state.parties.map((party) => {
      return (
        <div>
          <Link to={`/smallclaims/${party.slug}`}>
            <Squarebox
              boxTitle={party.title}
              imgSrc={party.img} 
            />
          </Link>
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
            {/*<Bannerbox
              boxTitle="What is small claims court?"
              boxContent="Learn more about small claims court, who you can sue, where you should file, how much can be claimed, and what to expect to pay in filing fees."
              buttonText="FAQs"
              buttonLink="faqs/smallclaims"
            />*/}
            <div className="grid grid-pad">
              {renderParties}
            </div>
            <Infobox boxTitle="FAQs" boxContent={renderFaqTitles} buttonText="View More" infoBoxClass="Box Info-box medium-box"/>
          </div>
      </div>
    );
  }
}

SmallClaims.propTypes = { limit: React.PropTypes.number };
SmallClaims.defaultProps = { limit: 4 };
