import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './listItem'

const ListContainer = ({ checklistItems, onListItemClick }) => (
  <ul>
    {checklistItems.map(listItem => (
      <ListItem key={listItem.id} {...listItem} onClick={() => onListItemClick(listItem.id)} />
    ))}
  </ul>
)

ListContainer.propTypes = {
  checklistItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onListItemClick: PropTypes.func.isRequired
}

export default ListContainer

