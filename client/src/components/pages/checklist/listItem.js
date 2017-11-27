import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default ListItem

// for the <li>
//     style={{
//      textDecoration: completed ? 'line-through' : 'none'
//    }}
// this should be something that toggles a css style if completed
// under propTypes is: 
//   completed: PropTypes.bool.isRequired,
