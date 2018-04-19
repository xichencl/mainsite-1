import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
// import { CLIENT_ROOT_URL } from '../../actions/index';
import logoBw from '../../img/logo-219.svg';

import NavbarBurger from './navbar-burger';

const Navbar = (props) => {
  // console.log(props, 'props')
  // console.log(props.menuLinks, '...props.menuLinks...')
  const lang = props.language
  // console.log(lang, '..lang..')
  const menuLinks = props.menuLinks.map((link) => {
    const slug = link.fields.slug[lang]
    const title = link.fields.title[lang]
    //console.log(slug, title, '.....slug, title.....')
    console.log(title, '....title....')
    return (
      <NavLink
        key={link.sys.id}
        activeClassName="Menu-link--active"
        className="Menu-link"
        exact
        to={slug}>
        {title}
      </NavLink>
    )
  })

  return (
    <div className="Menu">
      <div className='Menu-logo'>
        <NavLink to="/">
          <img
            alt='Contra Costa Superior Courts logo'
            className='Menu-logo-img'
            src={logoBw}
          />
          <img
            alt='Contra Costa Superior Courts logo'
            className='Menu-logo-img-sm'
            src={logoBw}
          />
        </NavLink>
      </div>
      <div className="Menu-links">
        {menuLinks}
      </div>
    </div>
  )
};

export default Navbar
