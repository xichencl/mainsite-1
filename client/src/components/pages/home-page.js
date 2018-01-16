import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Squarebox from '../template/square-box';
import Bannerbox from '../template/banner-box';
import Infobox from '../template/info-box';

import IcnSC from '../../img/smallclaims_1.svg';
import IcnDV from '../../img/dv_1.svg';
import IcnGuardianship from '../../img/guardianship_1.svg';
import IcnTraffic from '../../img/traffic_1.svg';
import IcnEviction from '../../img/eviction_1.svg'; 
import IcnFamily from '../../img/family_1.svg';

export default class HomePage extends Component {
  render() {
    return (
      <div className="mainpage">
        <div className="mainpage-title">
          <hr className="mainpage-title-line" />
          <h1>Self-Help Law Center</h1>
          <hr className="mainpage-title-line"/>
        </div>
{/*        <Bannerbox 
          boxTitle='Do I need a lawyer?'
          boxContent='Learn more about representing yourself in court, and explore frequently asked questions.'
          buttonText='FAQs'
          buttonLink='/faqs'
        />*/}
        <div className="grid grid-pad">
          <div>
            <Link to="/guardianship">
              <Squarebox 
                  id=""
                  boxTitle="Guardianship"
                  imgSrc={IcnGuardianship}
               /> 
            </Link> 
          </div>
          <div>
            <Link to="/family">
              <Squarebox 
                  id=""
                  boxTitle="Family Law"
                  imgSrc={IcnFamily}
               /> 
            </Link> 
          </div>
          <div>
            <Link to="/eviction">
              <Squarebox 
                  id=""
                  boxTitle="Eviction"
                  imgSrc={IcnEviction}
               /> 
            </Link> 
          </div>
          <div>
            <Link to="/dv">
              <Squarebox 
                  id=""
                  boxTitle="Domestic Violence"
                  imgSrc={IcnDV}
               /> 
            </Link> 
          </div>
          <div>
            <Link to="/smallclaims">
              <Squarebox 
                  id=""
                  boxTitle="Small Claims"
                  imgSrc={IcnSC}
               /> 
            </Link> 
          </div>
          <div>
            <Link to="/traffic">
              <Squarebox 
                  id=""
                  boxTitle="Traffic"
                  imgSrc={IcnTraffic}
               /> 
            </Link> 
          </div>

        </div>
      </div>

    ) 
  }
}

