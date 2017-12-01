import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onAccordionClick, loading, toggled }) => (
  <div>

    <div className="checklist-list-container">
      {loading ? 'Loading...': ''}
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => { onTodoClick(todo.id); }}
          onToggle={() => { onAccordionClick(todo.id);}}

        />
      )}
    </div>

  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    expanded: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired, 
    
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onAccordionClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  // toggled: PropTypes.bool.isRequired
}

export default TodoList

/*
const TodoList = ({ todos, onTodoClick, loading, toggled }) => (
  <div>

    <div className="checklist-list-container">
      {loading ? 'Loading...': ''}
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </div>

  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired, 
    
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  // toggled: PropTypes.bool.isRequired
}
*/