import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'


// const topicObject = data.todos.checklist
// const thisList 
// const sortData = function(topic) {
//   for (key in topicObject) {
//     if (topicObject[key].smallClaims === undefined) {
//       console.log('undefined')
//     }
//     else {
//       thisList = topicObject[key].smallClaims;
//       console.log(thisList)
//     }
//   }
  
// }

const TodoList = ({ todos, onTodoClick }) => (
  
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList


/*
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
*/