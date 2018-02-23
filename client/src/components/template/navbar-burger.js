import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, Link } from 'react-router-dom';

class NavbarBurger extends Component {
	// showSettings(event) {
	// 	event.preventDefault();
	// }

	render() {
		return (
			<Menu>
				<div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to='/'
          >
            Home
          </NavLink>
          {this.props.azure === 'AZURE'? <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/azure-portal'
          >
            My Portal
          </NavLink> : 
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/portal'
          >
            My Portal
          </NavLink>}
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/forms'
          >
            Forms
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/faqs'
          >
            FAQs
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/video-resources'
          >
            Video Resources
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/locations'
          >
            Find a Courthouse
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/contact-us'
          >
            Contact
          </NavLink>
        </div>
			</Menu>
		)
	}
}