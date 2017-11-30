import { connect } from 'react-redux'
import { toggleTodo } from '../../../../actions/index.js'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case 'SHOW_BEFORE':
    return todos.filter(t => t.stage == 0) //toggles before/during/after for checklist
  case 'SHOW_DURING':
    return todos.filter(t => t.stage == 1)
  case 'SHOW_AFTER':
    return todos.filter(t => t.stage == 2)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList