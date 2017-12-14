import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TaskList = ({ checklist, onTodoClick }) => (
  <ul>
    {checklist.smallClaims.map(page => (
    	page.before.map(listItem => (
    		<li>{listItem}</li>
    	))
    ))}
  </ul>
)

// <Todo key={listItem.id} {...listItem} onClick={() => onTodoClick(listItem.id)} />
// {listItem.title}

TaskList.propTypes = {
  checklist: PropTypes.arrayOf(
    PropTypes.shape({
    	PropTypes.arrayOf(
    		before: PropTypes.arrayOf(
    			title: PropTypes.string.isRequired,
    			blockText: PropTypes.string.isRequired,
    			id: PropTypes.number.isRequired,
    			completed: PropTypes.bool.isRequired
    		).isRequired,
    		during: PropTypes.arrayOf(
    			title: PropTypes.string.isRequired,
    			blockText: PropTypes.string.isRequired,
    			id: PropTypes.number.isRequired,
    			completed: PropTypes.bool.isRequired
    		).isRequired,
        after: PropTypes.arrayOf(
    			title: PropTypes.string.isRequired,
    			blockText: PropTypes.string.isRequired,
    			id: PropTypes.number.isRequired,
    			completed: PropTypes.bool.isRequired
    		).isRequired
    	).isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}
export default TaskList

// TaskList.propTypes = {
//   checklist: PropTypes.arrayOf(
//     PropTypes.shape({
//     	PropTypes.arrayOf(
//     		before: PropTypes.arrayOf(
//     			title: PropTypes.string.isRequired,
//     			blockText: PropTypes.string.isRequired,
//     			id: PropTypes.number.isRequired,
//     			completed: PropTypes.bool.isRequired
//     		).isRequired,
//     		during: PropTypes.arrayOf(
//     			title: PropTypes.string.isRequired,
//     			blockText: PropTypes.string.isRequired,
//     			id: PropTypes.number.isRequired,
//     			completed: PropTypes.bool.isRequired
//     		).isRequired,
//         after: PropTypes.arrayOf(
//     			title: PropTypes.string.isRequired,
//     			blockText: PropTypes.string.isRequired,
//     			id: PropTypes.number.isRequired,
//     			completed: PropTypes.bool.isRequired
//     		).isRequired
//     	).isRequired,
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }